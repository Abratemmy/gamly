import { useEffect, useState } from 'react'
import "./Report.scss"
import AdminSidebar from '../../../Components/SIDEBAR/AdminSidebar';
import Navbar from '../../../Components/Navbar/Navbar';
import { BiRefresh } from 'react-icons/bi';
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
                                <Refresh />
                            </div>

                            <div className='filterSession'>
                                <div className='row gx-3'>
                                    <div className="col-sm-2">
                                        <div className='content'>
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
                                        <div className='content'>
                                            <label>End Date</label>
                                            <input
                                                value={`${format(range[0].endDate, "MM/dd/yyyy")}`}
                                                readOnly
                                                className="inputBox"
                                                onClick={() => setOpen(open => !open)}
                                            />
                                        </div>
                                    </div>


                                    {open &&
                                        <DateRange
                                            onChange={item => setRange([item.selection])}
                                            editableDateInputs={true}
                                            moveRangeOnFirstSelection={true}
                                            ranges={range}
                                            months={1}
                                            direction="horizontal"
                                            className="calendarElement"
                                        />
                                    }

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
                            </div>
                        </div>

                        <div className='reportAction'>
                            <button>Get Report</button>
                            <button>Download Report</button>
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
            </div>
        </AdminSidebar>
    )
}

export default Report