import React from 'react';
import "./Navbar.css";
import { BiSearch } from 'react-icons/bi';
import { IoMdPerson, IoMdMoon } from "react-icons/io"
import { MdOutlineSettings, MdOutlineNotificationsNone } from "react-icons/md"
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Navbar({ name, theme, setTheme }) {
    const navigate = useNavigate()
    // dark theme and light theme
    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
    }

    const loggedinUser = useSelector((state) => state.loggedInUserReducer);
    const profileData = loggedinUser

    // select option for the 3 panels
    const panelOption = [
        { value: 'admin', text: "Admin" },
        { value: 'host', text: 'Host' },
        { value: 'user', text: 'User' }
    ]
    const optionChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "admin") {
            navigate("/")
        } else if (e.target.value === "host") {
            navigate("/host")
        } else if (e.target.value === "user") {
            navigate("/user")
        }
        else {
            navigate("/")
        }

    }
    return (
        <div className='Navbar' data-theme={theme}>
            <div className='container'>
                <div className='navContent'>
                    <div className="left">
                        <div className="name"> {name}</div>
                        <select className="" onChange={optionChange}>
                            {panelOption.map((item, index) => (
                                <option key={index} value={item.value}>{item.text}</option>
                            ))}
                        </select>
                    </div>
                    <div className='right'>
                        <div className='inputContainer' >
                            <BiSearch className="icon" />
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>

                        <div className='switchColor'>
                            <span onClick={switchTheme} className="navlink">
                                {theme === "light" ? <MdOutlineSettings className='icon' /> : <IoMdMoon className='icon' />}

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