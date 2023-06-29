import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllREVENUE } from '../../../Components/REDUX/ACTION/revenueAction';
import Pagination from '../../../Components/Pagination/Pagination';
import moment from "moment"
import increaseImg from "../../../Assets/Increase.svg";
import decreaseImg from "../../../Assets/decrease.svg";
import TableTop from '../../../Components/TableTop/TableTop';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import NewMonthCalendar from '../../../Components/Date/newMonth';
import CalendarMonth from '../../../Components/Date/calendar';

function RevenueTable() {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getRevenueData = useSelector((state) => state.revenueReducer);
    console.log("payment", getRevenueData)

    const pageCount = Math.ceil(getRevenueData?.length / newsPerPage);

    const progressWidth = ((newsVisited + newsPerPage) / getRevenueData?.length) * 100

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }
    const [products, setProducts] = useState(getRevenueData?.data);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // date select
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
    const prevMonth = moment().subtract(1, "month").format('MMMM')
    const [active, setActive] = useState(null);

    // for month calendar
    const [open, setOpen] = useState(false);
    const [startMonthDate, setStartMonthDate] = useState(null)
    const [endMonthDate, setEndMonthDate] = useState(null)
    const [confirmDate, setConfirmDate] = useState(false);
    const confirmDateMonth = () => {
        setConfirmDate(true);
        setOpen(false)
    }

    const cancelMonthDate = () => {
        setConfirmDate(false);
        setOpen(false)
    }
    useEffect(() => {
        dispatch(getAllREVENUE())
        setActive(active)
    }, [dispatch, active])

    return (
        <div>
            <div className='tableSession'>
                <div className='tablePage tableSection'>
                    <section>
                        <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                            handleSelect={handleSelect} startDate={startDate} endDate={endDate} placeHolder="Search"
                        />

                    </section>

                    <div className="scroll-container">
                        <table className="table scroll">
                            <thead>
                                <tr style={{ position: 'relative', width: '100%' }}>
                                    <td>S/N</td>
                                    <td>Name</td>
                                    <td>Total Gross Profit</td>
                                    <td>Last Month</td>
                                    <td>Last Week</td>
                                    <td style={{ position: 'relative' }}>
                                        <div className='rateDropdown' onClick={() => setOpen(!open)}>

                                            <span><span style={{ textTransform: 'none' }}>Growth rate</span> <br />
                                                {confirmDate ? (
                                                    <>
                                                        {startMonthDate.toLocaleDateString('en-us', { month: "short" })} - {endMonthDate.toLocaleDateString('en-us', { month: "short" })}
                                                    </>
                                                ) :
                                                    <>{prevMonth} - {moment().format("MMMM")}</>
                                                }
                                            </span>

                                            <span><MdOutlineKeyboardArrowDown className='icon' /> </span>

                                        </div>



                                    </td>
                                    {open && (
                                        <div style={{ position: 'absolute', top: '55px', right: '0px' }}>
                                            <NewMonthCalendar startMonthDate={startMonthDate} setStartMonthDate={setStartMonthDate}
                                                endMonthDate={endMonthDate} setEndMonthDate={setEndMonthDate} confirmDate={confirmDateMonth} cancelMonthDate={cancelMonthDate} />
                                        </div>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {getRevenueData?.slice ? (
                                    <>
                                        {getRevenueData?.filter((item) => {
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

                {
                    getRevenueData.pageList?.length <= newsPerPage ? (
                        <div className='tableProgressBar'>
                            <div className='displayProgress'>
                                <div className='progress-line decrease' data-percent="90%">
                                    <span style={{ width: "100%" }}></span>
                                </div>
                            </div>
                        </div>
                    ) : <div className='tableProgressBar'>
                        <div className='displayProgress'>
                            <div className='progress-line decrease' data-percent="90%">
                                <span style={{ width: `${progressWidth}%` }}></span>
                            </div>
                        </div>
                    </div>
                }

                <Pagination pageCount={pageCount} changePage={changePage} />

            </div>
        </div>
    )
}

export default RevenueTable