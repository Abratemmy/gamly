import React, { useState, useEffect } from 'react';
import "./Admin.css";
import { BiPlus, BiSearch, BiRefresh } from "react-icons/bi";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai"
import { BsQuestionCircle } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi"
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from 'react-redux';
import { getAllADMIN } from '../../Components/REDUX/ACTION/adminAction';
import validator from 'validator';
import AdminSidebar from '../../Components/ADMINSIDEBAR/AdminSidebar';
import Navbar from '../../Components/Navbar/Navbar';

function Admin() {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 4
    const newsVisited = pageNumber * newsPerPage

    const getAdminData = useSelector((state) => state.adminReducer);
    console.log("err", getAdminData)

    const pageCount = Math.ceil(getAdminData?.length / newsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }

    // this is to add admin button function
    const [popupcontent, setPopupcontent] = useState({})
    const [alerttoggle, setalerttoggle] = useState(false)
    const [openForm, setopenForm] = useState(false)

    const changeContent = (data) => {
        setPopupcontent(data);
        setalerttoggle(!alerttoggle);
        setopenForm(false)
    }
    const formToggle = () => {
        setopenForm(true);
        setalerttoggle(false)
    }

    const roleData = ["Super Admin", "Sub Admin", "Admin"]

    // validation for edit form
    const [errors, setErrors] = useState({});

    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.title) errorsValue.title = "Please enter admin name";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";
        if (!targets.role) errorsValue.role = "Please enter admin name";
        if (!targets.access) errorsValue.access = "Please enter admin name";
        if (!targets.password) {
            errorsValue.password = "Password is required"
        }
        else if (!validator.isStrongPassword(targets.password, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1
        })) errorsValue.password = "Password must contain a minimum of 8 characters and must be Alphanumeric"

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };
    const handleEditForm = (e) => {
        e.preventDefault();
        let v = handleError(popupcontent);
        if (v > 0) {
            console.log("error");
        } else {
            alert("edit successfully");

        }
    }


    // code to delete admin
    // onClick={() => dispatch(deleteProduct(product._id))}
    const [deleteToggle, setDeletetoggle] = useState(false)
    const deleteContent = (data) => {
        setPopupcontent(data);
        setDeletetoggle(!deleteToggle)
        // onClick={() => dispatch(deleteProduct(product._id))}
    }
    const deleteAdmin = (id) => {
        alert("deleted successfully");
        console.log("id", id)
    }


    // this below is the function to add admin form
    const [addAdminForm, setAddAdminForm] = useState(false)
    const AddAdmin = () => {
        setAddAdminForm(true)
    }
    const initialValue = {
        title: "",
        password: "",
        email: "",
        access: "",
        role: ""
    }
    const [values, setValues] = useState(initialValue);

    const clearAdmin = () => setValues(initialValue)
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value
        });
    };
    const handleAddAdmin = (e) => {
        e.preventDefault()
        let v = handleError(values);
        if (v > 0) {
            console.log("error");
        }
        else {
            alert("submitted successfully")
            clearAdmin()
        }
    }
    useEffect(() => {
        dispatch(getAllADMIN())
    }, [dispatch])

    return (
        <AdminSidebar>
            <Navbar name="Admin" />
            <div className='adminPage'>
                <div className='container'>
                    <div className='first'>
                        <div className='top-text'>Here's a list of your gamly admins</div>
                        <div className='top-button'>
                            <button className='button' onClick={AddAdmin}><BiPlus className="icon" /> <span>Add Admin</span></button>
                        </div>
                    </div>

                    <section>
                        <div className='inputSection' style={{ padding: "10px 0px 30px 0px" }}>
                            <div className='inputContainer' >
                                <BiSearch className="icon" />
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>

                            <div className='refreshDiv' >
                                <button className='refresh'><BiRefresh className='r-icon' /> <span>Refresh</span> </button>
                            </div>

                        </div>
                    </section>

                    <section className='tableSection'>
                        <div className='header'>Admin <span> 1000 admins </span></div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Role <span><BsQuestionCircle className="icon" /> </span></th>
                                    <th>Email Address</th>
                                    <th>Access</th>
                                    <th>Date added</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {getAdminData?.slice ? (
                                    <>
                                        {getAdminData?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                            return (
                                                <tr key={data?.id}>
                                                    <td width="15%" >{data?.title}</td>
                                                    <td width="10%" className='grayColor'>{data?.category}</td>
                                                    <td width="20%" className='grayColor'>{data?.location}</td>
                                                    <td width="25%" className='grayColor'>{data?.petsAllowed === true ? "true" : "false"}</td>
                                                    <td width="10%" className='grayColor'>{data?.date}</td>
                                                    <td width="10%" className='tableAction'>
                                                        <button onClick={() => deleteContent(data, index)}><AiFillDelete className='action' /></button>
                                                        <button onClick={() => changeContent(data, index)}><AiOutlineEdit className='action' /></button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </>
                                ) : ("")}

                            </tbody>

                        </table>
                    </section>

                    {/* pagination starts here */}
                    <ReactPaginate
                        breakLabel="..."
                        previousLabel={"<<"}
                        nextLabel={">>"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        pageRangeDisplayed={10}
                        renderOnZeroPageCount={null}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                        marginPagesDisplayed={0}
                    />
                </div>

                {alerttoggle && (
                    <div className='popupContainer' >
                        <div className='alertBody' onClick={(e) => e.stopPropagation()}>
                            <div className='editSession'>
                                <span><FiAlertTriangle className='icon' /> </span>
                                Edit Admin?
                            </div>
                            <div className='editText'>Are you sure you want to edit this admin?</div>
                            <div className='actionButton'>
                                <button onClick={() => setalerttoggle(false)}>No</button>
                                <button onClick={formToggle}>Yes, edit</button>
                            </div>
                        </div>
                    </div>
                )}

                {openForm && (
                    <div className='popupContainer'>
                        <div className='formpopupBody' onClick={(e) => e.stopPropagation()}>
                            <div className='heading'>
                                <div className='text'>Edit Admin</div>
                                <button onClick={() => setopenForm(false)}>x</button>
                            </div>

                            <form onSubmit={handleEditForm} className='formInput'>
                                <div className='inputfield'>
                                    <label>Name</label>
                                    <input type="text"
                                        name="title" value={popupcontent.title}
                                        onChange={(e) => {
                                            setPopupcontent({ ...popupcontent, title: e.target.value });
                                        }}

                                    />
                                    {errors ? <span className='error'> {errors.title}</span> : ""}
                                </div>

                                <div className='inputfield'>
                                    <label>Email</label>
                                    <input type="email"
                                        name="email" value={popupcontent.category}
                                        onChange={(e) => {
                                            setPopupcontent({ ...popupcontent, category: e.target.value });
                                        }}
                                    />
                                    {errors ? <span className='error'> {errors.email}</span> : ""}
                                </div>

                                <div className='inputfield'>
                                    <label>Role</label>
                                    <select name="role" id="role" value={popupcontent.location}
                                        onChange={(e) => {
                                            setPopupcontent({ ...popupcontent, location: e.target.value });
                                        }}
                                    >
                                        <option>Select Role</option>
                                        {roleData?.map((item, index) => {
                                            return (
                                                <option key={index} value={popupcontent.location}>{item}</option>
                                            )

                                        })}
                                    </select>
                                    {errors ? <span className='error'> {errors.role}</span> : ""}
                                </div>

                                <div className='inputfield'>
                                    <label>Access</label>
                                    <select name="access" id="cars">
                                        <option value="volvo">Super Admin</option>
                                        <option value="saab">Sub Admin</option>
                                        <option value="mercedes">Admin</option>
                                    </select>
                                    {errors ? <span className='error'> {errors.access}</span> : ""}
                                </div>
                                <div className='inputfield'>
                                    <label>Password</label>
                                    <input type="text"
                                        name="password" value={popupcontent.password}
                                        onChange={(e) => {
                                            setPopupcontent({ ...popupcontent, password: e.target.value });
                                        }}
                                    />
                                    {errors ? <span className='error'> {errors.password}</span> : ""}
                                </div>

                                <div className='submitButton'>
                                    <button onClick={() => setopenForm(false)}>Cancel</button>
                                    <button type="submit">Edit Admin</button>
                                </div>

                            </form>

                        </div>
                    </div>
                )}

                {deleteToggle && (
                    <div className='popupContainer' >
                        <div className='alertBody' onClick={(e) => e.stopPropagation()}>
                            <div className='editSession'>
                                <span><FiAlertTriangle className='icon' /> </span>
                                Delete  Admin?
                            </div>
                            <div className='editText'>Are you sure you want to delete {popupcontent?.title}?</div>
                            <div className='actionButton'>
                                <button onClick={() => setDeletetoggle(false)}>No</button>
                                <button onClick={() => deleteAdmin(popupcontent.id)}>Yes, Delete</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* main form to add admin code is down here */}
                {addAdminForm && (
                    <div className='popupContainer'>
                        <div className='formpopupBody' onClick={(e) => e.stopPropagation()}>
                            <div className='heading'>
                                <div className='text'>Add Admin</div>
                                <button onClick={() => setAddAdminForm(false)}>x</button>
                            </div>

                            <form onSubmit={handleAddAdmin} className='formInput'>
                                <div className='inputfield'>
                                    <label>Name</label>
                                    <input type="text"
                                        name="title" value={values.title} onChange={handleChange}
                                    />
                                    {errors ? <span className='error'> {errors.title}</span> : ""}
                                </div>

                                <div className='inputfield'>
                                    <label>Email</label>
                                    <input type="email"
                                        name="email" value={values.email} onChange={handleChange}
                                    />
                                    {errors ? <span className='error'> {errors.email}</span> : ""}
                                </div>

                                <div className='inputfield'>
                                    <label>Role</label>
                                    <select name="role" id="role" value={values.role} onChange={handleChange}
                                    >
                                        <option>Select Role</option>
                                        {roleData?.map((item, index) => {
                                            return (
                                                <option key={index} value={popupcontent.location}>{item}</option>
                                            )

                                        })}
                                    </select>
                                    {errors ? <span className='error'> {errors.role}</span> : ""}
                                </div>

                                <div className='inputfield'>
                                    <label>Access</label>
                                    <select name="access" id="cars" value={values.access} onChange={handleChange}>
                                        <option value="volvo">Super Admin</option>
                                        <option value="saab">Sub Admin</option>
                                        <option value="mercedes">Admin</option>
                                    </select>
                                    {errors ? <span className='error'> {errors.access}</span> : ""}
                                </div>
                                <div className='inputfield'>
                                    <label>Password</label>
                                    <input type="text"
                                        name="password" value={values.password} onChange={handleChange}
                                    />
                                    {errors ? <span className='error'> {errors.password}</span> : ""}
                                </div>

                                <div className='submitButton'>
                                    <button onClick={() => setAddAdminForm(false)}>Cancel</button>
                                    <button type="submit">Add Admin</button>
                                </div>

                            </form>

                        </div>
                    </div>
                )}
            </div>
        </AdminSidebar>
    )
}

export default Admin