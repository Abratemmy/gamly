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
// import ReportDatePicker from './reportDatePicker';




function Report() {
    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    // open close
    const [open, setOpen] = useState(false)

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

    const sportType = ["Horse Racing", "F1", "Golf", "Darts", "Basketball", "MMA/UFC", "NetBall", "Rudby League"]
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

                            {/* <ReportDatePicker /> */}
                            <div className='filterSession'>
                                <div className='row gx-3'>
                                    <div className="col-sm-2">
                                        <div className='content dateContent'>
                                            <label>Start date</label>
                                            <input
                                                value={`${format(range[0].startDate, "MM/dd/yyyy")}`}
                                                readOnly
                                                className="inputBox"
                                                onClick={() => setOpen(open => !open)}
                                            />
                                        </div>
                                    </div>


                                    <div className="col-sm-2">
                                        <div className='content dateContent'>
                                            <label>End Date</label>
                                            <input
                                                value={`${format(range[0].endDate, "MM/dd/yyyy")}`}
                                                readOnly
                                                className="inputBox"
                                                onClick={() => setOpen(open => !open)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-2">
                                        <div className='content'>
                                            <label>Match Id</label>
                                            <input className='inputBox' />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className='content'>
                                            <label>Challenge Id</label>
                                            <input className='inputBox' />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className='content'>
                                            <label>Sport Type</label>
                                            <select name="sportType" id="sportType" value="sportType"
                                                className='inputBox'

                                            >
                                                <option>Select Sport Type</option>
                                                {sportType?.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item}>{item}</option>
                                                    )

                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* {open &&
                                    <>
                                        <div className='dateWrapper bigScreen'>
                                            <DateRange
                                                onChange={item => setRange([item.selection])}
                                                editableDateInputs={true}
                                                moveRangeOnFirstSelection={true}
                                                ranges={range}
                                                months={2}
                                                direction="horizontal"
                                                className="calendarElement"
                                            />
                                        </div>
                                        <div className='dateWrapper phone'>
                                            <DateRange
                                                onChange={item => setRange([item.selection])}
                                                editableDateInputs={true}
                                                moveRangeOnFirstSelection={true}
                                                ranges={range}
                                                months={1}
                                                direction="horizontal"
                                                className="calendarElement"
                                            />
                                        </div>
                                    </>
                                } */}
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
                                                        <tr key={data?.id}>
                                                            <td >
                                                                {((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                                    <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                                }
                                                            </td>
                                                            <td >{data?.address?.geo?.lat}</td>
                                                            <td  >18/06/2023</td>
                                                            <td >{data?.address?.suite}</td>
                                                            <td >{data?.address?.city}</td>
                                                            <td >${data?.id}0.00</td>
                                                            <td>{data?.address?.city}</td>
                                                            <td><span><BsDot className="icon" /></span> Active</td>
                                                            <td>{data?.address?.geo?.lng}</td>
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
                                <div>
                                    <div className='head'>Report</div>
                                    <div className='text'>
                                        <div className='bd-text'>Invoice No: 972777</div>
                                        <div className="close">
                                            <button onClick={() => setOpenReport(false)}>x</button>
                                        </div>
                                    </div>
                                    <div className='sub-text'>GAA Football</div>
                                    <div className='sm-text'>Adam Country, ND</div>


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