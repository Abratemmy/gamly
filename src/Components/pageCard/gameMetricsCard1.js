import React from 'react';
import Duration from '../Duration/Duration';

function GameMetricsCard1() {

    return (
        <div>
            <div className='percentageCard'>
                <div className="cardWrapper">
                    <div className='cardContent gameMetricContent'>
                        <div className='top'>
                            <div className='avg'>Avg. <span>$ 15, 000</span></div>
                            <div className="dateCardWrapper">
                                <Duration />
                            </div>
                        </div>

                        <div className='contentWrapper gameMetricsWrapper'>
                            <div className='content content1'>
                                <div className='gameMetric_content'>
                                    <div className="gameCard card1"></div>
                                    <div className='text'>Kolkata Knight Riders</div>
                                </div>

                                <div className='versus'>VS</div>

                                <div className='gameMetric_content'>
                                    <div className="gameCard card2"></div>
                                    <div className='text'>Chennai Super Kings</div>
                                </div>
                            </div>


                            <div className='content content2'>
                                <div className='gameMetric_content2'>
                                    <div className="total">$100,000</div>
                                    <div className='subtotal'>total money earned</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameMetricsCard1