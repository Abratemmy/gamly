import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import moment from 'moment'
import { getSINGLEGAMETRICS } from '../../../Common/REDUX/ACTION/gameMetricsAction';
import HostSidebar from '../../../Common/PanelSIDEBAR/HostSidebar';
import { IoIosArrowForward } from 'react-icons/io';
import dateImg from '../../../../Assets/date.svg'
import downArrow from '../../../../Assets/downarr.svg'
import "./ViewMore.scss"
import HostPercentage from '../../../Common/pageCard/HostPercentage';
import ProgressBar from '../../../Common/RECHART/ProgressBar';
import GameMetricsCard1 from '../../../Common/pageCard/gameMetricsCard1';
import GameMetricsProgressCard from '../../../Common/pageCard/gameMetricsCard2';

function ViewMore() {
    const { id } = useParams();
    const dispatch = useDispatch()

    const prevMonth = moment().subtract(1, "month").format('MMMM')
    const prevMonthfirstDay = moment(prevMonth + "-01").format("MMMM, DD");
    // Subtract 1 day to get the end of the previous month

    const percentageData = {
        previousMonthTotal: 5000,
        currentMonthTotal: 6000,
        previousContestedTotal: 4500,
        currentContestedTotal: 4000
    }

    const progressBarData = {
        lastMonthhosted: 120000,
        currentMonthhosted: 150000,
        lastMonthContested: 170000,
        currentMonthContested: 180000
    }

    const { gamemetrics } = useSelector((state) => state.gameMetricsReducer);
    console.log("gamemetrics", gamemetrics)


    // const pageCount = Math.ceil(getAllCreators?.length / newsPerPage);
    // const progressWidth = ((newsVisited + newsPerPage) / getAllCreators?.length) * 100

    useEffect(() => {
        dispatch(getSINGLEGAMETRICS(id))
    }, [id, dispatch]);

    return (
        <HostSidebar name="Game Metrics">
            <div className='singleGameMetric allPages'>
                <div className='container'>
                    <div className='topContent'>
                        <NavLink to="/game_metrics" className='left'>Game Metrics</NavLink>
                        <span className='iconspan'><IoIosArrowForward className="icon" /> </span>
                        <span className='right'>Games and Contest Hosted</span>
                    </div>

                    <div className='firstSession'>
                        <div className='left'>
                            <div className='name'>{gamemetrics?.name}</div>
                            <div className='id'>ID: {gamemetrics?.id}345</div>
                            <div className='title'>Games and Contest Hosted</div>
                        </div>

                        <div className='right'>
                            <div className='top'>
                                <div className='r-Left'>Contest</div>
                                <div className='date'>
                                    {prevMonthfirstDay} - {moment().format("MMMM, DD YYYY")}
                                    <span><img src={dateImg} alt="" /> </span>
                                </div>
                            </div>

                            <div className='content'>
                                <div className='c-left'>
                                    <div className='title'>Total</div>
                                    <div className='total'>120, 000</div>
                                </div>

                                <div className='c-right'>
                                    <div className='title'>Top Contest
                                        <div>Avg. <span>$1,900</span></div>
                                    </div>
                                    <div className='total'>$16, 500</div>
                                    <div className='text'>
                                        <span>2% </span>Decrease from Previous month
                                        <span> <img src={downArrow} alt="" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='PercentageSession' style={{ marginTop: '40px' }}>
                        <div className='row gy-5 gx-5'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <HostPercentage leftText="Games Hosted" rightText="Games Hosted" prevMonth={prevMonth}
                                    previousMonthTotal={percentageData.previousMonthTotal} currentMonthTotal={percentageData.currentMonthTotal}
                                />
                            </div>

                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <HostPercentage leftText="Games contested" rightText="Games contested rate" prevMonth={prevMonth}
                                    previousMonthTotal={percentageData.previousContestedTotal} currentMonthTotal={percentageData.currentContestedTotal}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="recharts" style={{ margin: '50px 0px' }}>
                        <div className='Graph' style={{ padding: "10px 0px" }}>
                            <div className='row gx-5 gy-5'>
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <ProgressBar lastMonthTotal={progressBarData?.lastMonthhosted} currentMonthTotal={progressBarData?.currentMonthhosted}
                                        progressTitle='Games Hosted'
                                    />
                                </div>

                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <ProgressBar lastMonthTotal={progressBarData?.lastMonthContested} currentMonthTotal={progressBarData?.currentMonthContested}
                                        progressTitle='Games Contested'
                                    />
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className='gameMetricsPercentageCard' style={{ paddingBottom: '80px' }}>
                        <div className='row gx-5 gy-5'>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <GameMetricsCard1 />
                            </div>

                            <div className='col-lg-6 col-md-12 col-sm-12'>
                                <GameMetricsProgressCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HostSidebar>
    )
}

export default ViewMore