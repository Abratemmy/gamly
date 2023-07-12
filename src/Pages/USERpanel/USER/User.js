import React, { useState, useEffect } from 'react'
import UserSidebar from '../../../Components/User/UserSidebar'
import TableProgressBar from '../../../Components/Common/TableProgressBar/TableProgressBar'
import Pagination from '../../../Components/Common/Pagination/Pagination'
import { Table, Thead, Tr, Td, Tbody } from "../../../Components/Common/Table/Table"
import { useDispatch, useSelector } from 'react-redux';
import TableTop from '../../../Components/Common/TableTop/TableTop';
import pointGreen from '../../../Assets/pointGreen.svg';
import pointYellow from '../../../Assets/pointYellow.svg'
import Avatar from "../../../Assets/Avatar.svg"
import './User.scss'
import { getAllUSER } from '../../../Components/User/USERACTION/userAction'
import Piechart from '../../../Components/Common/RECHART/PieChart/PieChart'
import greenLine from '../../../Assets/greenRectangle.svg';
import pinkLine from '../../../Assets/pinkRectangle.svg'
import closeImg from "../../../Assets/closebox.svg"


function User() {
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getAllUserData = useSelector((state) => state.userReducer);
    console.log("code Management", getAllUserData)
    const pageCount = Math.ceil(getAllUserData?.length / newsPerPage);
    const progressWidth = ((newsVisited + newsPerPage) / getAllUserData?.length) * 100
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

    const PIECHARTCOLORS = ['#FFBBBE', '#86DEA4'];
    const PIECenterText = {
        title: "₹1,00,000"
    }

    useEffect(() => {
        dispatch(getAllUSER())
    }, [dispatch])
    return (
        <UserSidebar name="User">
            <div className='Creators userPage allPages'>
                <div className='container'>
                    <div className='page-top'>
                        Users
                        <span>Here’s a list of all users</span>
                    </div>

                    <div className='tablePage tableSection doNotShowDate'>
                        <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                            placeHolder="Search"
                        />
                        <div className="scroll-container">
                            <Table className="table scroll">
                                <Thead>
                                    <Tr>
                                        <Td>User Name</Td>
                                        <Td>Email</Td>
                                        <Td>Mobile Number</Td>
                                        <Td>Total income</Td>
                                        <Td>KYC Status</Td>
                                        <Td>Details</Td>
                                    </Tr>
                                </Thead>

                                <Tbody className="tbody">
                                    {getAllUserData?.slice ? (
                                        <>
                                            {getAllUserData?.filter((item) => {
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
                                                        <Td className="money otherData totalIncome">${data?.id},902</Td>
                                                        <Td className="otherData status">{data?.address?.geo.lng >= 0 ? <span>
                                                            <span style={{ paddingRight: '5px' }}><img src={pointGreen} alt="" style={{ width: '9px' }} /></span> Active
                                                        </span> : <span>
                                                            <span style={{ paddingRight: '5px' }}><img src={pointYellow} alt="" style={{ width: '9px' }} /></span> Pending
                                                        </span>}
                                                        </Td>
                                                        <Td className="otherData detail"><div onClick={() => changeContent(data, index)} className="tableNav">View</div></Td>

                                                    </Tr>
                                                )
                                            })}
                                        </>
                                    ) : ("")}
                                </Tbody>
                            </Table>
                        </div>
                    </div>

                    <TableProgressBar data={getAllUserData} newsPerPage={newsPerPage} progressWidth={progressWidth} />

                    <Pagination pageCount={pageCount} changePage={changePage} />
                </div>

                {openrightSidebar && (
                    <div className='popupContainer'>
                        <div className='rightSidebar singleRight' onClick={(e) => e.stopPropagation()}>
                            <div className='rightsidebarBody'>
                                <div className='closeBtn'>
                                    <img src={closeImg} alt="" onClick={() => setOpenRightSidebar(false)} style={{ cursor: 'pointer' }} />
                                </div>
                                <div className='profile'>
                                    <div className='image'>
                                        {popupcontent?.image ? <img src={popupcontent.image} alt="" /> :
                                            <img src={Avatar} alt="" />
                                        }
                                    </div>

                                    <div className='name'>
                                        {popupcontent?.name}
                                        <span>{popupcontent?.username}</span>
                                    </div>
                                </div>

                                <div className='detail'>
                                    <div className='content'>
                                        <div className='name'>Phone number</div>
                                        <div className='answer'>{popupcontent?.phone}</div>
                                    </div>
                                    <div className='content'>
                                        <div className='name'>Age</div>
                                        <div className='answer'>23 Years</div>
                                    </div>
                                    <div className='content'>
                                        <div className='name'>Gender</div>
                                        <div className='answer'>Male</div>
                                    </div>
                                    <div className='content'>
                                        <div className='name'>Email</div>
                                        <div className='answer'>{popupcontent?.email}</div>
                                    </div>
                                    <div className='content'>
                                        <div className='name'>Total contest</div>
                                        <div className='answer'>{popupcontent?.address.suite}</div>
                                    </div>
                                    <div className='content'>
                                        <div className='name'>KYC Status</div>
                                        <div className='answer'>
                                            {popupcontent?.address?.geo.lng >= 0 ? <span>
                                                <span style={{ paddingRight: '5px' }}><img src={pointGreen} alt="" style={{ width: '9px' }} /></span> Active
                                            </span> : <span>
                                                <span style={{ paddingRight: '5px' }}><img src={pointYellow} alt="" style={{ width: '9px' }} /></span> Pending
                                            </span>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className='pieChartSession'>
                                    <Piechart COLORS={PIECHARTCOLORS} centerText={PIECenterText}
                                        total="₹50,000" total2="₹25,000" text="Total Income"
                                        text2="Total Withdrawal " lineImage={greenLine} lineImage2={pinkLine}
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                )}

            </div>
        </UserSidebar>
    )
}

export default User