import React from 'react';
import uparrow from "../../Assets/uparr.svg";
import downarrow from "../../Assets/downarr.svg";
import './TopCard.scss'

function TopCard({ topCard, cardName }) {
    return (
        <div style={{ width: '100%', overflowX: 'auto' }}>
            <div className='topCard'>
                <div className='header'>{cardName}</div>

                <div className='content'>
                    {topCard.map((item, i) => {
                        return (
                            <div className='month' key={i}>
                                <div className='subtitle'><span>{item?.subtitle}</span>
                                    <span className='avg'>
                                        {item?.avg ? <>Avg. <span>${item?.avg}</span></> : ""}
                                    </span>
                                </div>
                                <div className='amount'>$ {item?.amount.toLocaleString('en')}</div>
                                <div className='checkPercentage'>
                                    {item?.span >= 5 ? (
                                        <div className='text'>
                                            <span className='increase'>{item?.span}%</span> Decrease From Previous month <img src={uparrow} alt="" />
                                        </div>
                                    ) : (item?.span >= 1) ? (<div className='text'>
                                        <span className="decrease" >{item?.span}%</span> Decrease From Previous month <img src={downarrow} alt="" />
                                    </div>) : ""}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default TopCard