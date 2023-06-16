import React from 'react';
import "./Navbar.css";
import { BiSearch } from 'react-icons/bi';
import { IoMdPerson } from "react-icons/io"
import { MdOutlineSettings, MdOutlineNotificationsNone } from "react-icons/md"
import { useSelector } from 'react-redux';
import Panel from '../Panel/Panel';


function Navbar({ name }) {
    // dark theme and light theme
    // const switchTheme = () => {
    //     const newTheme = theme === "light" ? "dark" : "light"
    //     setTheme(newTheme)
    // }

    const loggedinUser = useSelector((state) => state.loggedInUserReducer);
    const profileData = loggedinUser


    return (
        <div className='Navbar' >
            <div className='container'>
                <div className='navContent'>
                    <div className="left">
                        <div className="name"> {name}</div>
                        <Panel />
                    </div>
                    <div className='right'>
                        <div className='inputContainer' >
                            <BiSearch className="icon" />
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>

                        <div className='switchColor'>
                            <span className="navlink">
                                <MdOutlineSettings className='icon' />

                            </span>
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