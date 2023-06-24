import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './panel.css';
import { useNavigate } from 'react-router-dom';

function PanelDropdown({ panelSelected, setPanelSelected }) {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('userDataToken'));

    const [dropdown, setDropdown] = useState(false);
    const openDropdown = () => {
        setDropdown(!dropdown)
    }
    // const [panelSelected, setPanelSelected] = useState("admin");
    const handleClick = (event) => {
        setPanelSelected(event.target.id);
        if (user) {
            if (event.target.id === "admin") {
                navigate('/dashboard')
            } else if (event.target.id === "creator") {
                navigate('/host_dashboard')

            } else if (event.target.id === 'user') {
                navigate('/user')

            } else {
                navigate('/')
            }
            setDropdown(false)
        } else {
            navigate('/')
        }
    }

    console.log('panelSelectedPanel', panelSelected)
    // useEffect(() => {
    //     setPanelSelected(panelSelected)
    // }, [panelSelected])
    return (
        <div>
            <div className='panel' onClick={openDropdown}>{panelSelected === "admin" ? "Admin" : panelSelected === "creator" ? "Creator" : "User"}
                <span><MdKeyboardArrowDown className="dropdownIcon" /></span>
                {dropdown && (
                    <div className='dropdowntoggle'>
                        <div className={panelSelected === "admin" ? "activePanel listPanel" : "listPanel"} onClick={handleClick}
                            id={"admin"}>
                            Admin
                        </div>
                        <div className={panelSelected === "creator" ? "activePanel listPanel" : "listPanel"} onClick={handleClick}
                            id={"creator"}>
                            Creator
                        </div>
                        <div className={panelSelected === "user" ? "activePanel listPanel" : "listPanel"} onClick={handleClick}
                            id={"user"}>
                            User
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default PanelDropdown