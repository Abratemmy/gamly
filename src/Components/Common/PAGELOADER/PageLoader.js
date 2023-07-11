import React from 'react';
import loadingImg from '../../../Assets/loading.gif'
import './loading.scss'

function PageLoader() {
    return (
        <div>
            <div className='LoadingContainer'>
                <div className=' LoadingImage'>
                    <div className='gifImage'>
                        <img src={loadingImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageLoader