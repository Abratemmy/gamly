import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getSINGLEPAYMENT } from '../../../Components/REDUX/ACTION/paymentAction';
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import { IoIosArrowForward } from "react-icons/io";
import backNav from "../../../Assets/backNav.svg";
import whitelogo1 from "../../../Assets/whitelogo1.svg"
import whitelogo2 from "../../../Assets/whitelogo2.svg"
import Pagination from '../../../Components/Pagination/Pagination';
import TableTop from '../../../Components/TableTop/TableTop';

function SinglePayout() {
    const dispatch = useDispatch();
    const { payment, isLoading } = useSelector((state) => state.paymentReducer);
    console.log("singlepayment", payment)
    const { id } = useParams()

    const [search, setSearch] = useState('')
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
    useEffect(() => {
        dispatch(getSINGLEPAYMENT(id))
    }, [id, dispatch])


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

    if (!payment) return null;
    if (isLoading) {
        return <div>
            <h1>Loading</h1>
        </div>
    }


    return (
        <AdminSidebar name="Payout History">
            <div className='payoutDetails'>
                <div className='container'>
                    <div className='firsttop'>
                        <div className='left'>Payout <span><IoIosArrowForward className="icon" />Creator Payout</span></div>
                        <div className='back'>
                            <NavLink to="/payout" className="backNav">
                                <img src={backNav} alt="" />
                                <span>Back</span>
                            </NavLink>
                        </div>
                    </div>

                    <div className='topCard'>
                        <div className='detail'>
                            <div className='name' style={{ textTransform: "capitalize" }}>{payment?.category}</div>
                            <div className='id'>ID: {payment?.id}</div>

                            <p>Here’s all your payment history</p>
                        </div>

                        <div className='whiteLogo'>
                            <img src={whitelogo1} alt="" />
                            <img src={whitelogo2} alt="" />
                        </div>
                    </div>

                    <div className='tablePage tableSection'>
                        <section className='SP-payoutDetails'>
                            <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                                handleSelect={handleSelect} startDate={startDate} endDate={endDate} placeHolder="Search with payment Id"
                            >
                                <button className='downloadReport'>Download report</button>
                            </TableTop>
                        </section>
                        <div className="scroll-container">
                            <table className="table scroll">
                                <thead>
                                    <tr>
                                        <td>S/N</td>
                                        <td>Date</td>
                                        <td>Payment Amount</td>
                                        <td>Payment Id</td>
                                        <td>Payout Method</td>
                                        <td>Payout Id</td>
                                        <td>Payment status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {getPaymentData?.slice ? (
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
                                    ) : ("")} */}
                                    table body here
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination pageCount={pageCount} changePage={changePage} />
                </div>
            </div>
        </AdminSidebar >
    )
}

export default SinglePayout