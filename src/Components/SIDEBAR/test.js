import React, { useState } from 'react';
import "./sidebar.css";
import { useNavigate, NavLink } from "react-router-dom";
import logo1 from "../../Assets/logo1.svg";
import logo2 from "../../Assets/logo2.svg"
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai"
import { BsPersonGear, BsGraphUp } from "react-icons/bs";
import { RiPagesLine, RiMoneyDollarBoxLine } from "react-icons/ri"
import { MdOutlineKeyboardArrowRight, MdLogout, MdDashboard, MdOutlineShoppingCartCheckout, MdOutlineSettings } from "react-icons/md";
import { useDispatch } from 'react-redux';

function AdminSidebar({ children, theme }) {
    // dark theme and light theme
    //dark mode finished


    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setTimeout(() => {
            navigate("/")
            setUser(null)
        }, 300)
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    return (
        <div>
            <div className='InterfaceWeb' data-theme={theme}>
                <input type="checkbox" id="interface-check" className="headerinput" />
                <div className={click ? "sidebar active" : "sidebar"}>

                    <ul>
                        <div className='sidebar-logo'>
                            <img src={logo1} alt="" />
                            <img src={logo2} alt="" />
                        </div>
                        <li>
                            <label htmlFor="interface-check" className="sidebarlabel">
                                <MdOutlineKeyboardArrowRight className="headericon" id="sidebar_btn" />
                            </label>
                        </li>
                        <li onClick={handleClick}>
                            <NavLink to='/' exact className="sidebar-navlink " activeClassName="active">
                                <span className="icon"><MdDashboard className="sidebar-icons" /></span><span className="text">Home</span>
                            </NavLink>
                        </li>

                        <li onClick={handleClick}>
                            <NavLink to='/admin' exact className="sidebar-navlink " activeClassName="active">
                                <span className="icon"><BsPersonGear className="sidebar-icons" /></span><span className="text">Admins</span>
                            </NavLink>

                        </li>
                        <li onClick={handleClick}>
                            <NavLink to='/revenue' exact className="sidebar-navlink " activeClassName="active">
                                <span className="icon"><RiMoneyDollarBoxLine className="sidebar-icons" /></span><span className="text">Revenue</span>
                            </NavLink>
                        </li>
                        <li onClick={handleClick}>
                            <NavLink to='/sales' exact className="sidebar-navlink " activeClassName="active">
                                <span className="icon"><MdOutlineShoppingCartCheckout className="sidebar-icons" /></span><span className="text">Sales </span>
                            </NavLink>
                        </li>

                        <li onClick={handleClick}>
                            <NavLink to='/payout' exact className="sidebar-navlink " activeClassName="active">
                                <span className="icon"><MdOutlineShoppingCartCheckout className="sidebar-icons" /></span><span className="text">Payout </span>
                            </NavLink>
                        </li>

                        <li onClick={handleClick}>
                            <NavLink to='/page_management' exact className="sidebar-navlink " activeClassName="active">
                                <span className="icon"><RiPagesLine className="sidebar-icons" /></span><span className="text">Page Management</span>
                            </NavLink>
                        </li>

                        <li onClick={handleClick}>
                            <NavLink to='/report' exact className="sidebar-navlink " activeClassName="active">
                                <span className="icon"><BsGraphUp className="sidebar-icons" /></span><span className="text">Report </span>
                            </NavLink>
                        </li>

                        <div className='down-sidebar'>
                            <li onClick={handleClick}>
                                <NavLink to='/settings' exact className="sidebar-navlink ">
                                    <span className="icon"><MdOutlineSettings className="sidebar-icons" /></span><span className="text">Settings </span>
                                </NavLink>
                            </li>

                            <li className="mobile-logout">
                                <button onClick={logout} exact className="sidebar-navlink sidebar-signout"
                                    style={{ border: "none", background: "transparent", textAlign: "left" }}
                                >
                                    <span className="icon"><MdLogout className="sidebar-icons" /></span><span className="text">Logout</span>
                                </button>
                            </li>
                        </div>


                    </ul>
                </div>

                <div className="interface-content">
                    <div className="mobileView">
                        <div className="nav-icon" onClick={handleClick}>
                            {click === true ? <div>
                                <span className="" onClick={handleClick} > <AiOutlineClose className="icon newnav-cancel" />   </span>
                            </div> : <div>
                                <span className="" onClick={handleClick} > <AiOutlineMenuFold className='icon' />   </span>
                            </div>
                            }
                        </div>
                    </div>

                    {children}
                </div>
            </div>



        </div >
    )
}

export default AdminSidebar