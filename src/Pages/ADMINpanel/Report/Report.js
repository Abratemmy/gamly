import { useEffect, useState } from 'react'
import "./Report.scss"
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllREPORT } from '../../../Components/REDUX/ACTION/reportAction';
import { BsDot } from 'react-icons/bs';
import Pagination from '../../../Components/Pagination/Pagination';
import Refresh from '../../../Components/Refresh/Refresh';
import { FiAlertTriangle } from "react-icons/fi"
import { SuccessMessage } from '../../../Components/Message/Message';
import pointGreen from "../../../Assets/pointGreen.svg";
import ReportDatePicker, { ReportEndDatePicker, ReportStartDatePicker } from './reportDatePicker';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import closeBox from '../../../Assets/closebox.svg'


function Report() {
    // date state
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // open close
    const [openStartDate, setOpenStartDate] = useState(false)
    const [openEndDate, setOpenEndDate] = useState(false)

    const openStartDateToggle = () => {
        setOpenStartDate(prev => !prev);
        setOpenEndDate(false)
    }

    const openEndDateToggle = () => {
        setOpenEndDate(prev => !prev);
        setOpenStartDate(false)
    }

    const [selectSportActive, setSelectSportActive] = useState(false)
    const [sportSelected, setSportSelected] = useState("Select sport")
    const sportType = ["Horse Racing", "F1", "Golf", "Darts", "Basketball", "MMA/UFC", "NetBall", "Rudby League"]

    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getAllReports = useSelector((state) => state.reportReducer);
    console.log("err", getAllReports)
    const pageCount = Math.ceil(getAllReports?.length / newsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }

    const handleRefresh = () => {

    }

    const [openReport, setOpenReport] = useState(false);
    const openReportHandler = () => {
        setOpenReport((prev) => !prev)
    }

    const [alertToggle, setalerttoggle] = useState(false);
    const [messageStatus, setMessageStatus] = useState(false)

    const downloadReport = () => {
        setalerttoggle(false)
        setMessageStatus(true)
    }

    useEffect(() => {
        dispatch(getAllREPORT())
    }, [dispatch])


    return (
        <AdminSidebar name="Report">

            <div className='ReportPage'>
                <div className='' style={{ padding: "20px 0px 40px 0px" }}>
                    <div className="container">
                        <div className='ReportWrapper'>
                            <div className='refresh'>
                                <Refresh handleRefresh={handleRefresh} />
                            </div>

                            <div className='row filterSession gy-4'>
                                <div className='col-lg-5  col-md-6'>
                                    <div className='dateColumn'>
                                        <ReportDatePicker />
                                    </div>
                                </div>

                                <div className='col-lg-7 col-md-12 col' >
                                    <div className=''>
                                        <div className='row gx-3'>
                                            <div className="col-4">
                                                <div className='content'>
                                                    <label>Match Id</label>
                                                    <input className='inputBox' />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className='content'>
                                                    <label>Challenge Id</label>
                                                    <input className='inputBox' />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className='content'>
                                                    <label>Sport Type</label>
                                                    <div className='inputBox' onClick={() => setSelectSportActive(!selectSportActive)}>
                                                        {sportSelected} <span><MdOutlineKeyboardArrowDown className='drop-icon' /></span>
                                                        {selectSportActive && (
                                                            <div className='dropdown-content'>
                                                                {sportType?.map((option) => (
                                                                    <div className="dropdown-item"
                                                                        onClick={(e) => {
                                                                            setSportSelected(option);
                                                                            setSelectSportActive(false)
                                                                        }}
                                                                    >
                                                                        {option}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                    </div>

                                                    {/* <option>Select Sport Type</option>
                                                {sportType?.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item}>{item}</option>
                                                    )

                                                })} */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className='reportAction'>
                            <button onClick={openReportHandler}>Get Report</button>
                            <button onClick={() => setalerttoggle(!alertToggle)}>Download Report</button>
                        </div>

                        <div className='tableSection'>
                            <div className="scroll-container">
                                <table className="table scroll">
                                    <thead>
                                        <tr>
                                            <td>S/N</td>
                                            <td>Invoice no</td>
                                            <td>Invoice date</td>
                                            <td>Customer Id</td>
                                            <td>Referral name</td>
                                            <td>Refferer commission</td>
                                            <td>Sports</td>
                                            <td>Challenge status</td>
                                            <td>Total tax to pay</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getAllReports?.slice ? (
                                            <>
                                                {getAllReports?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                                    return (
                                                        <tr key={data?.id} onClick={openReportHandler} style={{ cursor: 'pointer' }}>
                                                            <td >
                                                                {((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                                    <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                                }
                                                            </td>
                                                            <td >{data?.address?.geo?.lat}</td>
                                                            <td  >18/06/2023</td>
                                                            <td >ID: {data?.address?.suite}</td>
                                                            <td >{data?.address?.city}</td>
                                                            <td >${data?.id}0.00</td>
                                                            <td>{data?.address?.city}</td>
                                                            <td><span style={{ paddingRight: '5px' }}><img src={pointGreen} alt="" style={{ width: '9px' }} /></span> Active</td>
                                                            <td>$ {data?.address?.geo?.lng}</td>
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

                {alertToggle && (
                    <div className='popupContainer' >
                        <div className='alertBody' onClick={(e) => e.stopPropagation()}>
                            <div className='editSession'>
                                <span><FiAlertTriangle className='icon' /> </span>
                                Download Report
                            </div>
                            <div className='editText'>Are you sure you want to download this report ?</div>
                            <div className='actionButton'>
                                <button onClick={() => setalerttoggle(false)}>No</button>
                                <button onClick={downloadReport}>Yes, download</button>
                            </div>
                        </div>
                    </div>
                )}

                {messageStatus &&
                    <SuccessMessage message="Report downloaded successfully" handleClose={() => setMessageStatus(false)} />
                }

                {openReport && (
                    <div className='popupContainer'>
                        <div className='reportpopupBody' onClick={(e) => e.stopPropagation()}>
                            <div className='top'>
                                <div className='left'>
                                    <div className='head'>Report</div>
                                    <div className='text'>
                                        <div className='bd-text'>Invoice No: 972777</div>
                                    </div>
                                    <div className='sub-text'>GAA Football</div>
                                    <div className='sm-text'>Adam Country, ND</div>
                                </div>

                                <div className="close">
                                    <button onClick={() => setOpenReport(false)}>
                                        <img src={closeBox} alt="" />
                                    </button>
                                </div>
                            </div>

                            <div className="container card">
                                <div className='row g-3'>
                                    <div className='col-6'>
                                        <div className='content'>
                                            <div className='title'>Customer ID</div>
                                            <div className='text'>77787</div>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='content'>
                                            <div className='title'>Match ID</div>
                                            <div className='text'>CB-67</div>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='content'>
                                            <div className='title'>Challenge Id</div>
                                            <div className='text'>COM77787</div>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='content'>
                                            <div className='title'>Referral name</div>
                                            <div className='text'>Vogra Dora</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='content'>
                                <div className='other'>
                                    <div className='left'>Invoice Date</div>
                                    <div className='right'>18/08/89</div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Referrer commission</div>
                                    <div className='right'> $5,737.00 </div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Match title</div>
                                    <div className='right'>Kristin Watson</div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Contest fees</div>
                                    <div className='right'> $5,737.00 </div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Rate %</div>
                                    <div className='right'>7%</div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Total platform fees</div>
                                    <div className='right'> $5,737.00 </div>
                                </div>
                                <div className='other'>
                                    <div className='left'>After tax platform fees</div>
                                    <div className='right'> $5,737.00 </div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Total tax to pay</div>
                                    <div className='right'> $5,737.00 </div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Referrer name</div>
                                    <div className='right'>Varga Dóra</div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Igst</div>
                                    <div className='right'>$ 1,200</div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Sgst</div>
                                    <div className='right'>$ 1,200</div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Cgst</div>
                                    <div className='right'>$ 1,200</div>
                                </div>
                                <div className='other'>
                                    <div className='left'>Status</div>
                                    <div className='right'><BsDot className='icon' />Status</div>
                                </div>

                            </div>

                        </div>
                    </div>
                )}
            </div>
        </AdminSidebar>
    )
}

export default Report