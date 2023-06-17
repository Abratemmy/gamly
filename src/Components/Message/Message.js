import React from 'react';
import successImg from "../../Assets/success.svg";
import { IoIosClose } from 'react-icons/io';
import failedImg from "../../Assets/failure.svg";
import "./Message.scss";

export function SuccessMessage({ message, handleClose }) {
    return (
        <div className='popupContainer'>
            <div className='messageStatusBody' onClick={(e) => e.stopPropagation()}>
                <div className='successMessage'>
                    <div className='message'>
                        <img src={successImg} alt="" />
                        <span>{message} downloaded successfullly</span>
                    </div>
                    <div onClick={handleClose}><IoIosClose className="icon" /></div>
                </div>
            </div>
        </div>
    )
}

export function FailedMessage({ message, handleClose }) {
    return (
        <div className='popupContainer'>
            <div className='messageStatusBody' onClick={(e) => e.stopPropagation()}>
                <div className='successMessage'>
                    <div className='message'>
                        <img src={failedImg} alt="" />
                        <span>{message} downloaded successfullly</span>
                    </div>
                    <div onClick={handleClose}><IoIosClose className="icon" /></div>
                </div>
            </div>
        </div>
    )
}
