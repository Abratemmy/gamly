import React from 'react';
import pointGreen from '../../Assets/pointGreen.svg';

function OpenPopup({ onClick, popupcontent }) {
    return (
        <div className='openPopup'>
            <div className='image'>
                <svg onClick={onClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4141 9.99985L17.7071 3.70685C17.8946 3.51934 17.9999 3.26503 17.9999 2.99985C17.9999 2.73467 17.8946 2.48036 17.7071 2.29285C17.5196 2.10534 17.2653 2 17.0001 2C16.7349 2 16.4806 2.10534 16.2931 2.29285L10.0001 8.58585L3.70709 2.29285C3.61425 2.2 3.50403 2.12636 3.38272 2.07611C3.26141 2.02586 3.1314 2 3.00009 2C2.86879 2 2.73877 2.02586 2.61747 2.07611C2.49616 2.12636 2.38594 2.2 2.29309 2.29285C2.10559 2.48036 2.00024 2.73467 2.00024 2.99985C2.00024 3.26503 2.10559 3.51934 2.29309 3.70685L8.58609 9.99985L2.29309 16.2928C2.10559 16.4804 2.00024 16.7347 2.00024 16.9998C2.00024 17.265 2.10559 17.5193 2.29309 17.7069C2.4806 17.8944 2.73492 17.9997 3.00009 17.9997C3.26527 17.9997 3.51959 17.8944 3.70709 17.7069L10.0001 11.4138L16.2931 17.7069C16.3857 17.8 16.4959 17.874 16.6172 17.9244C16.7386 17.9749 16.8687 18.0009 17.0001 18.0009C17.1315 18.0009 17.2616 17.9749 17.3829 17.9244C17.5043 17.874 17.6144 17.8 17.7071 17.7069C17.8 17.6141 17.8738 17.5039 17.9241 17.3825C17.9744 17.2612 18.0003 17.1312 18.0003 16.9998C18.0003 16.8685 17.9744 16.7385 17.9241 16.6172C17.8738 16.4958 17.8 16.3856 17.7071 16.2928L11.4141 9.99985Z" fill="#000000" />
                </svg>
            </div>

            <div className='headerDetail'>
                <div className='subtitle'>Withdrawal Details</div>
                <div className='money'>NGN 1,000,000</div>
                <div className='text'>Lorem ipsum dolor sit amet consectetur. Pharetra dolor scelerisque vel et.</div>
            </div>

            <div className='popupCard'>
                <div className='cardContent'>
                    <div className='content'>
                        <div className='title'>Bank IFSC</div>
                        <div className='answer'>000085345662</div>
                    </div>
                    <div className='content'>
                        <div className='title'>Bank Branch</div>
                        <div className='answer'>000085345662</div>
                    </div>
                </div>

                <div className='cardContent'>
                    <div className='content'>
                        <div className='title'>Bank Name</div>
                        <div className='answer'>000085345662</div>
                    </div>
                    <div className='content'>
                        <div className='title'>Beneficiary</div>
                        <div className='answer'>{popupcontent?.name}</div>
                    </div>
                </div>
            </div>

            <div className='popupcontent'>
                <div className='content'>
                    <div className='title'>Requested Date</div>
                    <div className='answer'>20-Jan-2023</div>
                </div>

                <div className='content'>
                    <div className='title'>Approved Date</div>
                    <div className='answer'>05:58:06PM</div>
                </div>
                <div className='content'>
                    <div className='title'>Withdrawal ID</div>
                    <div className='answer'>123457687945</div>
                </div>

                <div className='content'>
                    <div className='title'>Order ID</div>
                    <div className='answer'>12547589673636</div>
                </div>
                <div className='content'>
                    <div className='title'>Account Number</div>
                    <div className='answer'>124357577685</div>
                </div>

                <div className='content'>
                    <div className='title'>User Name</div>
                    <div className='answer'>{popupcontent?.name}</div>
                </div>
                <div className='content'>
                    <div className='title'>User Email</div>
                    <div className='answer'>{popupcontent?.email}</div>
                </div>
                <div className='content'>
                    <div className='title'>Phone number</div>
                    <div className='answer'>{popupcontent?.phone}</div>
                </div>
                <div className='content'>
                    <div className='title'>Status</div>
                    <div className='answer'><img src={pointGreen} alt="" style={{ position: 'relative', top: '-1px', paddingRight: '6px' }} /> Approved</div>
                </div>
                <div className='content'>
                    <div className='title'>Admin comment</div>
                    <div className='answer approved'>Approved</div>
                </div>
                <div className='content'>
                    <div className='title'>Payment Gateway</div>
                    <div className='answer'>Message</div>
                </div>
            </div>
        </div>
    )
}

export default OpenPopup