import React from 'react'
import imageDownload from "../../../Assets/imageDownload.svg"

function PanCard({ kycData }) {
    return (
        <div>
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

                </div>

            </div>
        </div>
    )
}

export default PanCard