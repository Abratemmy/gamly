import React, { useState, useEffect } from 'react';
import "./GameMetrics.scss";
import HostSidebar from '../../../Components/Host/HostSidebar';
import Pagination from '../../../Components/Common/Pagination/Pagination';
import { Table, Thead, Tr, Td, Tbody } from "../../../Components/Common/Table/Table"
import TableTop from '../../../Components/Common/TableTop/TableTop';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGAMETRICS } from '../../../Components/Host/HOSTACTION/gameMetricsAction';
import RightSidebar from './rightSidebar/RightSidebar';

function GameMetrics() {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getGameMetricsData = useSelector((state) => state.gameMetricsReducer);
    console.log("code Management", getGameMetricsData)
    const pageCount = Math.ceil(getGameMetricsData?.length / newsPerPage);
    const progressWidth = ((newsVisited + newsPerPage) / getGameMetricsData?.length) * 100
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

    useEffect(() => {
        dispatch(getAllGAMETRICS())
    }, [dispatch])
    return (
        <HostSidebar name="Game Metrics">
            <div className='gameMetrics allPages'>
                <div className='container'>
                    <div className='top'>
                        Game Metrics<span>Here’s a list of all creators</span>
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
                                        <Td>User Name</Td>
                                        <Td>Social media</Td>
                                        <Td>Total game hosted</Td>
                                        <Td>Total game contested</Td>
                                        <Td>Contest Duration (Hr)</Td>
                                        <Td>Game Hosted Duration (HR)</Td>
                                    </Tr>
                                </Thead>

                                <Tbody className="tbody">
                                    {getGameMetricsData?.slice ? (
                                        <>
                                            {getGameMetricsData?.filter((item) => {
                                                return search?.toLowerCase() === "" ? item :
                                                    (item?.username?.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase()))

                                            })?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                                return (
                                                    <Tr key={index} onClick={() => changeContent(data, index)} className="tableBodyRow">
                                                        <Td className="name td">{data?.name}</Td>
                                                        <Td className="username  td">{data?.username}</Td>
                                                        <Td className=" social td">@{data?.address?.city}</Td>
                                                        <Td className="otherData invitationCode td">70</Td>
                                                        <Td className="money otherData td">60</Td>
                                                        <Td className="otherData invitationCode td">40</Td>
                                                        <Td className="money otherData td">20</Td>
                                                    </Tr>
                                                )
                                            })}
                                        </>
                                    ) : ("")}
                                </Tbody>
                            </Table>
                        </div>
                    </div>

                    {/* <TableProgressBar data={getGameMetricsData} newsPerPage={newsPerPage} progressWidth={progressWidth} /> */}
                    <div className='paginationSession'>
                        <Pagination pageCount={pageCount} changePage={changePage} />
                    </div>

                </div>
            </div>

            {openrightSidebar && (
                <div className='popupContainer'>
                    <div className='rightSidebar rightSidebar2' onClick={(e) => e.stopPropagation()}>
                        <RightSidebar popupcontent={popupcontent} onClick={() => setOpenRightSidebar(false)} />

                    </div>
                </div>
            )}
        </HostSidebar>
    )
}

export default GameMetrics