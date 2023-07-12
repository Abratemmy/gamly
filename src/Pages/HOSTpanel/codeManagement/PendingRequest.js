import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io'
import { Table, Thead, Tr, Td, Tbody } from "../../../Components/Common/Table/Table"
import TableTop from '../../../Components/Common/TableTop/TableTop';
import Pagination from '../../../Components/Common/Pagination/Pagination';

function PendingRequest({ setToggleState }) {
    const [search, setSearch] = useState('');

    const pendingData = [
        { name: "Kathryn Murphy", email: "kate@gmail.com", mobile: "+7(234) 789 7899", social: "@benard" },
        { name: "Abel Kate", email: "abel@gmail.com", mobile: "+7(903) 790 789", social: "@abel" },
        { name: "Christian Alao", email: "christian@gmail.com", mobile: "+7(904) 789 782", social: "@christian" },
        { name: "Joy stephen", email: "joystep@gmail.com", mobile: "+7(234) 789 7899", social: "@joystep" },
        { name: "Favour Emmanuel", email: "favour@gmail.com", mobile: "+7(514) 789 8899", social: "@favour" },
        { name: "Goodluck Jonathan", email: "goodluck@gmail.com", mobile: "+1(902) 789 7899", social: "@goodluck" },
        { name: "Prakash Victor", email: "prakash@gmail.com", mobile: "+1(212) 789 7899", social: "@prakash" },
        { name: "Vikram Adisa", email: "vikram@gmail.com", mobile: "+7(234) 789 7399", social: "@vikram" },
        { name: "Jane Thomas", email: "thoimas@gmail.com", mobile: "+9(234) 789 1299", social: "@thomas" },
        { name: "Adedayo Abike", email: "abike@gmail.com", mobile: "+5(234) 569 7899", social: "@abike" },
    ]
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const pageCount = Math.ceil(pendingData?.length / newsPerPage);
    const progressWidth = ((newsVisited + newsPerPage) / pendingData?.length) * 100
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }
    return (
        <div className='pendingRequest'>
            <div className='container'>
                <div className='pendingTop'>
                    <span onClick={setToggleState} className='left'>Page Management</span>
                    <span><IoIosArrowForward className="icon" /> </span>
                    <span className='right'>Pending Requests</span>
                </div>
            </div>

            <div className='tablePage tableSection doNotShowDate' >
                <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                    placeHolder="Search"
                />
                <div className="scroll-container">
                    <Table className="table scroll">
                        <Thead>
                            <Tr>
                                <Td>Name</Td>
                                <Td>Email</Td>
                                <Td>Mobile Number</Td>
                                <Td>Social media</Td>
                                <Td></Td>

                            </Tr>
                        </Thead>

                        <Tbody>
                            {pendingData?.slice ? (
                                <>
                                    {pendingData?.filter((item) => {
                                        return search?.toLowerCase() === "" ? item :
                                            (item?.name?.toLowerCase().includes(search.toLowerCase()) || item?.email?.toLowerCase().includes(search.toLowerCase()))

                                    })?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                        return (
                                            <Tr key={index}>
                                                <Td >{data?.name}</Td>
                                                <Td >{data?.email}</Td>
                                                <Td  >@{data.mobile}</Td>
                                                <Td >{data?.social}</Td>
                                                <Td >
                                                    <div className="pendingTableAction">
                                                        <button className='approve'>Approve</button>
                                                        <button className='decline'>Decline</button>
                                                    </div>
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
    )
}

export default PendingRequest