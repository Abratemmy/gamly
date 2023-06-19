import React, { useState, useEffect } from 'react';
import "./Sales.css"
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import TopCard from '../../../Components/pageCard/TopCard';
import PercentageCard from '../../../Components/pageCard/PercentageCard';
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../Components/Pagination/Pagination';
import DateCalendar from '../../../Components/Date/Date';
import Search from '../../../Components/Search/Search';
import Refresh from '../../../Components/Refresh/Refresh';
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { getAllSALES } from '../../../Components/REDUX/ACTION/salesAction';
import increaseImg from "../../../Assets/Increase.svg";
import decreaseImg from "../../../Assets/decrease.svg";
import { MdKeyboardArrowDown } from "react-icons/md"

function Sales() {
    // sales card array
    const salesCard = [
        { subtitle: "Total", amount: "120000", span: "", text: "" },
        { subtitle: "Last Month", amount: "30000", span: 3, text: "descrease From Previous Month", avg: "2,600" },
        { subtitle: "Last Week", amount: "16000", span: 5, text: "Increase From Previous Week", avg: "1,200" },
        { subtitle: "Today", amount: "78000", span: 7, text: "Increase From Previous Day" }
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
    console.log("payment", getSalesData)

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

    useEffect(() => {
        dispatch(getAllSALES())
        setActive(active)
    }, [dispatch, active])

    return (
        <AdminSidebar name="sales">
            <div className='Sales'>
                <div className='container'>
                    <TopCard topCard={salesCard} cardName="Payout" />
                    <PercentageCard leftText="Total Sales" prevMonth={prevMonth} previousMonthTotalLeftHandSide={percentageData.prevSaleTotal}
                        currentMonthTotalLeftHandSide={percentageData.currentSaleTotal} previousMonthTotalRightHandSide={percentageData.prevRevenueTotal}
                        currentMonthTotalRightHandSide={percentageData.currentRevenueTotal}
                    />

                    <div className='Graph'>
                        <div className=''>Recharts</div>
                    </div>

                    <div className='tableSession'>
                        <div className="tableName">Creators Sales
                            <span>Overview of creators gross profit</span>
                        </div>

                        <div className='tablePage tableSection'>
                            <section>
                                <div className='inputSection' style={{ padding: "10px 0px 30px 0px" }}>
                                    <Search setSearch={setSearch} search={search} />

                                    <div className='refreshDiv' >
                                        <button onClick={openDateRange} className='duration'>Select duration <span><MdOutlineKeyboardArrowDown className='iconDropdown' /></span></button>
                                        <Refresh handleRefresh={() => setSearch("")} />
                                        {dateToggle && (
                                            <div className='calendar'>
                                                <DateCalendar handleSelect={handleSelect} startDate={startDate} endDate={endDate} />
                                            </div>

                                        )}
                                    </div>
                                </div>
                            </section>
                            <div className="scroll-container">
                                <table className="table scroll">
                                    <thead>
                                        <tr>
                                            <td>S/N</td>
                                            <td>Name</td>
                                            <td>Total Gross Profit</td>
                                            <td>Last Month</td>
                                            <td>Last Week</td>
                                            <td style={{ position: "relative", cursor: "pointer" }}>
                                                <div className='' onClick={() => setOpenMonth(!openMonth)}>
                                                    {getMonth === "1" ? "January" : getMonth === "2" ? "February" : getMonth === "3" ? "March" : getMonth === "4" ? "April" :
                                                        getMonth === "5" ? "May" : getMonth === "6" ? "June" : getMonth === "7" ? "July" : getMonth === "8" ? "August" :
                                                            getMonth === "9" ? "September" : getMonth === "10" ? "October" : getMonth === "11" ? "November" :
                                                                getMonth === "12" ? "Decenmber" : getMonth}
                                                    <span><MdKeyboardArrowDown className="dropdown" /></span></div>
                                                {openMonth && (
                                                    <div className='openMonth'>
                                                        {tableMonth?.map((month, index) => {
                                                            return (
                                                                <div className='months' id={index + 1} key={index} onClick={handleClickMonth}>{month}</div>
                                                            )
                                                        })}
                                                    </div>
                                                )}
                                            </td>
                                            <td>Net profit rate <br /> {prevMonth} - {moment().format("MMMM")}</td>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getSalesData?.slice ? (
                                            <>
                                                {getSalesData?.filter((item) => {
                                                    return search?.toLowerCase() === "" ? item :
                                                        (item?.category?.toLowerCase().includes(search.toLowerCase()))

                                                })?.slice(newsVisited, newsVisited + newsPerPage)?.map((item, index) => {
                                                    return (
                                                        <tr key={item?.id}>
                                                            <td >{((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                                <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                            }
                                                            </td>
                                                            <td  >{item?.category}</td>
                                                            <td  >${item?.price}.67</td>
                                                            <td >${item?.rating?.rate * 10}.00</td>
                                                            <td >${item?.rating.count}.45</td>
                                                            <td  >$ {item?.price}</td>
                                                            <td>
                                                                {item?.price > 100 ? (<div className='increase'>8% <span style={{ paddingLeft: "6px" }}><img src={increaseImg} alt="" /></span></div>) :
                                                                    (<div className='decrease'>4% <span style={{ paddingLeft: "6px" }}><img src={decreaseImg} alt="" /></span></div>)}
                                                            </td>

                                                        </tr>
                                                    )
                                                })}
                                            </>
                                        ) : ("")}
                                    </tbody>
                                </table>
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