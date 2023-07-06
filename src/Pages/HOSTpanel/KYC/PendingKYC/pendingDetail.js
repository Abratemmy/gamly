import React, { useState, useEffect } from 'react'
import HostSidebar from '../../../../Components/PanelSIDEBAR/HostSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import { getSINGLEKYC } from '../../../../Components/REDUX/ACTION/KYCAction';
import imageDownload from "../../../../Assets/imageDownload.svg";
import closeBtn from '../../../../Assets/closebox.svg'
import { ProcessingMessage, SuccessMessage } from '../../../../Components/Message/Message';


// eslint-disable-next-line no-empty-pattern
function PendingKYCDetail({ }) {
    const { id } = useParams();
    const dispatch = useDispatch()

    const { kycData } = useSelector((state) => state.kycReducer);
    console.log("kycData", kycData)

    const [openApprove, setOpenApprove] = useState(false);

    const openApproveToggle = () => {
        setOpenApprove((prev) => !prev)
    }

    const [values, setValues] = useState({
        content: ''
    });
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value
        });
    };

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(() => {
            setLoading(true);
        }, 500)
        setTimeout(() => {
            setLoading(false);
            setOpenApprove(false);
            setSuccess(true)
        }, 1000)

        // setSuccess(true)
        // dispatch(createADMIN(values, setLoading, setSuccess, setFailure));
        console.log("submitted")
    }
    useEffect(() => {
        dispatch(getSINGLEKYC(id))
    }, [id, dispatch])

    return (
        <HostSidebar name="KYC">
            <div className='kycDetails KYC pendingKYCDetail'>
                <div className='container'>
                    <div className='detailTop'>
                        <NavLink to="/kyc" className='left'>KYC</NavLink>
                        <span className='iconspan'><IoIosArrowForward className="icon" /> </span>
                        <NavLink to="/kyc" className='left' style={{ color: '#2D3748' }}>Pending Verification</NavLink>
                        <span className='iconspan'><IoIosArrowForward className="icon" /> </span>
                        <span className='right'>Detail</span>
                    </div>

                    <div className='profileDetail'>
                        {kycData?.name}
                        <span>@{kycData?.username}</span>
                    </div>

                    <div className='AccountDetails'>
                        <div className='header'><span className='title'>Bank Account</span></div>
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

                        <div className='content'>
                            <div className='left'>
                                <label>State</label>
                                <div className='inputText'> <div className='input'>{kycData?.address?.city}</div></div>
                            </div>
                            <div className='right'>
                                <label>Status</label>
                                <div className='inputText '><div className='input greenColorInput'>Approved</div></div>
                            </div>
                        </div>

                        <div className='content'>
                            <div className='left'>
                                <label>Status (Third Party API)</label>
                                <div className='inputText'> <div className='input greenColorInput'>Verified</div></div>
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

                    <div className='AccountDetails'>
                        <div className='header'><span className='title'>Pan Card</span></div>
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
                                <label>Requested Date</label>
                                <div className='inputText'> <div className='input'>18/09/2023</div></div>
                            </div>
                            <div className='right'>
                                <label>Status</label>
                                <div className='inputText'> <div className='input greenColorInput'>Approved</div></div>
                            </div>
                        </div>
                        <div className='content'>
                            <div className='left'>
                                <div className='inputImage'>
                                    <img src={imageDownload} alt="" />
                                </div>
                            </div>

                            <div className='right'>
                                <div className='textareaWrapper'>
                                    <label>Approval Message</label>
                                    <textarea className='textarea' placeholder="Write your message" rows={10} ></textarea>
                                </div>

                                <div className='actionButton'>
                                    <button className='button approve' onClick={openApproveToggle}>Approve</button>
                                    <button className='button decline'>Decline</button>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

                {openApprove && (
                    <div className='popupContainer'>
                        <div className='ApprovalBody' onClick={(e) => e.stopPropagation()}>
                            <div className='top'>
                                <div className='title'>Approval Comment </div>
                                <div className='closeBtn'>
                                    <img src={closeBtn} alt="" onClick={() => setOpenApprove(false)} />

                                </div>
                            </div>

                            <form className='form' onSubmit={handleSubmit}>
                                <label>Description</label>
                                <textarea rows={6} placeholder='Comment' value={values.content} name="content" onChange={handleChange}></textarea>

                                <div className='submitButton'>
                                    <button className='submitBtn'>Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {loading && (
                    <ProcessingMessage message="Processing" />
                )}

                {success && (
                    <SuccessMessage message="Data submitted successfully" handleClose={() => setSuccess((prev) => !prev)} />
                )}




            </div>
        </HostSidebar>
    )
}

export default PendingKYCDetail