import React from 'react';
import "./Error.css"
import { NavLink } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import error from "../../Assets/403.svg"

function AccessDenied() {
    return (
        <div className='accessDenied'>
            <div className='container'>
                <div className='content'>
                    <div className='firstContent'>
                        <div className='sm-text'>402 error</div>
                        <div className='bg-text'>Access denied</div>
                        <div className='text'>You do not have permission to access the requested page.
                            <span>We suggest you go back to the dashboard</span>
                        </div>
                        <div className='nav-btn'><NavLink to="/dashboard" className="nav"><span><BsArrowLeft className='icon' /> </span>Back to Dashboard</NavLink></div>
                    </div>

                    <div className="secondContent">
                        <div className='image'>
                            <img src={error} alt="403 error" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AccessDenied