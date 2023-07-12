import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import backArrow from "../../../Assets/backNav.svg";
import Pagination from '../../../Components/Common/Pagination/Pagination';
import { Table, Thead, Tr, Td, Tbody } from "../../../Components/Common/Table/Table"
import TableTop from '../../../Components/Common/TableTop/TableTop';
import Avatar from "../../../Assets/Avatar.svg";
import pointGreen from '../../../Assets/pointGreen.svg';
import pointYellow from '../../../Assets/pointYellow.svg'

function GetUser({ handleBackButton }) {
    const [search, setSearch] = useState('');
    const userData = [
        { name: "Olivia trust", userName: "Olibaby", email: "olivia@oli.com", mobile: "+7 (903) 789 456", gender: "m", age: "23", status: "active", contest: "5600", income: "9, 567", withdrawal: "23,490" },
        { name: "Dayo trust", userName: "dayobobo", email: "dayotrust@dayi.com", mobile: "+7 (903) 456 456", gender: "m", age: "21", status: "active", contest: "7600", income: "9, 567", withdrawal: "23,123" },
        { name: "David David", userName: "davido", email: "davido@oli.com", mobile: "+7 (903) 789 456", gender: "f", age: "45", status: "pending", contest: "6700", income: "9, 567", withdrawal: "2,490" },
        { name: "Christian trust", userName: "chrissttt", email: "christian@gmail.com", mobile: "+7 (903) 789 785", gender: "m", age: "73", status: "pending", contest: "5600", income: "9, 567", withdrawal: "23,123" },
        { name: "Joy Emmanuel", userName: "emmanuel", email: "emmanuel@oemma.com", mobile: "+7 (903) 789 123", gender: "f", age: "23", status: "active", contest: "8600", income: "9, 567", withdrawal: "27,490" },
        { name: "Convenant trust", userName: "Olibaby", email: "convenant@oli.com", mobile: "+8 (503) 789 456", gender: "f", age: "26", status: "pending", contest: "5600", income: "9, 567", withdrawal: "23,490" },
        { name: "Lydia Lydia", userName: "Lydilydi", email: "lydiaa@oli.com", mobile: "+7 (123) 789 456", gender: "m", age: "30", status: "active", contest: "2300", income: "9, 567", withdrawal: "23,423" },
        { name: "abraham Isaac", userName: "Olibaby", email: "abraham@oli.com", mobile: "+7 (345) 789 456", gender: "f", age: "56", status: "active", contest: "5600", income: "9, 567", withdrawal: "2,490" },

    ]

    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage
    const pageCount = Math.ceil(userData?.length / newsPerPage);
    const progressWidth = ((newsVisited + newsPerPage) / userData?.length) * 100
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }
    return (
        <div className='getUser allPages'>
            <div className='container'>
                <div className='top'>
                    <div className='topContent'>
                        <NavLink to="/creators" className='left'>Creators</NavLink>
                        <span className='iconspan'><IoIosArrowForward className="icon" /> </span>
                        <span className='right'>Users</span>
                    </div>

                    <div className='backButton'>
                        <button className='backBtn' onClick={handleBackButton}><img src={backArrow} alt="" />
                            <span>Back</span>
                        </button>
                    </div>

                </div>

                <div className='tablePage tableSection doNotShowDate'>
                    <div className='tableHeader'>User <span>Here’s a list of all users</span></div>
                    <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                        placeHolder="Search"
                    />
                    <div className="scroll-container">
                        <Table className="table scroll">
                            <Thead className="thead">
                                <Tr>
                                    <Td className="td">Creator Name</Td>
                                    <Td className="td">User Name</Td>
                                    <Td className="td">Email</Td>
                                    <Td className="td">Mobile Number</Td>
                                    <Td className="td">Gender</Td>
                                    <Td className="td">Age</Td>
                                    <Td className="td">KYC Status</Td>
                                    <Td className="td">Total Contest</Td>
                                    <Td className="td">Total Income</Td>
                                    <Td className="td">Total Withdrawal</Td>
                                </Tr>
                            </Thead>

                            <Tbody className="tbody">
                                {userData?.slice ? (
                                    <>
                                        {userData?.filter((item) => {
                                            return search?.toLowerCase() === "" ? item :
                                                (item?.userName?.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase()))

                                        })?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                            return (
                                                <Tr key={index}>
                                                    <Td className="td firstRowData">
                                                        <div className='data'>
                                                            {data?.image ?
                                                                <div className='image'><img src={data?.image} alt="" /></div>
                                                                : <div className='image'><img src={Avatar} alt="" /></div>
                                                            }

                                                            <div className='dataName'>
                                                                <div>{data?.name}</div>
                                                                <div className='username'>@{data?.userName}</div>
                                                            </div>
                                                        </div>
                                                    </Td>
                                                    <Td className="td otherData userName" >{data?.userName}</Td>
                                                    <Td className="td email otherData">{data?.email}</Td>
                                                    <Td className="td otherData mobile">{data?.mobile}</Td>
                                                    <Td className="td otherData invitationCode">{data?.gender}</Td>
                                                    <Td className="td money otherData">{data?.age}</Td>
                                                    <Td className="td otherData">{data?.status === "active" ? <span>
                                                        <span style={{ paddingRight: '5px' }}><img src={pointGreen} alt="" style={{ width: '7px' }} /></span> Active
                                                    </span> : <span>
                                                        <span style={{ paddingRight: '5px' }}><img src={pointYellow} alt="" style={{ width: '7px' }} /></span> Pending
                                                    </span>}
                                                    </Td>
                                                    <Td className="td otherData">{data?.contest}</Td>
                                                    <Td className="td otherData income">${data?.income}</Td>
                                                    <Td className="td otherData">${data?.withdrawal}</Td>


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
        </div>
    )
}

export default GetUser