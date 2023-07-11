import React from 'react';
import pointGreen from '../../Assets/pointGreen.svg';

function RightSidebar({ popupcontent, onClick, withdrawalStatus }) {
    return (
        <div className='withdrwal-RightSidebar'>

            <div className='header'>
                <div className='left'>
                    <div className='withdrawal'>Withdrawal</div>
                    <div className='money'>$5,000.00</div>
                    <div className='text'> GAA Football</div>
                    <div className='subText'>Adams County, ND	</div>
                </div>

                <div className="closeButton">
                    <button onClick={onClick}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4141 9.99985L17.7071 3.70685C17.8946 3.51934 17.9999 3.26503 17.9999 2.99985C17.9999 2.73467 17.8946 2.48036 17.7071 2.29285C17.5196 2.10534 17.2653 2 17.0001 2C16.7349 2 16.4806 2.10534 16.2931 2.29285L10.0001 8.58585L3.70709 2.29285C3.61425 2.2 3.50403 2.12636 3.38272 2.07611C3.26141 2.02586 3.1314 2 3.00009 2C2.86879 2 2.73877 2.02586 2.61747 2.07611C2.49616 2.12636 2.38594 2.2 2.29309 2.29285C2.10559 2.48036 2.00024 2.73467 2.00024 2.99985C2.00024 3.26503 2.10559 3.51934 2.29309 3.70685L8.58609 9.99985L2.29309 16.2928C2.10559 16.4804 2.00024 16.7347 2.00024 16.9998C2.00024 17.265 2.10559 17.5193 2.29309 17.7069C2.4806 17.8944 2.73492 17.9997 3.00009 17.9997C3.26527 17.9997 3.51959 17.8944 3.70709 17.7069L10.0001 11.4138L16.2931 17.7069C16.3857 17.8 16.4959 17.874 16.6172 17.9244C16.7386 17.9749 16.8687 18.0009 17.0001 18.0009C17.1315 18.0009 17.2616 17.9749 17.3829 17.9244C17.5043 17.874 17.6144 17.8 17.7071 17.7069C17.8 17.6141 17.8738 17.5039 17.9241 17.3825C17.9744 17.2612 18.0003 17.1312 18.0003 16.9998C18.0003 16.8685 17.9744 16.7385 17.9241 16.6172C17.8738 16.4958 17.8 16.3856 17.7071 16.2928L11.4141 9.99985Z" fill="#bebfc0" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='container cardContainer' style={{ margin: "20px 0px" }}>
                <div className='row g-3'>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='cardContent'>
                            <div className='title'>Withdrawal ID</div>
                            <div className='answer'>AOB23455</div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='cardContent'>
                            <div className='title'>Bank Name</div>
                            <div className='answer'>Netfonds Bank</div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='cardContent'>
                            <div className='title'>Account number</div>
                            <div className='answer'>{popupcontent?.phone}</div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='cardContent'>
                            <div className='title'>Beneficiary</div>
                            <div className='answer'>{popupcontent?.name}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container cardContainer'>
                <div className='rightContent'>
                    <div className="wrapper">
                        <div className='title'>Username</div>
                        <span >@{popupcontent?.username}</span>
                    </div>
                    <div className="wrapper">
                        <div className='title'>User email</div>
                        <span >{popupcontent?.email}</span>
                    </div>
                    <div className="wrapper">
                        <div className='title'>Requested Date</div>
                        <span >18/09/2034</span>
                    </div>
                    <div className="wrapper">
                        <div className='title'>Approved Date</div>
                        <span >18/09/2025</span>
                    </div>
                    <div className="wrapper">
                        <div className='title'>Bank IFSC</div>
                        <span >CR-7205</span>
                    </div>
                    <div className="wrapper">
                        <div className='title'>Order ID</div>
                        <span >1234567</span>
                    </div>
                    <div className="wrapper">
                        <div className='title'>Mobilee Number</div>
                        <span >{popupcontent?.phone}</span>
                    </div>
                    <div className="wrapper">
                        <div className='title'>Payment Message</div>
                        <span >Not posted</span>
                    </div>
                    <div className="wrapper">
                        <div className='title'>Status</div>
                        <span ><img src={pointGreen} alt="" /> Approved</span>
                    </div>

                    <div className='ActionButton'>
                        <button className='approve'>Approve</button>
                        <button className='decline'>Decline</button>
                    </div>

                    <div className='WithdrawalStatus'>
                        <button className='w-btn' onClick={withdrawalStatus}>Withdrawal Stat</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default RightSidebar