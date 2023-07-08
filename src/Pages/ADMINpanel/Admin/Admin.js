import React, { useState, useEffect } from 'react';
import "./Admin.css";
import { BiPlus } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getAllADMIN } from '../../../Components/REDUX/ACTION/adminAction';
import validator from 'validator';
import Pagination from '../../../Components/Pagination/Pagination';
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import pointGreen from "../../../Assets/pointGreen.svg";
import pointYellow from "../../../Assets/pointYellow.svg";
import deleteImg from "../../../Assets/deleteImg.svg";
import editImg from "../../../Assets/editImg.svg"
import AddAdminPage from './addAdmin';
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { BiSearch, BiRefresh } from "react-icons/bi"
import cancelImg from "../../../Assets/cancel.svg"
import Passwordeye from '../../../Assets/passwordEye.svg'
import { AlertToggle } from '../../../Components/Message/Message';
import PageLoader from '../../../Components/PAGELOADER/PageLoader';

function Admin() {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 4
    const newsVisited = pageNumber * newsPerPage
    const [search, setSearch] = useState('')

    const { adminData, isLoading } = useSelector((state) => state.adminReducer);
    console.log("adminData", adminData)

    const getSalesData = useSelector((state) => state.salesReducer);
    console.log("salesData123", getSalesData)

    const pageCount = Math.ceil(adminData?.adminList?.length / newsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

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

    const [selectRoleActive, setSelectRoleActive] = useState(false)
    const [roleSelected, setRoleSelected] = useState(popupcontent.role)
    const roleData = ["Super Admin", "Sub Admin", "Admin"]

    // access
    const [selectAccessActive, setSelectAccessActive] = useState(false)
    const [accessSelected, setaccessSelected] = useState("Both")
    const accessData = ["Both", "Users", "Creators"]
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

    console.log("error", errors)

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

    useEffect(() => {
        dispatch(getAllADMIN())
    }, [dispatch])

    if (!adminData) return <div>
        <div className=''>No data for this page</div>
    </div>;

    return (
        <AdminSidebar name="Admins">
            {isLoading ? (<PageLoader />) :
                <div className='adminPage'>
                    <div className='container'>
                        <div className='first'>
                            <div className='top-text'>Here's a list of your gamly admins</div>
                            <div className='top-button'>
                                <button className='button' onClick={AddAdmin}><BiPlus className="icon" /> <span>Add Admin</span></button>
                            </div>
                        </div>


                        <section className='AdminTableWrapper'>
                            <div className='firstSession'>
                                <div className='input'>
                                    <div class="input-group flex-nowrap">
                                        <span class="input-group-text"><BiSearch className="icon" style={{ color: 'var(--grayColor)' }} /></span>
                                        <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping"
                                            onChange={(e) => setSearch(e.target.value)} value={search}
                                        />
                                    </div>
                                </div>

                                <div className='RefreshComp'>
                                    <button onClick={() => setSearch(" ")}><BiRefresh className='r-icon' /> <span>Refresh</span></button>
                                </div>
                            </div>

                            <div className="AdminTable">
                                <div className='header'>Admin <span> 1000 admins </span></div>
                                <div className='tableWrapper'>
                                    <div className="scroll-container">
                                        <table className="table scroll">
                                            <thead>
                                                <tr >
                                                    <td>Name</td>
                                                    <td>Role <span><BsQuestionCircle className="icon" /> </span></td>
                                                    <td>Email Address</td>
                                                    <td>Access</td>
                                                    <td>Date added</td>
                                                    <td></td>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {adminData?.adminList?.slice ? (
                                                    <>
                                                        {adminData?.adminList?.filter((item) => {
                                                            return search?.toLowerCase() === "" ? item :
                                                                (item?.email?.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase()))

                                                        })?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                                            return (
                                                                <tr key={data?.id}>
                                                                    <td width="25%" className=''>
                                                                        <div className='imageName'>
                                                                            {data?.image ? (
                                                                                <><img src={data?.image} alt="" /> </>
                                                                            ) : (
                                                                                <>
                                                                                    <span class="imageSpan" style={{ marginRight: "8px" }}>{data?.name?.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')}</span>
                                                                                </>
                                                                            )}
                                                                            {data?.name}
                                                                        </div>
                                                                    </td>
                                                                    <td width="10%" className='grayColor '>{data?.role}</td>
                                                                    <td width="20%" className='grayColor'>{data?.email}</td>
                                                                    <td width="25%" className='grayColor'>{data?.role === "Admin" ?
                                                                        <div className='left'>
                                                                            <span className='green'><img src={pointGreen} alt="" className='access' /> Users</span>
                                                                            <span className='yellow'><img src={pointYellow} alt="" className='access' /> Creators</span>
                                                                        </div>
                                                                        :
                                                                        <div className='right'>
                                                                            <span className='yellow'><img src={pointYellow} alt="" /> Creators</span>
                                                                        </div>
                                                                    }

                                                                    </td>
                                                                    <td width="15%" className='grayColor'>2023-06-21</td>
                                                                    <td width="10%" className='tableAction'>
                                                                        <button onClick={() => deleteContent(data, index)}><img src={deleteImg} alt="" className='' /></button>
                                                                        <button onClick={() => changeContent(data, index)}><img src={editImg} alt="" className='' /></button>
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
                            </div>

                        </section>

                    </div>

                    {alerttoggle && (
                        <AlertToggle topic="Edit Admin?" text="Are you sure you want to edit this admin ?"
                            closeAlertToggle={() => setalerttoggle(false)} performAction={formToggle} subText="edit"
                        />
                    )}

                    {openForm && (
                        <div className='popupContainer'>
                            <div className='formpopupBody' onClick={(e) => e.stopPropagation()}>

                                <div className='heading'>
                                    <div className='text'>Edit Admin</div>
                                    <button onClick={() => setopenForm(false)}>
                                        <img src={cancelImg} alt="" />
                                    </button>
                                </div>

                                <form onSubmit={handleEditForm} className='formWrapper'>
                                    <div className='formInput'>
                                        <div className='inputfield'>
                                            <label>Name</label>
                                            <input type="text"
                                                name="title" value={popupcontent.name}
                                                onChange={(e) => {
                                                    setPopupcontent({ ...popupcontent, name: e.target.value });
                                                }}

                                            />
                                            {errors ? <span className='error'> {errors.name}</span> : ""}
                                        </div>

                                        <div className='inputfield'>
                                            <label>Email</label>
                                            <input type="email"
                                                name="email" value={popupcontent.email}
                                                onChange={(e) => {
                                                    setPopupcontent({ ...popupcontent, email: e.target.value });
                                                }}
                                            />
                                            {errors ? <span className='error'> {errors.email}</span> : ""}
                                        </div>

                                        <div className='inputfield'>
                                            <label>Role</label>
                                            <div className='selectDropdown'>
                                                <div className='dropdown-btn' onChange={(e) => {
                                                    setPopupcontent({ ...popupcontent, role: e.target.value });
                                                }} onClick={() => setSelectRoleActive(!selectRoleActive)}>
                                                    {roleSelected} <span><MdOutlineKeyboardArrowDown className='icon' /></span>
                                                </div>
                                                {selectRoleActive && (
                                                    <div className='dropdown-content'>
                                                        {roleData?.map((option) => (
                                                            <div className="dropdown-item"
                                                                onClick={(e) => {
                                                                    setRoleSelected(option);
                                                                    setSelectRoleActive(false)
                                                                }}
                                                            >
                                                                {option}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className='inputfield'>
                                            <label>Access</label>
                                            <div className='selectDropdown'>
                                                <div className='dropdown-btn' onClick={() => setSelectAccessActive(!selectAccessActive)}>
                                                    {accessSelected === "Both" ? <div className="">
                                                        <span className='green'><img src={pointGreen} alt="" /> Users</span>
                                                        <span className='yellow'><img src={pointYellow} alt="" /> Creators</span>
                                                    </div>
                                                        : accessSelected === "Users" ? <div className=''>
                                                            <span className='green'><img src={pointGreen} alt="" /> Users</span>
                                                        </div>
                                                            : <div>
                                                                <span className='yellow'><img src={pointYellow} alt="" /> Creators</span>
                                                            </div>
                                                    }
                                                    <span><MdOutlineKeyboardArrowDown className='icon' /></span>
                                                </div>
                                                {selectAccessActive && (
                                                    <div className='dropdown-content'>
                                                        {accessData?.map((option) => (
                                                            <div className="dropdown-item"
                                                                onClick={(e) => {
                                                                    setaccessSelected(option);
                                                                    setSelectAccessActive(false)
                                                                }}
                                                            >
                                                                {option}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                            </div>

                                        </div>
                                        <div className='inputfield'>
                                            <label>Password</label>
                                            <div className="inner-addon left-addon">
                                                <input type={passwordShown ? "text" : "password"} placeholder="Password" value={popupcontent.password} name="password"
                                                    onChange={(e) => {
                                                        setPopupcontent({ ...popupcontent, password: e.target.value });
                                                    }}
                                                />
                                                <img src={Passwordeye} alt="" onClick={togglePassword} className="show-icon" />
                                            </div>

                                            {errors ? <span className='error'> {errors.password}</span> : ""}

                                        </div>
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
                        <AlertToggle topic="Delete Admin?" text="Are you sure you want to delete this admin ? "
                            closeAlertToggle={() => setDeletetoggle(false)} performAction={() => deleteAdmin(popupcontent.id)} subText="delete"
                        />

                    )}

                    {/* main form to add admin code is down here */}
                    {addAdminForm && (
                        <div className='popupContainer'>
                            <div className='formpopupBody' onClick={(e) => e.stopPropagation()}>
                                <AddAdminPage setAddAdminForm={setAddAdminForm} />
                            </div>
                        </div>
                    )}
                </div>
            }
        </AdminSidebar>
    )
}

export default Admin