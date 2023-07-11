import React from 'react';
import './details.scss';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import PanCard from './PanCard';


function KYCDetail({ toggleState, setToggleState, kycData, backNavigate, navigateToPending }) {
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='kycDetails KYC allPages'>
            <div className='container'>
                <div className='detailTop'>
                    <NavLink to={`/${backNavigate}`} className='left'>KYC</NavLink>
                    <span className='iconspan'><IoIosArrowForward className="icon" /> </span>
                    <span className='right'>{toggleState === 1 ? "Bank Account" : "Pan Card"}</span>
                </div>

                <div className="bloc-tabs">
                    <div className="left">
                        <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Bank Account</div>
                        <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Pan Card</div>
                    </div>

                    <div className='pendingKycButton'>
                        <button onClick={navigateToPending}>Pending Kyc</button>
                    </div>
                </div>

                <div className={toggleState === 1 ? "tabContent active-tabContent" : "tabContent"}>
                    <div className='AccountDetails'>
                        <div className='content'>
                            <div className='left'>
                                <label>Full Name</label>
                                <div className='inputText'> <div className='input'>{kycData?.name}</div></div>
                            </div>
                            <div className='right'>
                                <label>Email</label>
                                <div className='inputText'> <div className='input'>{kycData?.email}</div></div>
                            </div>
                        </div>
                        <div className='content'>
                            <div className='left'>
                                <label>Account No</label>
                                <div className='inputText'> <div className='input'>012345678</div></div>
                            </div>
                            <div className='right'>
                                <label>IFSC code</label>
                                <div className='inputText'> <div className='input'>{kycData?.address?.zipcode}</div></div>
                            </div>
                        </div>
                        <div className='content'>
                            <div className='left'>
                                <label>Bank Name</label>
                                <div className='inputText'> <div className='input'>{kycData?.address?.street}</div></div>
                            </div>
                            <div className='right'>
                                <label>Bank Branch</label>
                                <div className='inputText'> <div className='input'>{kycData?.company?.name}</div></div>
                            </div>
                        </div>
                        {/* second design content */}

                        <div className='content'>
                            <div className='left'>
                                <div className='wrapper'>
                                    <label>State</label>
                                    <div className='inputText'> <div className='input'>{kycData?.address?.city}</div></div>
                                </div>

                                <div className='wrapper'>
                                    <label>Status (Third Party API)</label>
                                    <div className='inputText '><div className='input greenColorInput'>Verified</div></div>
                                </div>

                                <div className='wrapper textareaWrapper'>
                                    <label>Approval Message</label>
                                    <textarea className='textarea' placeholder="Write your message" rows={7} ></textarea>
                                </div>

                            </div>
                            <div className='right rightPdf'>
                                <div className='wrapper'>
                                    <Link
                                        to="http://fourminutebooks.com/wp-content/uploads/2016/06/Four-Minute-Books-The-31-Best-Motivational-Books-Ever-Written.pdf"
                                        download="Bank Account Statement"
                                        target="_blank"
                                        rel="noreferrer" className='pdfLink'
                                    >
                                        Bank Account Statement.pdf
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "tabContent active-tabContent" : "tabContent"}>
                    <PanCard kycData={kycData} />
                </div>
            </div>
        </div>
    )
}

export default KYCDetail