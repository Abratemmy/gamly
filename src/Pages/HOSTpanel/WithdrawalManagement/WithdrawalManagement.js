import React, { useState, useEffect } from 'react'
import "./WithdrawalManagement.scss";
import HostSidebar from '../../../Components/PanelSIDEBAR/HostSidebar';
import Pagination from '../../../Components/Pagination/Pagination';
import { Table, Thead, Tr, Td, Tbody } from "../../../Components/Table/Table"
import { useDispatch, useSelector } from 'react-redux';
import TableTop from '../../../Components/TableTop/TableTop';
import pointGreen from '../../../Assets/pointGreen.svg';
import pointRed from '../../../Assets/pointRed.svg'
import { getAllWITHDRAWAL } from '../../../Components/REDUX/ACTION/hostwidrawalaction';
import RightSidebar from './RightSidebar';
import RightWithdrawal from './RightWithdrawal';

function WithdrawalManagement() {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getAllWithdrawalData = useSelector((state) => state.hostWithdrawalReducer);

    const pageCount = Math.ceil(getAllWithdrawalData?.length / newsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }

    const [openrightSidebar, setOpenRightSidebar] = useState(false);
    const [popupcontent, setPopupcontent] = useState({})

    const changeContent = (data) => {
        setPopupcontent(data);
        setOpenRightSidebar(true)
    }

    const [openRightWithdrawal, setOpenrightWithdrawal] = useState(false)

    const withdrawalStatus = (data) => {
        setPopupcontent(data);
        setOpenRightSidebar(false)
        setOpenrightWithdrawal(true)
    }
    useEffect(() => {
        dispatch(getAllWITHDRAWAL())
    }, [dispatch])
    return (
        <HostSidebar name="Withdrawals">
            <div className='Creators withdrawalContainer'>
                <div className='container'>
                    <div className='page-top'>
                        <div>
                            Withdrawals
                            <span>Here’s a list of all withdrawals</span>
                        </div>
                        <div className='topButton'>
                            <button >Pending KYC</button>
                        </div>
                    </div>

                    <div className='tablePage tableSection'>
                        <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                            placeHolder="Search"
                        />
                        <div className="scroll-container">
                            <Table className="table scroll kycTable">
                                <Thead className='thead'>
                                    <Tr>
                                        <Td className='td'>S/N</Td>
                                        <Td className='td'>Beneficiary</Td>
                                        <Td className='td'>Account Number</Td>
                                        <Td className='td'>withdrawal ID</Td>
                                        <Td className='td'>Bank Name</Td>
                                        <Td className='td'>Amount</Td>
                                        <Td className='td'>Approved Date</Td>
                                        <Td className='td'>Payment Message</Td>
                                        <Td className='td'>status</Td>
                                    </Tr>
                                </Thead>

                                <Tbody className="tbody">
                                    {getAllWithdrawalData?.slice ? (
                                        <>
                                            {getAllWithdrawalData?.filter((item) => {
                                                return search?.toLowerCase() === "" ? item :
                                                    (item?.username?.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase()))

                                            })?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                                return (
                                                    <Tr key={index} onClick={() => changeContent(data, index)} className='tableRow'>
                                                        <Td className='td sN'>{((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                            <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                        }
                                                        </Td>
                                                        <Td className=" id td">{data?.name}</Td>
                                                        <Td className="email  td">{data?.address?.zipcode}</Td>
                                                        <Td className="email  td">AQB{data?.id}906</Td>
                                                        <Td className="email  td">{data?.address?.street}</Td>
                                                        <Td className="email  td">NGN 500,000</Td>
                                                        <Td className="email  td">2020-07-21</Td>
                                                        <Td className="email  td">{data?.address?.geo?.lng >= 0 ? <span>
                                                            Posted successful
                                                        </span> : <span>Not posted</span>}</Td>
                                                        <Td className=" td status">{data?.address?.geo.lng >= 0 ? <span>
                                                            <span style={{ paddingRight: '5px' }}><img src={pointGreen} alt="" style={{ width: '8px' }} /></span> Approved
                                                        </span> :
                                                            <span>
                                                                <span style={{ paddingRight: '5px' }}><img src={pointRed} alt="" style={{ width: '8px' }} /></span> Rejected
                                                            </span>}
                                                        </Td>


                                                    </Tr>
                                                )
                                            })}
                                        </>
                                    ) : ("")}
                                </Tbody>
                            </Table>
                        </div>
                    </div>

                    <Pagination pageCount={pageCount} changePage={changePage} />
                </div>

                {openrightSidebar && (
                    <div className='popupContainer'>
                        <div className='rightSidebar' onClick={(e) => e.stopPropagation()}>
                            <RightSidebar popupcontent={popupcontent} onClick={() => setOpenRightSidebar(false)} withdrawalStatus={() => withdrawalStatus(popupcontent)} />

                        </div>
                    </div>
                )}

                {openRightWithdrawal && (
                    <div className='popupContainer'>
                        <div className='rightSidebar rightSidebar2' onClick={(e) => e.stopPropagation()}>

                            <RightWithdrawal popupcontent={popupcontent} onClick={() => setOpenrightWithdrawal(false)} />

                        </div>
                    </div>
                )}
            </div>
        </HostSidebar>
    )
}

export default WithdrawalManagement