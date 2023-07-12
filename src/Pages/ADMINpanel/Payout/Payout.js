import React, { useState, useEffect } from 'react';
import "./Payout.css";
import AdminSidebar from '../../../Components/Admin/AdminSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPAYMENTs } from '../../../Components/Admin/ADMINACTION//paymentAction';
import { NavLink } from 'react-router-dom';
import Pagination from '../../../Components/Common/Pagination/Pagination';
import TopCard from '../../../Components/Common/pageCard/TopCard';
import AreaChartRechart from '../../../Components/Common/RECHART/AreaChart';
import AreaChartRechart2 from '../../../Components/Common/RECHART/AreaChart2';
import TableTop from '../../../Components/Common/TableTop/TableTop';
import TableProgressBar from '../../../Components/Common/TableProgressBar/TableProgressBar';
import PageLoader from '../../../Components/Common/PAGELOADER/PageLoader';

function Payout() {
    // payout card array
    const payoutCard = [
        { subtitle: "Total", amount: 120000, span: "", text: "" },
        { subtitle: "Last Month", amount: 30000, span: 3, text: "descrease From Previous Month" },
        { subtitle: "Last Week", amount: 16000, span: 5, text: "Increase From Previous Week" },
        { subtitle: "Today", amount: 78000, span: 7, text: "Increase From Previous Day" }
    ]
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage
    console.log("newsVisited", newsVisited)

    const { payment, isLoading } = useSelector((state) => state.paymentReducer);
    console.log("payment", payment)

    const pageCount = Math.ceil(payment?.length / newsPerPage);
    console.log("PAGECOUNT", pageCount)

    // newsVisited, newsVisited + newsPerPage
    const progressWidth = ((newsVisited + newsPerPage) / payment?.length) * 100

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }
    const [products, setProducts] = useState(payment?.data);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


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

    const chartData1 = [
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

    const chartData2 = [
        {
            name: 'May 01',
            uv: 200,
            amt: 2400,
            onehrUv: 100,
            twentyfourMinUv: 200,
            thirtyminUv: 300,
            tenminUv: 50,
            fineminUv: 100
        },
        {
            name: 'May 05',
            uv: 100,
            amt: 2210,
            onehrUv: 40,
            twentyfourMinUv: 90,
            thirtyminUv: 120,
            tenminUv: 10,
            fineminUv: 150
        },
        {
            name: 'May 10',
            uv: 300,
            amt: 2290,
            onehrUv: 200,
            twentyfourMinUv: 100,
            thirtyminUv: 150,
            tenminUv: 300,
            fineminUv: 100
        },
        {
            name: 'May 15',
            uv: 100,
            amt: 2000,
            onehrUv: 50,
            twentyfourMinUv: 150,
            thirtyminUv: 250,
            tenminUv: 50,
            fineminUv: 100
        },
        {
            name: 'May 20',
            uv: 400,
            amt: 2181,
            onehrUv: 300,
            twentyfourMinUv: 200,
            thirtyminUv: 50,
            tenminUv: 350,
            fineminUv: 100
        },
        {
            name: 'May 23',
            uv: 300,
            amt: 2500,
            onehrUv: 200,
            twentyfourMinUv: 100,
            thirtyminUv: 50,
            tenminUv: 150,
            fineminUv: 300
        },
        {
            name: 'May 30',
            uv: 500,
            amt: 2100,
            onehrUv: 400,
            twentyfourMinUv: 200,
            thirtyminUv: 300,
            tenminUv: 100,
            fineminUv: 300
        },
    ];

    // if (!payment) return <div>
    //     <div className=''>No data for this page</div>
    // </div>;

    return (
        <AdminSidebar name="Payout">
            {isLoading ? (<PageLoader />) :
                <div className='Payout allPages'>
                    <div className='container'>
                        <div className=''>
                            <TopCard topCard={payoutCard} cardName="Payout" />
                        </div>

                        {/* grapgh session */}
                        <div className='GraphSession  Graph'>
                            <div className='title'>Monthly Analytic Report</div>
                            <div className='row gx-5 gy-5'>
                                <div className='col-lg-6 col-md-12 col-sm-12'>

                                    <AreaChartRechart data={chartData1} />
                                </div>

                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <AreaChartRechart2 data={chartData2} />
                                </div>
                            </div>
                        </div>
                        <div className="tableName">Payouts</div>
                        <div className='tablePage tableSection'>
                            <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                                handleSelect={handleSelect} startDate={startDate} endDate={endDate} placeHolder="Search"
                            />
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
                                        {payment?.slice ? (
                                            <>
                                                {payment?.filter((item) => {
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
                        <TableProgressBar data={payment} newsPerPage={newsPerPage} progressWidth={progressWidth} />


                        <Pagination pageCount={pageCount} changePage={changePage} />

                    </div>
                </div>
            }
        </AdminSidebar>
    )
}
export default Payout