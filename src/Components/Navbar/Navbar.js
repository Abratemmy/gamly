import React from 'react';
import "./Navbar.css";
import { BiSearch } from 'react-icons/bi';
import { IoMdPerson } from "react-icons/io"
import { MdOutlineSettings, MdOutlineNotificationsNone } from "react-icons/md"
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Navbar({ name }) {

    const loggedinUser = useSelector((state) => state.loggedInUserReducer);
    const profileData = loggedinUser
    return (
        <div className='Navbar'>
            <div className='container'>
                <div className='navContent'>
                    <div className="left">
                        <div className="name"> {name}</div>
                        <select name="panel" id="panel">
                            <option value="volvo">Admin</option>
                            <option value="saab"><NavLink to="/host">host</NavLink> </option>
                            <option value="mercedes">User</option>
                        </select>
                    </div>
                    <div className='right'>
                        <div className='inputContainer' >
                            <BiSearch className="icon" />
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>

                        <div className='nav-link'>
                            <NavLink to="/settings" className="navlink"><MdOutlineSettings className='icon' /> </NavLink>
                        </div>

                        <div className='notification'>
                            <MdOutlineNotificationsNone className="icon" />
                        </div>

                        <div className='profile'>
                            <div className='imageSession'>
                                {profileData?.profilePicture ? (<div className='show-Profileimage'>
                                    <img src={profileData.profilePicture} alt="image23" />
                                </div>) : (
                                    <div className='image-session'>
                                        <IoMdPerson className='icon' />
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar