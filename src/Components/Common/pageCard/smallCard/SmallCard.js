import React, { useState } from 'react';
import uparrow from "../../../../Assets/uparr.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './smallCard.scss'

function SmallCard({ smallCardTitle, smCardDropdown, setSmCardDropdown, Total }) {
    // const [dropdown, setDropdown] = useState(false);
    const openDropdown = () => {
        setSmCardDropdown(!smCardDropdown)
    }
    const [selected, setSelected] = useState("1hr");
    const handleClick = (event) => {
        setSelected(event.target.id);
        setSmCardDropdown(false)
    }
    return (
        <div>
            <div className='percentageCard smCard'>
                <div className='cardWrapper'>
                    <div className='cardContent rightContent'>
                        <div className='topHeader'>
                            <div className='text'>{smallCardTitle}</div>
                            <button className='dropdown' onClick={openDropdown}>{selected === "24h" ? "Last 24 hours" : selected === "1hr" ? "Last 1 hour" :
                                selected === "24m" ? "Last 24 min" : selected === "30m" ? "Last 30 min" : selected === "10m" ? "Last 10 min" :
                                    "Last 5 min"
                            } <span><MdOutlineKeyboardArrowDown className='icon' /> </span></button>
                            {smCardDropdown && (
                                <div className='hCardToggle'>
                                    <div className={selected === "1" ? "drop-active list" : "list"} onClick={handleClick}
                                        id={"24h"}>
                                        Last 24 Hrs
                                    </div>
                                    <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                                        id={"1h"}>
                                        Last 1 Hr
                                    </div>

                                    <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                                        id={"24m"}>
                                        Last 24 Min
                                    </div>

                                    <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                                        id={"30m"}>
                                        Last 30 Min
                                    </div>
                                    <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                                        id={"10m"}>
                                        Last 10 Min
                                    </div>
                                    <div className={selected === "2" ? "drop-active list" : "list"} onClick={handleClick}
                                        id={"5m"}>
                                        Last 5 min
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="SignupContent">
                            <div className='header'>{Total}</div>
                            <span>65% <img src={uparrow} alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallCard