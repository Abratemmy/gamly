import React, { useState, useEffect } from 'react';
import './PendingKyc.scss'
import HostSidebar from '../../../../Components/PanelSIDEBAR/HostSidebar';
import { IoIosArrowForward } from 'react-icons/io';
import TableProgressBar from '../../../../Components/TableProgressBar/TableProgressBar';
import Pagination from '../../../../Components/Pagination/Pagination';
import { Table, Thead, Tr, Td, Tbody } from "../../../../Components/Table/Table"
import { useDispatch, useSelector } from 'react-redux';
import TableTop from '../../../../Components/TableTop/TableTop';
import { NavLink, useNavigate } from 'react-router-dom';
import Avatar from "../../../../Assets/Avatar.svg"
import { getAllKYC } from '../../../../Components/REDUX/ACTION/KYCAction';

function PendingKyc() {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getAllCreators = useSelector((state) => state.kycReducer);
    console.log("code Management", getAllCreators)
    const pageCount = Math.ceil(getAllCreators?.length / newsPerPage);
    const progressWidth = ((newsVisited + newsPerPage) / getAllCreators?.length) * 100
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }


    useEffect(() => {
        dispatch(getAllKYC())
    }, [dispatch])
    return (
        <HostSidebar name="KYC">
            <div className='pendingKyc KYC'>
                <div className='container'>
                    <div className='detailTop'>
                        <NavLink to="/kyc" className='left'>KYC</NavLink>
                        <span className='iconspan'><IoIosArrowForward className="icon" /> </span>
                        <span className='right'>Pending Verification</span>
                    </div>

                    <div className='tablePage tableSection doNotShowDate'>
                        <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                            placeHolder="Search"
                        />
                        <div className="scroll-container">
                            <Table className="table scroll kycTable">
                                <Thead>
                                    <Tr>
                                        <Td>Name</Td>
                                        <Td>Email</Td>
                                        <Td>Mobile Number</Td>
                                        <Td>Social media</Td>
                                        <Td></Td>
                                        <Td></Td>
                                    </Tr>
                                </Thead>

                                <Tbody className="tbody">
                                    {getAllCreators?.slice ? (
                                        <>
                                            {getAllCreators?.filter((item) => {
                                                return search?.toLowerCase() === "" ? item :
                                                    (item?.username?.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase()))

                                            })?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                                return (
                                                    <Tr key={index}>
                                                        <Td className="td firstRowData" width="25%">{data?.name}</Td>
                                                        <Td className="td email otherData">{data?.email}</Td>
                                                        <Td className="td email otherData">{data?.phone}</Td>
                                                        <Td className="td social">@{data?.username}</Td>
                                                        <Td className="td tdAction">
                                                            <div className='buttonaction'>
                                                                <button className='button approve'>Approve</button>
                                                                <button className='button decline'>Decline</button>
                                                            </div>
                                                        </Td>
                                                        <Td className="td otherData details"><NavLink to={`/kyc/pending_verification/${data.id}`} className="tableNav">View</NavLink></Td>

                                                    </Tr>
                                                )
                                            })}
                                        </>
                                    ) : ("")}
                                </Tbody>
                            </Table>
                        </div>
                    </div>

                    <TableProgressBar data={getAllCreators} newsPerPage={newsPerPage} progressWidth={progressWidth} />

                    <Pagination pageCount={pageCount} changePage={changePage} />
                </div>
            </div>
        </HostSidebar>
    )
}

export default PendingKyc