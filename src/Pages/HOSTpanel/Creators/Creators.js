import React, { useState, useEffect } from 'react'
import "./Creators.scss";
import HostSidebar from '../../../Components/PanelSIDEBAR/HostSidebar';
import TableProgressBar from '../../../Components/TableProgressBar/TableProgressBar';
import Pagination from '../../../Components/Pagination/Pagination';
import { Table, Thead, Tr, Td, Tbody } from "../../../Components/Table/Table"
import { useDispatch, useSelector } from 'react-redux';
import TableTop from '../../../Components/TableTop/TableTop';
import { getAllCREATOR } from '../../../Components/REDUX/ACTION/creatorAction';
import pointGreen from '../../../Assets/pointGreen.svg';
import pointYellow from '../../../Assets/pointYellow.svg'
import { NavLink } from 'react-router-dom';
import Avatar from "../../../Assets/Avatar.svg"

function Creators() {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getAllCreators = useSelector((state) => state.creatorReducer);
    console.log("code Management", getAllCreators)
    const pageCount = Math.ceil(getAllCreators?.length / newsPerPage);
    const progressWidth = ((newsVisited + newsPerPage) / getAllCreators?.length) * 100
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }

    useEffect(() => {
        dispatch(getAllCREATOR())
    }, [dispatch])

    return (
        <HostSidebar name="Creators">
            <div className='Creators allPages'>
                <div className='container'>
                    <div className='page-top'>
                        Creators
                        <span>Here’s a list of all creators</span>
                    </div>

                    <div className='tablePage tableSection doNotShowDate'>
                        <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                            placeHolder="Search"
                        />
                        <div className="scroll-container">
                            <Table className="table scroll">
                                <Thead>
                                    <Tr>
                                        <Td>Creator Name</Td>
                                        <Td>Email</Td>
                                        <Td>Mobile Number</Td>
                                        <Td>Invitation code</Td>
                                        <Td>Total Income</Td>
                                        <Td>KYC Status</Td>
                                        <Td>Details</Td>
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
                                                        <Td className="firstRowData" width="25%">
                                                            <div className='data'>
                                                                {data?.image ?
                                                                    <div className='image'><img src={data?.image} alt="" /></div>
                                                                    : <div className='image'><img src={Avatar} alt="" /></div>
                                                                }

                                                                <div className='dataName'>
                                                                    <div>{data?.name}</div>
                                                                    <div className='username'>@{data?.username}</div>
                                                                </div>
                                                            </div>
                                                        </Td>
                                                        <Td className="email otherData">{data?.email}</Td>
                                                        <Td className="otherData mobile">{data?.phone}</Td>
                                                        <Td className="otherData invitationCode">{data.address.suite}</Td>
                                                        <Td className="money otherData">${data?.id},902</Td>
                                                        <Td className="otherData">{data?.address?.geo.lng >= 0 ? <span>
                                                            <span style={{ paddingRight: '5px' }}><img src={pointGreen} alt="" style={{ width: '9px' }} /></span> Active
                                                        </span> : <span>
                                                            <span style={{ paddingRight: '5px' }}><img src={pointYellow} alt="" style={{ width: '9px' }} /></span> Pending
                                                        </span>}
                                                        </Td>
                                                        <Td className="otherData"><NavLink to={`/creators/${data.id}`} className="tableNav">View</NavLink></Td>

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

export default Creators