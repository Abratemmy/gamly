import React, { useState } from 'react';
import moment from 'moment';

function GameMetricsProgressCard({ leftText, prevMonth, previousMonthTotalLeftHandSide, currentMonthTotalLeftHandSide }) {

    return (
        <div>
            <div className='percentageCard'>
                <div className="cardWrapper">
                    <div className='cardContent gameMetricsContent'>
                        <div className='top'>
                            <div className='megaText'>Mega Contest</div>
                        </div>

                        <div className='contentWrapper'>
                            <div className='content content1'>
                                <div className='c-top'>
                                    <div className='c-Content'>
                                        <div className='c-text'>Prize pool</div>
                                        <div className='redText'>₹1.5 Crore</div>
                                    </div>

                                    <div className='c-Content'>
                                        <div className='c-text'>Entry</div>
                                        <div className='blackText'>₹41</div>
                                        <div className="sub-c-text">Upto 5 Entries</div>
                                    </div>
                                </div>

                                <div className='gameProgressBarCard'>
                                    <div className='up'>(55%)<span>50</span></div>
                                    <div className='displayProgress gameMetric_progressBar'>
                                        <div className='text'>Spots fill</div>
                                        <div className='progress-line decrease' data-percent="100%">
                                            <span style={{ width: "60%" }}></span>
                                        </div>
                                        <div className='redtext'>995 spots left</div>

                                    </div>
                                    <div className='number'>1000</div>
                                </div>

                                <div className='gameProgressBarCard'>
                                    <div className='up'>(2%)<span>2K</span></div>
                                    <div className='displayProgress gameMetric_progressBar'>
                                        <div className='text'>Money Deposited</div>
                                        <div className='progress-line decrease' data-percent="100%">
                                            <span style={{ width: "60%" }}></span>
                                        </div>

                                    </div>
                                    <div className='number'>2Cr</div>
                                </div>
                            </div>


                            <div className='content content2'>
                                <div className='total'>$100,000</div>
                                <div className='subtotal'>Total earning</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameMetricsProgressCard