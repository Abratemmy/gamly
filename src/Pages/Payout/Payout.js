import React, { useState, useEffect } from 'react';
import "./Payout.css";
import AdminSidebar from '../../Components/ADMINSIDEBAR/AdminSidebar';
import Navbar from '../../Components/Navbar/Navbar';
import uparrow from "../../Assets/uparr.svg";
import downarrow from "../../Assets/downarr.svg";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPAYMENTs } from '../../Components/REDUX/ACTION/paymentAction';
import { NavLink } from 'react-router-dom';
import { BiSearch, BiRefresh } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import ReactPaginate from 'react-paginate';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Payout({ theme, setTheme }) {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getPaymentData = useSelector((state) => state.paymentReducer);
    console.log("payment", getPaymentData)

    const pageCount = Math.ceil(getPaymentData?.length / newsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }
    const [products, setProducts] = useState(getPaymentData?.data);
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

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    useEffect(() => {
        dispatch(getAllPAYMENTs())
    }, [dispatch])

    return (
        <AdminSidebar theme={theme}>
            <Navbar name="payout" theme={theme} setTheme={setTheme} />
            <div className='Payout'>
                <div className='container'>
                    <div className='topCard'>
                        <div className='header'>PAYOUT</div>
                        <div className='content'>
                            <div className='total'><div className='subtitle'>Total</div>
                                <div className='amount'>$120, 000</div>
                            </div>

                            <div className='month'><div className='subtitle'>Last Month</div>
                                <div className='amount'>$12, 000</div>
                                <div className='text'><span> 2% </span>
                                    Decrease From Previous month <img src={downarrow} alt="" />
                                </div>
                            </div>

                            <div className='total'><div className='subtitle'>Last Week</div>
                                <div className='amount'>$48,870</div>
                                <div className='text'><span> 6% </span>
                                    Increase From Previous Week <img src={uparrow} alt="" />
                                </div>
                            </div>

                            <div className='total'><div className='subtitle'>Today</div>
                                <div className='amount'>$78, 000</div>
                                <div className='text'><span> 1% </span>
                                    Increase From Previous Day <img src={uparrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='GraphSession'></div>

                    <div className="tableName">Payouts</div>
                    <div className='tablePage tableSection'>
                        <section>
                            <div className='inputSection' style={{ padding: "10px 0px 30px 0px" }}>
                                <div className='inputContainer' >
                                    <BiSearch className="icon" />
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>

                                <div className='refreshDiv' >
                                    <button onClick={openDateRange} className='duration'>Select duration <span><MdOutlineKeyboardArrowDown className='iconDropdown' /></span></button>
                                    <button className='refresh'><BiRefresh className='r-icon' /> <span>Refresh</span> </button>
                                    {dateToggle && (
                                        <div className='calendar'>
                                            <DateRangePicker
                                                ranges={[selectionRange]}
                                                onChange={handleSelect}
                                                months={2}
                                                direction="horizontal"
                                                showSelectionPreview={true}
                                                moveRangeOnFirstSelection={true}
                                                monthDisplayFormat="MMMM yyyy"
                                                weekdayDisplayFormat="EEEEEE"
                                                rangeColors={['#F2F7FE', '#000000']}
                                            />
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
                                        <td>Date</td>
                                        <td>Creator Name</td>
                                        <td>Creator Id</td>
                                        <td>Payout Id</td>
                                        <td>Amount</td>
                                        <td>Status</td>
                                        <td>History</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getPaymentData?.slice ? (
                                        <>
                                            {getPaymentData?.slice(newsVisited, newsVisited + newsPerPage)?.map((item, index) => {
                                                return (
                                                    <tr key={item?.id}>
                                                        <td >{((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                            <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                        }
                                                        </td>
                                                        <td  >Date is here</td>
                                                        <td  >{item?.title}</td>
                                                        <td >{item?.id}</td>
                                                        <td >{item?.rating.count}</td>
                                                        <td  >$  {item?.price}</td>
                                                        <td>Completed</td>
                                                        <td><NavLink to={`/payout/${item.id}`} className="tableNav">View</NavLink></td>
                                                    </tr>
                                                )
                                            })}
                                        </>
                                    ) : ("")}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <ReactPaginate
                        breakLabel="..."
                        previousLabel={"<<"}
                        nextLabel={">>"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        pageRangeDisplayed={10}
                        renderOnZeroPageCount={null}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                        marginPagesDisplayed={0}
                    />
                </div>
            </div>
        </AdminSidebar>
    )
}
export default Payout