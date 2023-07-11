import React from 'react';
import successImg from "../../../Assets/success.svg";
import { IoIosClose } from 'react-icons/io';
import failedImg from "../../../Assets/failure.svg";
import "./Message.scss";
import alertTriangle from "../../../Assets/alertTriangle.svg";
import loadingImg from "../../../Assets/loading.gif"

export function SuccessMessage({ message, handleClose }) {
    return (
        <div className='popupContainer'>
            <div className='messageStatusBody' onClick={(e) => e.stopPropagation()}>
                <div className='successMessage'>
                    <div className='message'>
                        <img src={successImg} alt="" />
                        <span>{message} </span>
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
                <div className='successMessage failed'>
                    <div className='message'>
                        <img src={failedImg} alt="" />
                        <span>{message} </span>
                    </div>
                    <div onClick={handleClose}><IoIosClose className="icon" /></div>
                </div>
            </div>
        </div>
    )
}


export function ProcessingMessage({ message }) {
    return (
        <div className='popupContainer'>
            <div className=' processingMessage'>
                <div className='messageStatusBody' onClick={(e) => e.stopPropagation()}>
                    <div className='successMessage'>
                        <div className='message'>
                            <img src={successImg} alt="" />
                            <span>{message} </span>
                        </div>
                    </div>


                </div>
                <div className='gifImage'>
                    <img src={loadingImg} alt="" />
                </div>
            </div>
        </div>
    )
}


export function AlertToggle({ topic, text, closeAlertToggle, performAction, subText }) {
    return (
        <div>
            <div className='popupContainer' >
                <div className='alertBody' onClick={(e) => e.stopPropagation()}>
                    <div className='topSession'>
                        <span><img src={alertTriangle} alt="" className='icon' /> </span>
                        {topic}
                    </div>
                    <div className='editText'>{text}</div>
                    <div className='actionButton'>
                        <button onClick={closeAlertToggle}>No</button>
                        <button onClick={performAction}>Yes, {subText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}