import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getSINGLEPAYMENT } from '../../../Components/Admin/ADMINACTION//paymentAction';
import AdminSidebar from '../../../Components/Admin/AdminSidebar';
import { IoIosArrowForward } from "react-icons/io";
import backNav from "../../../Assets/backNav.svg";
import whitelogo1 from "../../../Assets/whitelogo1.svg"
import whitelogo2 from "../../../Assets/whitelogo2.svg"
import Pagination from '../../../Components/Common/Pagination/Pagination';
import TableTop from '../../../Components/Common/TableTop/TableTop';
import { GETPENDING, GETSUCCESS } from '../../../Components/Admin/CONSTANT/actionTypes';
import pointGreen from "../../../Assets/pointGreen.svg";
import pointYellow from "../../../Assets/pointYellow.svg";
import pointRed from "../../../Assets/pointRed.svg";
import PageLoader from '../../../Components/Common/PAGELOADER/PageLoader';

function SinglePayout() {
    const dispatch = useDispatch();
    const singleData = [
        { date: "22/06/2023", payout_amount: 376.89, payment_id: 23456, payment_method: "Bank transfer", payout_id: 68890, payment_status: "Successful" },
        { date: "22/06/2023", payout_amount: 456.19, payment_id: 11256, payment_method: "Bank transfer", payout_id: 18890, payment_status: "Pending" },
        { date: "22/06/2023", payout_amount: 896.12, payment_id: 56756, payment_method: "Bank transfer", payout_id: 65630, payment_status: "Failed" },
        { date: "22/06/2023", payout_amount: 376.89, payment_id: 97456, payment_method: "Bank transfer", payout_id: 45890, payment_status: "Successful" },
        { date: "22/06/2023", payout_amount: 766.15, payment_id: 23456, payment_method: "Bank transfer", payout_id: 68890, payment_status: "Successful" },
        { date: "22/06/2023", payout_amount: 376.89, payment_id: 32456, payment_method: "Bank transfer", payout_id: 23890, payment_status: "Pending" },
        { date: "22/06/2023", payout_amount: 346.89, payment_id: 19456, payment_method: "Bank transfer", payout_id: 61890, payment_status: "Failed" },
    ]
    const { payment, isLoading } = useSelector((state) => state.paymentReducer);
    console.log("singlepayment", payment)
    const { id } = useParams()

    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getPaymentData = useSelector((state) => state.paymentReducer);
    console.log("payment", getPaymentData)

    const pageCount = Math.ceil(singleData?.length / newsPerPage);

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

    if (!payment) return <div>
        <div className=''>No data for this page</div>
    </div>;
    // if (isLoading) {
    //     return <div>
    //         <h1>Loading</h1>
    //     </div>
    // }


    return (
        <AdminSidebar name="Payout History">
            {isLoading ? (<div className='loadingPage'><PageLoader /></div>) :
                <div className='payoutDetails allPages'>
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
                                        {singleData?.slice ? (
                                            <>
                                                {singleData?.filter((item) => {
                                                    return search?.toLowerCase() === "" ? item :
                                                        (item?.title?.toLowerCase().includes(search.toLowerCase()))

                                                })?.slice(newsVisited, newsVisited + newsPerPage)?.map((item, index) => {
                                                    return (
                                                        <tr key={item?.id}>
                                                            <td >{((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                                <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                            }
                                                            </td>
                                                            <td  >{item?.date}</td>
                                                            <td  >${item?.payout_amount}</td>
                                                            <td >{item?.payment_id}</td>
                                                            <td >{item?.payment_method}</td>
                                                            <td  > {item?.payout_id}</td>
                                                            <td className='payout-status'>
                                                                {item?.payment_status === GETSUCCESS ? <div className='success'>
                                                                    <img src={pointGreen} alt="" style={{ position: 'relative', top: '-2px' }} /> <span style={{ paddingLeft: "5px" }}>Successful</span>
                                                                </div> :
                                                                    item?.payment_status === GETPENDING ? <div className='pending'>
                                                                        <img src={pointYellow} alt="" style={{ position: 'relative', top: '-2px' }} /> <span style={{ paddingLeft: "5px" }}>Pending</span>
                                                                    </div> :
                                                                        <div className='failed'>
                                                                            <img src={pointRed} alt="" style={{ position: 'relative', top: '-2px' }} /> <span style={{ paddingLeft: "5px" }}>Failed</span>
                                                                        </div>
                                                                }
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
            }
        </AdminSidebar >
    )
}

export default SinglePayout