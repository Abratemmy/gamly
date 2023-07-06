import React, { useState, useEffect } from 'react';
import './details.scss';
import HostSidebar from '../../../../Components/PanelSIDEBAR/HostSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import { getSINGLEKYC } from '../../../../Components/REDUX/ACTION/KYCAction';
import PanCard from './PanCard';


function KYCDetail() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const { id } = useParams();
    const dispatch = useDispatch()

    const { kycData } = useSelector((state) => state.kycReducer);
    console.log("kycData", kycData)

    const navigate = useNavigate()
    const navigateToPending = () => {
        navigate('/kyc/pending_verification')
    }

    useEffect(() => {
        dispatch(getSINGLEKYC(id))
    }, [id, dispatch])
    return (
        <HostSidebar name="KYC" defaultToggleState={() => setToggleState(1)}>
            <div className='kycDetails KYC'>
                <div className='container'>
                    <div className='detailTop'>
                        <NavLink to="/kyc" className='left'>KYC</NavLink>
                        <span className='iconspan'><IoIosArrowForward className="icon" /> </span>
                        <span className='right'>Bank Account</span>
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
        </HostSidebar>
    )
}

export default KYCDetail