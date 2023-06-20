import React, { useState, useEffect } from 'react'
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import "./Pmanagement.css";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { deletePAGEMANAGEMENT, getAllPAGEMANAGEMENT } from '../../../Components/REDUX/ACTION/pageManagementAction';
import { MdDeleteOutline, MdOutlineModeEditOutline, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiAlertTriangle } from 'react-icons/fi';
import AddPage from './addPage';
import { BsDot } from 'react-icons/bs'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import Pagination from '../../../Components/Pagination/Pagination';
import Search from '../../../Components/Search/Search';
import Refresh from '../../../Components/Refresh/Refresh';
import { STATUSACTIVE, STATUSPROCESSING } from '../../../Components/REDUX/CONSTANT/actionTypes';

function PManagement() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getAllPage = useSelector((state) => state.pageManagementReducer);
    console.log("AllPages", getAllPage)
    const pageCount = Math.ceil(getAllPage.pageList?.length / newsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }
    const [currentId, setCurrentId] = useState(null);

    const [popupcontent, setPopupcontent] = useState({})

    // code to delete admin
    const [deleteToggle, setDeletetoggle] = useState(false)
    const deleteContent = (data) => {
        setPopupcontent(data);
        setDeletetoggle(!deleteToggle)
        // onClick={() => dispatch(deleteProduct(product._id))}
    }
    const deletePage = (id) => {
        alert("deleted successfully");
        dispatch(deletePAGEMANAGEMENT(id))
        console.log("id", id)
        alert("deleted successfully")
    }

    // open date dropdown toggle
    const [dateToggle, setDateToggle] = useState(false);

    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])
    useEffect(() => {
        dispatch(getAllPAGEMANAGEMENT())
    }, [currentId, dispatch])

    return (
        <AdminSidebar name="Page Management" >
            <div className='PManagement'>
                <div className='container'>
                    <div className='pageContainer'>
                        <div className={toggleState === 1 ? "tabContent active-tabContent" : "tabContent"}>
                            <div className="tabWrapper">
                                <div className='AddPage'>
                                    <span onClick={() => setToggleState(2)}><IoMdAdd className="icon" />Add Page</span>
                                </div>

                                <div className='tableSection'>
                                    <div className='inputSection' style={{ padding: "10px 0px 30px 0px" }}>
                                        <Search setSearch={setSearch} search={search} />

                                        <div className='refreshDiv' >
                                            <div className='dateInput'>
                                                <input
                                                    value={`${format(range[0].startDate, "MMM, dd")} - ${format(range[0].endDate, "MMM, dd yyyy")}`}
                                                    readOnly
                                                    className="inputBox"
                                                    onClick={() => setDateToggle(dateToggle => !dateToggle)}
                                                />
                                                <span><MdOutlineKeyboardArrowDown className='iconDropdown' /></span>
                                            </div>

                                            <Refresh handleRefresh={() => setSearch("")} />

                                            {dateToggle &&
                                                <div className='calendar pageCalendar1'>
                                                    <DateRange
                                                        onChange={item => setRange([item.selection])}
                                                        editableDateInputs={true}
                                                        moveRangeOnFirstSelection={false}
                                                        ranges={range}
                                                        months={2}
                                                        direction="horizontal"
                                                        className="calendarElement"
                                                    />
                                                </div>

                                            }
                                        </div>
                                    </div>
                                    <div className="scroll-container">
                                        <table className="table scroll">
                                            <thead>
                                                <tr >
                                                    <td >S/N</td>
                                                    <td >Page name</td>
                                                    <td >Page Title</td>
                                                    <td >Web title</td>
                                                    <td >Created By</td>
                                                    <td >Status</td>
                                                    <td ></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/*  */}
                                                {getAllPage?.pageList?.slice ? (
                                                    <>
                                                        {getAllPage?.pageList?.filter((item) => {
                                                            return search?.toLowerCase() === "" ? item :
                                                                (item?.username?.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase()))

                                                        })?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                                            return (
                                                                <tr key={data?.id}>
                                                                    <td >
                                                                        {((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                                            <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                                        }
                                                                    </td>
                                                                    <td >{data?.page_name}</td>
                                                                    <td  >{data?.Page_title}</td>
                                                                    <td >{data?.page_url}</td>
                                                                    <td >{data?.created_by}</td>
                                                                    <td> {data.status === STATUSACTIVE ? <> <span><BsDot className="iconActive" /></span>Active</> :
                                                                        data.status === STATUSPROCESSING ? <> <span><BsDot className="iconProcessing" />Processing</span></> :
                                                                            <> <span><BsDot className="iconPending" /></span>Pending</>
                                                                    }
                                                                        {/* <span><BsDot className="icon" /></span> Active */}
                                                                    </td>
                                                                    <td className='tableAction'>
                                                                        <button onClick={() => deleteContent(data, index)}><MdDeleteOutline className='action' /></button>
                                                                        <span onClick={() => setToggleState(2)}><button onClick={() => setCurrentId(data.page_id)}><MdOutlineModeEditOutline className='action' /></button>
                                                                        </span>
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

                                {/* pagination starts here */}
                                <Pagination pageCount={pageCount} changePage={changePage} />

                                {deleteToggle && (
                                    <div className='popupContainer' >
                                        <div className='alertBody' onClick={(e) => e.stopPropagation()}>
                                            <div className='editSession'>
                                                <span><FiAlertTriangle className='icon' /> </span>
                                                Delete  {popupcontent?.username} page
                                            </div>
                                            <div className='editText'>Are you sure you want to delete the {popupcontent?.username} page?</div>
                                            <div className='actionButton'>
                                                <button onClick={() => setDeletetoggle(false)}>No</button>
                                                <button onClick={() => deletePage(popupcontent.id)}>Yes, Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className={toggleState === 2 ? "tabContent active-tabContent" : "tabContent"}>
                            <AddPage setToggleState={() => setToggleState(1)} currentId={currentId} setCurrentId={setCurrentId} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminSidebar>
    )
}

export default PManagement