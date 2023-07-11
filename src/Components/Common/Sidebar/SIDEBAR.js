import React, { useState } from 'react';
import "./sidebar.css";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import logo1 from "../../../Assets/logo1.svg";
import logo2 from "../../../Assets/logo2.svg"
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { AlertToggle } from '../../Common/Message/Message';

function SIDEBAR({ children, sidebarData, name, setPanelSelected, panelSelected, defaultToggleState }) {
    // dark theme and light theme
    //dark mode finished
    const { pathname } = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userDataToken')));
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [userlogout, setUserLogout] = useState(false)
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setTimeout(() => {
            navigate("/")
            setUser(null)
            localStorage.clear('userDataToken')
        }, 300)
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    return (
        <div>
            <div className='InterfaceWeb'>
                <input type="checkbox" id="interface-check" className="headerinput" />
                <div className={click ? "sidebarDesign active" : "sidebarDesign"}>
                    <ul>
                        <div className='sidebar-logo'>
                            <img src={logo1} alt="" />
                            <img src={logo2} alt="" />
                        </div>
                        {/* <li>
                            <label htmlFor="interface-check" className="sidebarlabel">
                                <MdOutlineKeyboardArrowRight className="headericon" id="sidebar_btn" />
                            </label>
                        </li> */}
                        <div style={{ paddingTop: "20px" }}>
                            {sidebarData.map((item, index) => {
                                return (
                                    <li onClick={handleClick} key={index}>
                                        <div onClick={defaultToggleState}>
                                            <NavLink
                                                to={`/${item.link}`}
                                                // to={pathname.includes(`/${item.link2}`) ? `/${item.link2}` : `/${item.link}`}
                                                isActive={() => [`/${item.link}`, `/${item.link2}`].includes(pathname)}
                                                className="sidebar-navlink " activeClassName="active">
                                                <span className="icon">{item.icon}</span><span className="text">{item.text}</span>
                                            </NavLink>
                                        </div>
                                    </li>
                                )
                            })}
                        </div>

                        <div className='down-sidebar'>
                            <li onClick={handleClick}>
                                <NavLink to='/settings' exact className="sidebar-navlink ">
                                    <span className="icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 14.75C8.93 14.75 7.25 13.07 7.25 11C7.25 8.93 8.93 7.25 11 7.25C13.07 7.25 14.75 8.93 14.75 11C14.75 13.07 13.07 14.75 11 14.75ZM11 8.75C9.76 8.75 8.75 9.76 8.75 11C8.75 12.24 9.76 13.25 11 13.25C12.24 13.25 13.25 12.24 13.25 11C13.25 9.76 12.24 8.75 11 8.75Z" fill="#292D32" />
                                            <path d="M14.21 21.1898C14 21.1898 13.79 21.1598 13.58 21.1098C12.96 20.9398 12.44 20.5498 12.11 19.9998L11.99 19.7998C11.4 18.7798 10.59 18.7798 10 19.7998L9.89 19.9898C9.56 20.5498 9.04 20.9498 8.42 21.1098C7.79 21.2798 7.14 21.1898 6.59 20.8598L4.87 19.8698C4.26 19.5198 3.82 18.9498 3.63 18.2598C3.45 17.5698 3.54 16.8598 3.89 16.2498C4.18 15.7398 4.26 15.2798 4.09 14.9898C3.92 14.6998 3.49 14.5298 2.9 14.5298C1.44 14.5298 0.25 13.3398 0.25 11.8798V10.1198C0.25 8.6598 1.44 7.4698 2.9 7.4698C3.49 7.4698 3.92 7.2998 4.09 7.0098C4.26 6.7198 4.19 6.2598 3.89 5.7498C3.54 5.1398 3.45 4.4198 3.63 3.7398C3.81 3.0498 4.25 2.4798 4.87 2.1298L6.6 1.1398C7.73 0.469798 9.22 0.859798 9.9 2.0098L10.02 2.2098C10.61 3.2298 11.42 3.2298 12.01 2.2098L12.12 2.0198C12.8 0.859798 14.29 0.469798 15.43 1.1498L17.15 2.1398C17.76 2.4898 18.2 3.0598 18.39 3.7498C18.57 4.4398 18.48 5.1498 18.13 5.7598C17.84 6.2698 17.76 6.7298 17.93 7.0198C18.1 7.3098 18.53 7.4798 19.12 7.4798C20.58 7.4798 21.77 8.6698 21.77 10.1298V11.8898C21.77 13.3498 20.58 14.5398 19.12 14.5398C18.53 14.5398 18.1 14.7098 17.93 14.9998C17.76 15.2898 17.83 15.7498 18.13 16.2598C18.48 16.8698 18.58 17.5898 18.39 18.2698C18.21 18.9598 17.77 19.5298 17.15 19.8798L15.42 20.8698C15.04 21.0798 14.63 21.1898 14.21 21.1898ZM11 17.4898C11.89 17.4898 12.72 18.0498 13.29 19.0398L13.4 19.2298C13.52 19.4398 13.72 19.5898 13.96 19.6498C14.2 19.7098 14.44 19.6798 14.64 19.5598L16.37 18.5598C16.63 18.4098 16.83 18.1598 16.91 17.8598C16.99 17.5598 16.95 17.2498 16.8 16.9898C16.23 16.0098 16.16 14.9998 16.6 14.2298C17.04 13.4598 17.95 13.0198 19.09 13.0198C19.73 13.0198 20.24 12.5098 20.24 11.8698V10.1098C20.24 9.4798 19.73 8.9598 19.09 8.9598C17.95 8.9598 17.04 8.5198 16.6 7.7498C16.16 6.9798 16.23 5.9698 16.8 4.9898C16.95 4.7298 16.99 4.4198 16.91 4.1198C16.83 3.8198 16.64 3.5798 16.38 3.4198L14.65 2.4298C14.22 2.1698 13.65 2.3198 13.39 2.7598L13.28 2.9498C12.71 3.9398 11.88 4.4998 10.99 4.4998C10.1 4.4998 9.27 3.9398 8.7 2.9498L8.59 2.7498C8.34 2.3298 7.78 2.1798 7.35 2.4298L5.62 3.4298C5.36 3.5798 5.16 3.8298 5.08 4.1298C5 4.4298 5.04 4.7398 5.19 4.9998C5.76 5.9798 5.83 6.9898 5.39 7.7598C4.95 8.5298 4.04 8.9698 2.9 8.9698C2.26 8.9698 1.75 9.4798 1.75 10.1198V11.8798C1.75 12.5098 2.26 13.0298 2.9 13.0298C4.04 13.0298 4.95 13.4698 5.39 14.2398C5.83 15.0098 5.76 16.0198 5.19 16.9998C5.04 17.2598 5 17.5698 5.08 17.8698C5.16 18.1698 5.35 18.4098 5.61 18.5698L7.34 19.5598C7.55 19.6898 7.8 19.7198 8.03 19.6598C8.27 19.5998 8.47 19.4398 8.6 19.2298L8.71 19.0398C9.28 18.0598 10.11 17.4898 11 17.4898Z" fill="#292D32" />
                                        </svg>
                                    </span><span className="text">Settings </span>
                                </NavLink>
                            </li>

                            <li className="mobile-logout">
                                <button onClick={() => setUserLogout(true)} exact className="sidebar-navlink "
                                    style={{ border: "none", background: "transparent", textAlign: "left" }}
                                >
                                    <span className="icon">
                                        <svg className='revenueSvg' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.0625 11.4375V13.1562C11.0625 13.6121 10.8814 14.0493 10.5591 14.3716C10.2368 14.6939 9.79959 14.875 9.34375 14.875H2.46875C2.01291 14.875 1.57574 14.6939 1.25341 14.3716C0.931082 14.0493 0.75 13.6121 0.75 13.1562V2.84375C0.75 2.38791 0.931082 1.95074 1.25341 1.62841C1.57574 1.30608 2.01291 1.125 2.46875 1.125H9C9.94918 1.125 11.0625 1.89457 11.0625 2.84375V4.5625M13.8125 11.4375L17.25 8L13.8125 4.5625M5.5625 8H16.5625" stroke="#2D3657" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span><span className="text">Logout</span>
                                </button>
                            </li>
                        </div>


                    </ul>
                </div>

                <div className="interface-content">
                    <Navbar name={name} setPanelSelected={setPanelSelected} panelSelected={panelSelected}>
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
                    </Navbar>
                    {children}
                </div>
            </div>

            {userlogout && (
                <AlertToggle topic="Log Out" text="Are you sure you want to log out of your account ?"
                    closeAlertToggle={() => setUserLogout(false)} performAction={logout} subText="logout"
                />
            )}

        </div >
    )
}

export default SIDEBAR