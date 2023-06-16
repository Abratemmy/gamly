import React, { useState } from 'react';
import "./sidebar.css";
import { useNavigate, NavLink } from "react-router-dom";
import logo1 from "../../Assets/logo1.svg";
import logo2 from "../../Assets/logo2.svg"
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai"
import { MdOutlineKeyboardArrowRight, MdLogout, MdOutlineSettings } from "react-icons/md";
import { useDispatch } from 'react-redux';

function SIDEBAR({ children, sidebarData }) {
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
            <div className='InterfaceWeb'>
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
                        {sidebarData.map((item, index) => {
                            return (
                                <li onClick={handleClick} key={index}>
                                    <NavLink to={`/${item.link}`} exact className="sidebar-navlink " activeClassName="active">
                                        <span className="icon">{item.icon}</span><span className="text">{item.text}</span>
                                    </NavLink>
                                </li>
                            )
                        })}

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

export default SIDEBAR