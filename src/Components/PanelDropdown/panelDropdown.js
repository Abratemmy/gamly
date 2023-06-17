import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PanelDropdown() {
    const navigate = useNavigate()
    // select option for the 3 panels
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const panelOption = [
        { value: 'admin', text: "Admin" },
        { value: 'host', text: 'Host' },
        { value: 'user', text: 'User' }
    ]
    const optionChange = (e) => {
        console.log(e.target.value);
        if (user) {
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
        } else {
            navigate("/*")
        }


    }
    return (
        <div>
            <select className="" onChange={optionChange}>
                {panelOption.map((item, index) => (
                    <option key={index} value={item.value}>{item.text}</option>
                ))}
            </select>
        </div>
    )
}

export default PanelDropdown