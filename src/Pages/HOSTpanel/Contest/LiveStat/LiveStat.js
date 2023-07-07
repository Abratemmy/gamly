import React from 'react';
import img1 from '../../../../Assets/livestatImg1.svg';
import img2 from '../../../../Assets/livestatImg2.svg';
import liveVersus from '../../../../Assets/liveVersus.svg'
import './LiveStat.scss'

function LiveStat() {
    const livestatData = [
        { date: '25-Jun-2023', firstPlayer: 'Kolkata Knight Riders', secondPlayer: 'Chennai Super Kings', totalContest: 58, totalUser: 74, totalMoney: 140 },
        { date: '25-Jun-2023', firstPlayer: 'Kolkata Knight Riders', secondPlayer: 'Chennai Super Kings', totalContest: 58, totalUser: 74, totalMoney: 140 },
        { date: '25-Jun-2023', firstPlayer: 'Kolkata Knight Riders', secondPlayer: 'Chennai Super Kings', totalContest: 58, totalUser: 74, totalMoney: 140 },
        { date: '25-Jun-2023', firstPlayer: 'Kolkata Knight Riders', secondPlayer: 'Chennai Super Kings', totalContest: 58, totalUser: 74, totalMoney: 140 },
        { date: '25-Jun-2023', firstPlayer: 'Kolkata Knight Riders', secondPlayer: 'Chennai Super Kings', totalContest: 58, totalUser: 74, totalMoney: 140 },
        { date: '25-Jun-2023', firstPlayer: 'Kolkata Knight Riders', secondPlayer: 'Chennai Super Kings', totalContest: 58, totalUser: 74, totalMoney: 140 }
    ]
    return (
        <div className='livestatWrapper'>
            <div className='row g-3'>
                {livestatData?.map((data, index) => {
                    return (
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='liveContent'>
                                <div className='date'>{data?.date}</div>
                                <div className='top'>
                                    <div className='left'>
                                        <img src={img1} alt="" />
                                        <div className='name'>{data?.firstPlayer}</div>
                                    </div>
                                    <div className='middle'>
                                        <img src={liveVersus} alt="" />
                                    </div>
                                    <div className='right'>
                                        <img src={img2} alt="" />
                                        <div className='name'>{data?.secondPlayer}</div>
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='live-ProgressBar'>
                                        <div className='title'>Total Contests filled</div>
                                        <div className='liveProgress'>
                                            <div className='number'>{data?.totalContest}</div>
                                            <div className='displayProgress'>
                                                <div className='progress-line decrease' data-percent="100%">
                                                    <span style={{ width: `${data?.totalContest}%` }}></span>
                                                </div>
                                            </div>
                                            <div className='number'>100</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='live-ProgressBar'>
                                        <div className='title'>Total Users joined</div>
                                        <div className='liveProgress' style={{ position: 'relative', width: '100%' }}>
                                            <div className='number'>{data?.totalUser}</div>
                                            <div className='displayProgress '>
                                                <div className='progress-line decrease' data-percent="100%">
                                                    <span style={{ width: `${data?.totalUser}%` }}></span>
                                                </div>
                                            </div>
                                            <div className='number'>100</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bottom'>
                                    <div className='title'>Total money earning</div>
                                    <div className='money'>₹{data?.totalMoney}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div >
        </div >
    )
}

export default LiveStat