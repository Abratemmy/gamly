import React from 'react';
import "./Navbar.css";
import { BiSearch } from 'react-icons/bi';
import { IoMdPerson } from "react-icons/io"
import { MdOutlineSettings, MdOutlineNotificationsNone } from "react-icons/md"
import { useSelector } from 'react-redux';
import PanelDropdown from '../../Components/PanelDropdown/panelDropdown';


function Navbar({ name, panelSelected, setPanelSelected, children }) {
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
                        <PanelDropdown panelSelected={panelSelected} setPanelSelected={setPanelSelected} />
                        <div className=''>{children}</div>
                    </div>
                    <div className='right'>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text"><BiSearch className="icon" /></span>
                            <input type="text" class="form-control" placeholder="Type here..." aria-label="Username" aria-describedby="addon-wrapping" />
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