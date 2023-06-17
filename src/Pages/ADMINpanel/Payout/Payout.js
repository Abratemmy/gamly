import React, { useState, useEffect } from 'react';
import "./Payout.css";
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPAYMENTs } from '../../../Components/REDUX/ACTION/paymentAction';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import Pagination from '../../../Components/Pagination/Pagination';
import DateCalendar from '../../../Components/Date/Date';
import Search from '../../../Components/Search/Search';
import Refresh from '../../../Components/Refresh/Refresh';
import TopCard from '../../../Components/TopCard/TopCard';

function Payout() {
    // payout card array
    const payoutCard = [
        { subtitle: "Total", amount: "120000", span: "", text: "" },
        { subtitle: "Last Month", amount: "30000", span: 3, text: "descrease From Previous Month" },
        { subtitle: "Last Week", amount: "16000", span: 5, text: "Increase From Previous Week" },
        { subtitle: "Today", amount: "78000", span: 7, text: "Increase From Previous Day" }
    ]
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
    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(getAllPAYMENTs())
    }, [dispatch])

    return (
        <AdminSidebar name="Payout">
            <div className='Payout'>
                <div className='container'>
                    <div className=''>
                        <TopCard topCard={payoutCard} cardName="Payout" />
                    </div>

                    <div className='GraphSession'></div>

                    <div className="tableName">Payouts</div>
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
                                            {getPaymentData?.filter((item) => {
                                                return search?.toLowerCase() === "" ? item :
                                                    (item?.title?.toLowerCase().includes(search.toLowerCase()))

                                            })?.slice(newsVisited, newsVisited + newsPerPage)?.map((item, index) => {
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
                    <Pagination pageCount={pageCount} changePage={changePage} />

                </div>
            </div>
        </AdminSidebar>
    )
}
export default Payout