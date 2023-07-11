import React, { useState } from 'react';
import './ViewMoreDetail.scss'
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import backArrow from "../../../../Assets/backNav.svg"
import TopCard from '../../../../Components/pageCard/TopCard';
import moment from 'moment'
import PercentageCard from '../../../../Components/pageCard/PercentageCard';
import PercentageCard2 from '../../../../Components/pageCard/PercentageCard2';
import { Table, Thead, Tr, Td, Tbody } from "../../../../Components/Table/Table";
import increaseImg from "../../../../Assets/Increase.svg";
import decreaseImg from "../../../../Assets/decrease.svg";
import NewMonthCalendar from '../../../../Components/Date/newMonth';
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import TableTop from '../../../../Components/TableTop/TableTop';
import Pagination from '../../../../Components/Pagination/Pagination';

function ViewMoreDetail({ handleBackButton, singleCreatorDetail }) {
    const singleDetailCard = [
        { subtitle: "Total", amount: "120,000", span: "", text: "" },
        { subtitle: "Last Month", amount: "30,000", span: 3, avg: "1,600", text: "descrease From Previous Month" },
        { subtitle: "Last Week", amount: "16,000", span: 5, avg: "1,400", text: "Increase From Previous Week" }
    ]

    // get data percentage
    const prevMonth = moment().subtract(1, "month").format('MMMM')

    const percentageData = {
        prevIncomeTotal: 120000,
        currentIncomeTotal: 130000,
        prevRGrowthTotal: 600000,
        currentRGrowthTotal: 700000
    }

    const singleDetailarray = [
        { date: "18/09/2023", income: 234.67, lastMonth: 945.43, lastWeek: 435.68 },
        { date: "18/09/2023", income: 284.67, lastMonth: 345.89, lastWeek: 678.90 },
        { date: "18/09/2023", income: 234.67, lastMonth: 345.12, lastWeek: 435.68 },
        { date: "18/09/2023", income: 534.67, lastMonth: 678.43, lastWeek: 456.08 },
        { date: "18/09/2023", income: 434.97, lastMonth: 945.43, lastWeek: 435.68 },
        { date: "18/09/2023", income: 134.64, lastMonth: 234.43, lastWeek: 123.45 },
        { date: "18/09/2023", income: 678.67, lastMonth: 945.78, lastWeek: 435.68 },
        { date: "18/09/2023", income: 234.78, lastMonth: 785.43, lastWeek: 657.89 },
        { date: "18/09/2023", income: 167.78, lastMonth: 456.67, lastWeek: 435.68 },
        { date: "18/09/2023", income: 167.78, lastMonth: 456.67, lastWeek: 435.68 },
    ]

    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const pageCount = Math.ceil(singleDetailarray?.length / newsPerPage);

    const progressWidth = ((newsVisited + newsPerPage) / singleDetailarray?.length) * 100

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }
    // for month calendar

    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(false);
    const [startMonthDate, setStartMonthDate] = useState(null)
    const [endMonthDate, setEndMonthDate] = useState(null)
    const [confirmDate, setConfirmDate] = useState(false);
    const openDateToggle = () => {
        setOpen(!open);
        setConfirmDate(false)
    }
    const confirmDateMonth = () => {
        setConfirmDate(true);
        setOpen(false)
    }

    const cancelMonthDate = () => {
        setConfirmDate(false);
        setOpen(false)
    }
    return (
        <div className=''>
            <div className='getUser viewDetail allPages'>
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
                </div>
            </div>

            <div className='viewMoreDetails allPages'>
                <div className='container'>
                    <div className='profile'>
                        {singleCreatorDetail?.name}
                        <span>ID: {singleCreatorDetail?.id}345</span>
                    </div>

                    <div className='singletopCard'>
                        <TopCard topCard={singleDetailCard} cardName="Income" />
                    </div>

                    <div className='percentCard' style={{ margin: '20px 0px 50px 0px' }}>
                        <div className='row gx-5 gy-5'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='Wrapper1'>
                                    <PercentageCard leftText="Total Revenue" prevMonth={prevMonth} previousMonthTotalLeftHandSide={percentageData.prevIncomeTotal}
                                        currentMonthTotalLeftHandSide={percentageData.currentIncomeTotal}
                                    />
                                </div>

                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='Wrapper2'>
                                    <PercentageCard2 prevMonth={prevMonth} previousMonthTotalRightHandSide={percentageData.prevRGrowthTotal}
                                        currentMonthTotalRightHandSide={percentageData.currentRGrowthTotal}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='tablePage tableSection'>
                        <section>
                            <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                                placeHolder="Search"
                            />

                        </section>
                        <div className="scroll-container">
                            <Table className="table scroll">
                                <Thead className="thead">
                                    <Tr className="tableRow">
                                        <Td>S/N</Td>
                                        <Td>Name</Td>
                                        <Td>Total Income</Td>
                                        <Td>Last Month</Td>
                                        <Td>Last Week</Td>
                                        <Td className="td">
                                            <div className='dateRateDropdown' onClick={openDateToggle}>

                                                <span><span style={{ textTransform: 'none' }}>Growth rate</span> <br />
                                                    {confirmDate && confirmDate ? (
                                                        <>
                                                            {startMonthDate && startMonthDate.toLocaleDateString('en-us', { month: "short" })} - {endMonthDate && endMonthDate.toLocaleDateString('en-us', { month: "short" })}
                                                        </>
                                                    ) :
                                                        <>{prevMonth} - {moment().format("MMMM")}</>
                                                    }
                                                </span>

                                                <span><MdOutlineKeyboardArrowDown className='icon' /> </span>

                                            </div>
                                        </Td>
                                        {open && (
                                            <div className='tableDateDropdown'>
                                                <NewMonthCalendar startMonthDate={startMonthDate} setStartMonthDate={setStartMonthDate}
                                                    endMonthDate={endMonthDate} setEndMonthDate={setEndMonthDate} confirmDate={confirmDateMonth} cancelMonthDate={cancelMonthDate} />
                                            </div>
                                        )}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {singleDetailarray?.slice ? (
                                        <>
                                            {singleDetailarray?.filter((item) => {
                                                return search?.toLowerCase() === "" ? item :
                                                    (item?.category?.toLowerCase().includes(search.toLowerCase()))

                                            })?.slice(newsVisited, newsVisited + newsPerPage)?.map((item, index) => {
                                                return (
                                                    <Tr key={item?.id}>
                                                        <Td >{((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                            <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                        }
                                                        </Td>
                                                        <Td  >{item?.date}</Td>
                                                        <Td  >${item?.income}</Td>
                                                        <Td> ${item?.lastMonth}</Td>
                                                        <Td> ${item?.lastWeek}</Td>
                                                        <Td>
                                                            {item?.income > 250 ? (<div className='increase'>8% <span style={{ paddingLeft: "6px" }}><img src={increaseImg} alt="" /></span></div>) :
                                                                (<div className='decrease'>4% <span style={{ paddingLeft: "6px" }}><img src={decreaseImg} alt="" /></span></div>)}
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

                    <div style={{ padding: "10px 0px 20px 0px" }}>
                        <Pagination pageCount={pageCount} changePage={changePage} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ViewMoreDetail