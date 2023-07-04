import React, { useState, useEffect } from 'react';
import "./Sales.css"
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import TopCard from '../../../Components/pageCard/TopCard';
import PercentageCard from '../../../Components/pageCard/PercentageCard';
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../Components/Pagination/Pagination';
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowDown } from "react-icons/md"
import { getAllSALES } from '../../../Components/REDUX/ACTION/salesAction';
import increaseImg from "../../../Assets/Increase.svg";
import decreaseImg from "../../../Assets/decrease.svg";
import AreaChartRechart from '../../../Components/RECHART/AreaChart';
import BarChartRechart from '../../../Components/RECHART/BarChart';
import TableTop from '../../../Components/TableTop/TableTop';
import NewMonthCalendar from '../../../Components/Date/newMonth';
import GraphDate from '../../../Components/Date/GraphDate';
import PercentageCard2 from '../../../Components/pageCard/PercentageCard2';
import { Table, Thead, Tr, Td, Tbody } from "../../../Components/Table/Table"

function Sales() {
    // sales card array
    const salesCard = [
        { subtitle: "Total", amount: 120000, span: "", text: "" },
        { subtitle: "Last Month", amount: 30000, span: 3, text: "descrease From Previous Month", avg: "2,600" },
        { subtitle: "Last Week", amount: 16000, span: 5, text: "Increase From Previous Week", avg: "1,200" },
        { subtitle: "Today", amount: 78000, span: 7, text: "Increase From Previous Day" }
    ]

    // get data percentage
    const prevMonth = moment().subtract(1, "month").format('MMMM')

    const percentageData = {
        prevSaleTotal: 120000,
        currentSaleTotal: 100000,
        prevRevenueTotal: 600000,
        currentRevenueTotal: 700000
    }

    // month array for table
    const tableMonth = ["January", "February", 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [openMonth, setOpenMonth] = useState(false);
    const [getMonth, setGetMonth] = useState(moment().format("MMMM"))
    const [active, setActive] = useState(null);
    console.log("time", active);
    const handleClickMonth = (event) => {
        setActive(event.target.id);
        console.log("month clicked", event.target.id)
        setGetMonth(event.target.id)
        setOpenMonth(false)
    }

    // table palava
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getSalesData = useSelector((state) => state.salesReducer);
    console.log("salesData", getSalesData)

    const pageCount = Math.ceil(getSalesData?.length / newsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }
    const [products, setProducts] = useState(getSalesData?.data);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // open date dropdown toggle
    const [dateToggle, setDateToggle] = useState(false);
    const openDateRange = () => {
        setDateToggle(prev => !prev)
    }
    const handleSelect = (date) => {
        let filtered = products?.filter((product) => {
            let productDate = new Date(product["createdAt"]);
            return (productDate >= date.selection.startDate &&
                productDate <= date.selection.endDate);
        })
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setProducts(filtered);
    };
    const [search, setSearch] = useState('')


    // for month calendar
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

    // for a singleMonth
    const [openSingleMonth, setOpenSingleMonth] = useState(false);
    const [startSingleMonthDate, setStartSingleMonthDate] = useState(null)
    const [endSingleMonthDate, setEndSingleMonthDate] = useState(null)
    const [confirmSingleDate, setConfirmSingleDate] = useState(false);

    const openSingleDateToggle = () => {
        setOpenSingleMonth(!openSingleMonth);
        setConfirmSingleDate(false)
    }

    const confirmSingleDateMonth = () => {
        setConfirmSingleDate(true);
        setOpenSingleMonth(false)
    }
    const cancelSingleMonthDate = () => {
        setConfirmSingleDate(false);
        setOpenSingleMonth(false)
    }

    useEffect(() => {
        dispatch(getAllSALES())
        setActive(active)
    }, [dispatch, active])

    const chartData = [
        {
            name: 'May 01',
            uv: 3000,
            pv: 1000,
            amt: 2400,
        },
        {
            name: 'May 05',
            uv: 500,
            pv: 1500,
            amt: 2210,
        },
        {
            name: 'May 10',
            uv: 1000,
            pv: 500,
            amt: 2290,
        },
        {
            name: 'May 15',
            uv: 1500,
            pv: 1000,
            amt: 2000,
        },
        {
            name: 'May 20',
            uv: 3000,
            pv: 1000,
            amt: 2181,
        },
        {
            name: 'May 23',
            uv: 2500,
            pv: 2000,
            amt: 2500,
        },
        {
            name: 'May 30',
            uv: 2700,
            pv: 1000,
            amt: 2100,
        },
    ];
    return (
        <AdminSidebar name="sales">
            <div className='Sales'>
                <div className='container'>
                    <TopCard topCard={salesCard} cardName="Sales" />

                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <PercentageCard leftText="Total sales" prevMonth={prevMonth} previousMonthTotalLeftHandSide={percentageData.prevSaleTotal}
                                currentMonthTotalLeftHandSide={percentageData.currentSaleTotal}
                            />
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <PercentageCard2 prevMonth={prevMonth} previousMonthTotalRightHandSide={percentageData.prevRevenueTotal}
                                currentMonthTotalRightHandSide={percentageData.currentRevenueTotal}
                            />
                        </div>
                    </div>

                    <div className='Graph' style={{ padding: "10px 0px" }}>
                        <div className='row gx-5 gy-5'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='title'>Analytics Report</div>
                                <BarChartRechart />
                            </div>

                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <div className='title'>Sales Growth Rate</div>
                                <AreaChartRechart data={chartData} />
                            </div>
                        </div>
                    </div>

                    <div className='tableSession'>
                        <div className="tableName">Creators Sales
                            <span>Overview of creators gross profit</span>
                        </div>

                        <div className='tablePage tableSection'>
                            <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                                handleSelect={handleSelect} startDate={startDate} endDate={endDate} placeHolder="Search"
                            />
                            <div className="scroll-container">
                                <Table className="table scroll">
                                    <Thead className='thead'>
                                        <Tr className="tableRow">
                                            <Td>S/N</Td>
                                            <Td>Name</Td>
                                            <Td>Total Gross Profit</Td>
                                            <Td>Last Month</Td>
                                            <Td>Last Week</Td>
                                            <Td >
                                                <div style={{ position: "relative", cursor: "pointer" }} onClick={openSingleDateToggle}>
                                                    <span>
                                                        {confirmSingleDate && confirmSingleDate ? (
                                                            <>
                                                                {startSingleMonthDate.toLocaleDateString('en-us', { month: "short" })}
                                                            </>
                                                        ) :
                                                            <>{moment().format("MMMM")}</>
                                                        }
                                                    </span>

                                                    <span style={{ paddingLeft: '5px' }}><MdOutlineKeyboardArrowDown className='icon' style={{ fontSize: '16px', position: 'relative', top: '-1px' }} /> </span>
                                                </div>
                                                {openSingleMonth && (
                                                    <div style={{ position: 'absolute', top: '70px', right: '0px' }}>
                                                        <GraphDate startMonthDate={startSingleMonthDate} setStartMonthDate={setStartSingleMonthDate}
                                                            endMonthDate={endSingleMonthDate} setEndMonthDate={setEndSingleMonthDate} confirmDate={confirmSingleDateMonth} cancelMonthDate={cancelSingleMonthDate} />
                                                    </div>
                                                )}
                                            </Td>

                                            <Td>
                                                <div className='dateRateDropdown' onClick={openDateToggle}>
                                                    <span><span style={{ textTransform: 'none' }}>Net profit rate</span> <br />
                                                        {confirmDate ? (
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
                                        {getSalesData?.slice ? (
                                            <>
                                                {getSalesData?.filter((item) => {
                                                    return search?.toLowerCase() === "" ? item :
                                                        (item?.category?.toLowerCase().includes(search.toLowerCase()))

                                                })?.slice(newsVisited, newsVisited + newsPerPage)?.map((item, index) => {
                                                    return (
                                                        <Tr key={item?.id}>
                                                            <Td >{((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                                <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                            }
                                                            </Td>
                                                            <Td  >{item?.category}</Td>
                                                            <Td  >${item?.price}.67</Td>
                                                            <Td >${item?.rating?.rate * 10}.00</Td>
                                                            <Td >${item?.rating.count}.45</Td>
                                                            <Td  >$ {item?.price}</Td>
                                                            <Td>
                                                                {item?.price > 100 ? (<div className='increase'>8% <span style={{ paddingLeft: "6px" }}><img src={increaseImg} alt="" /></span></div>) :
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
                        <Pagination pageCount={pageCount} changePage={changePage} />

                    </div>

                </div>
            </div>
        </AdminSidebar>
    )
}

export default Sales