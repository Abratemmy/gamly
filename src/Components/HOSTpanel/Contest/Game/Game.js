import React from 'react';
import './Game.scss';
import Versus from '../../../../Assets/liveVersus.svg'

function Game() {
    const gameData = [
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'present' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'present' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'present' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'present' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'present' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'present' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'past' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'past' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'past' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'past' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'past' },
        { game1: "MI", game2: 'SRH', title: "Indian Premier  League ", days: 3, pastGame: 'past' }

    ]
    return (
        <div className='gameWrapper'>
            <div className='container'>
                <div className='row g-5'>
                    {gameData?.map((data, index) => {
                        return (
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='card'>
                                    <div className='title'>{data?.title}</div>
                                    <div className='player'>
                                        <div className='left'>
                                            <div className='color'>.</div>
                                            <div className='name'>{data?.game1}</div>
                                        </div>

                                        <div className='middle'><img src={Versus} alt="" /> </div>

                                        <div className='right'>
                                            <div className='color'>.</div>
                                            <div className='name'>{data?.game2}</div>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '45px' }}>
                                        {data?.pastGame === "present" ? <div className='gameDays'>{data?.days} Days</div>
                                            :
                                            <div className='gameDays redBg'>{data?.days} Days</div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Game