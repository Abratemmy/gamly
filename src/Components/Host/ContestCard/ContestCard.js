import React from 'react';
import contestImg1 from '../../../Assets/contestImg1.svg';
import './ContestStyle.scss'

function ContestCard({ contestCardData, contestImg2, fullRow }) {
    return (
        <div className='contestWrapper'>
            <div className='row g-3'>
                {contestCardData && (
                    <>

                        {contestCardData?.map((contestCardData, index) => {
                            return (
                                <div className={fullRow === "true" ? 'col-lg-12 col-md-12 col-sm-12' : 'col-lg-4 col-md-6 col-sm-12'} key={index}>
                                    <div className='contestCard' >
                                        <div className='firstSession'>
                                            <div className='top'>
                                                <div className='absolute'><div className='absoluteText'>Mega Contest</div></div>
                                                <div className='partOne'>
                                                    <div className='left'>Prize pool <span>₹{contestCardData?.prizePool} Crore</span></div>
                                                    <div className='right'>
                                                        <div className='entry'>Entry</div>
                                                        <div className='number'>₹{contestCardData?.entryNo}</div>
                                                        <div className='entrys'>Upto {contestCardData?.entrys} entries</div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='partTwo'>
                                                <div className='left'>₹{contestCardData?.lakh} Lakh</div>
                                                <div className='middle'><img src={contestImg1} alt="" />
                                                    <span>61%</span>
                                                </div>
                                                <div className='right'>Guaranteed</div>
                                            </div>

                                            <div className='partThree'>1,00,000 spots</div>
                                        </div>
                                        <div className='secondSession'>
                                            <div className='absolute'><div className='absoluteText'>Percentage based distribution</div></div>
                                            <div className="partOne">
                                                <div className='left'>
                                                    {contestImg2 && (
                                                        <div className='image'>
                                                            <img src={contestImg2} alt="" />
                                                        </div>
                                                    )}

                                                    <div className='winner'>
                                                        No of Winners <span>{contestCardData?.winnerNumber}%</span>
                                                    </div>
                                                </div>
                                                <div className='right'>
                                                    <div className='image'>
                                                        <img src={contestImg1} alt="" />
                                                        <span>{contestCardData?.prizeDistribution}%</span>
                                                    </div>
                                                    <div className='distribution'>Total Distribution
                                                        <span>{contestCardData?.prizeDistributionName}%</span></div>
                                                </div>
                                            </div>

                                            <div className='partTwo'>
                                                <div className='partTwoContent'>
                                                    <div className='position'>1st <span>{contestCardData?.firstPrize}%</span></div>
                                                    <div className='position'>2nd <span>{contestCardData?.secondPrize}%</span></div>
                                                    <div className='position'>3rd <span>{contestCardData?.thirdPrize}%</span></div>
                                                </div>

                                            </div>

                                            <div className='partThree'>
                                                <div className='text'>{contestCardData?.prizeDistributionType}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
        </div>
    )
}

export default ContestCard