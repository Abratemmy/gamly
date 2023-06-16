import React, { useState, useEffect } from 'react'
import AdminSidebar from '../../../Components/SIDEBAR/AdminSidebar';
import "./Pmanagement.css";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPAGEMANAGEMENT } from '../../../Components/REDUX/ACTION/pageManagementAction';
import { MdDeleteOutline, MdOutlineModeEditOutline, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiAlertTriangle } from 'react-icons/fi';
import AddPage from './addPage';
import { BiSearch, BiRefresh } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import Pagination from '../../../Components/Pagination/Pagination';
import Search from '../../../Components/Search/Search';
import Refresh from '../../../Components/Refresh/Refresh';

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
    console.log("err", getAllPage)
    const pageCount = Math.ceil(getAllPage?.length / newsPerPage);

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
        console.log("id", id)
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
    }, [dispatch])

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
                                        <Search handleSearch={(e) => setSearch(e.target.value)} search={search} />

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
                                                    <td > Modify By</td>
                                                    <td >Status</td>
                                                    <td ></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/*  */}
                                                {getAllPage?.slice ? (
                                                    <>
                                                        {getAllPage?.filter((item) => {
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
                                                                    <td >{data?.username}</td>
                                                                    <td  >{data?.name}</td>
                                                                    <td >{data?.address?.street}</td>
                                                                    <td >{data?.address?.city}</td>
                                                                    <td >{data?.address?.suite}</td>
                                                                    <td><span><BsDot className="icon" /></span> Active</td>
                                                                    <td className='tableAction'>
                                                                        <button onClick={() => deleteContent(data, index)}><MdDeleteOutline className='action' /></button>
                                                                        <span onClick={() => setToggleState(2)}><button onClick={() => setCurrentId(data.id)}><MdOutlineModeEditOutline className='action' /></button>
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
                            <AddPage setToggleState={() => setToggleState(1)} currentId={currentId} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminSidebar>
    )
}

export default PManagement