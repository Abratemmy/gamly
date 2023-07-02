import React from 'react'

function TableProgressBar({ data, newsPerPage, progressWidth }) {
    return (
        <div>
            {
                data?.length <= newsPerPage ? (
                    <div className='tableProgressBar'>
                        <div className='displayProgress'>
                            <div className='progress-line decrease' data-percent="100%">
                                <span style={{ width: "100%" }}></span>
                            </div>
                        </div>
                    </div>
                ) : <div className='tableProgressBar'>
                    <div className='displayProgress'>
                        <div className='progress-line decrease' data-percent="90%">
                            <span style={{ width: `${progressWidth}%` }}></span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default TableProgressBar