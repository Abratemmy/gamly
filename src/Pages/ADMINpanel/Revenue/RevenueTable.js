import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllREVENUE } from '../../../Components/Admin/ADMINACTION/revenueAction';
import Pagination from '../../../Components/Common/Pagination/Pagination';
import moment from "moment"
import increaseImg from "../../../Assets/Increase.svg";
import decreaseImg from "../../../Assets/decrease.svg";
import TableTop from '../../../Components/Common/TableTop/TableTop';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import NewMonthCalendar from '../../../Components/Common/Date/newMonth';
import TableProgressBar from '../../../Components/Common/TableProgressBar/TableProgressBar';
import { Table, Thead, Tr, Td, Tbody } from "../../../Components/Common/Table/Table"
import PageLoader from '../../../Components/Common/PAGELOADER/PageLoader';

function RevenueTable() {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const { getRevenueData, isLoading } = useSelector((state) => state.revenueReducer);
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
    useEffect(() => {
        dispatch(getAllREVENUE())
        setActive(active)
    }, [dispatch, active])

    // if (!getRevenueData) return <NoDatafromApi />;
    return (
        <div>
            {isLoading ? <PageLoader /> :
                <div className='tableSession'>
                    <div className='tablePage tableSection'>
                        <section>
                            <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                                handleSelect={handleSelect} startDate={startDate} endDate={endDate} placeHolder="Search"
                            />

                        </section>

                        <div className="scroll-container">
                            <Table className="table scroll">
                                <Thead className='thead'>
                                    <Tr className="tableRow">
                                        <Td>S/N</Td>
                                        <Td>Name</Td>
                                        <Td>Total Gross Profit</Td>
                                        <Td>Last Month</Td>
                                        <Td>Last Week</Td>
                                        <Td className="td">
                                            <div className='dateRateDropdown' onClick={openDateToggle}>

                                                <span><span style={{ textTransform: 'none' }}>Growth rate</span> <br />
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
                                <Tbody className="tbody">
                                    {getRevenueData?.slice ? (
                                        <>
                                            {getRevenueData?.filter((item) => {
                                                return search?.toLowerCase() === "" ? item :
                                                    (item?.category?.toLowerCase().includes(search.toLowerCase()))

                                            })?.slice(newsVisited, newsVisited + newsPerPage)?.map((item, index) => {
                                                return (
                                                    <Tr key={item?.id}>
                                                        <Td >{((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                            <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                        }
                                                        </Td>
                                                        <Td className="td"  >{item?.category}</Td>
                                                        <Td className="td"  >${item?.price}.67</Td>
                                                        <Td className="td" >${item?.rating?.rate * 10}.00</Td>
                                                        <Td className="td" >${item?.rating.count}.45</Td>
                                                        <Td className="td">
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

                    <TableProgressBar data={getRevenueData} newsPerPage={newsPerPage} progressWidth={progressWidth} />

                    <Pagination pageCount={pageCount} changePage={changePage} />

                </div>
            }
        </div>
    )
}

export default RevenueTable