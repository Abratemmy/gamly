import React, { useState } from 'react';
import "./Contest.scss";
import HostSidebar from '../../Common/PanelSIDEBAR/HostSidebar';
import ContestPage from './CONTEST/ContestData';
import Prize from './PrizeDistribution/Prize';
import LiveStat from './LiveStat/LiveStat';
import CreatePrize from './PrizeDistribution/createPrize';
import Game from './Game/Game';
import CreateNewContest from './CONTEST/CreateContest';
import TimerComponent from './test';


function Contest() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <HostSidebar name="Contest" defaultToggleState={() => setToggleState(1)}>
            <div className='overallContest allPages'>
                <div className='container'>
                    {((toggleState === 1) || (toggleState === 2) || (toggleState === 3) || (toggleState === 4)) && (
                        <div className="bloc-tabs" style={{ paddingTop: "20px" }}>
                            <div className="left">
                                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Game</div>
                                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Contest</div>
                                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>prize Distribution</div>
                                <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>Live stat</div>
                            </div>

                            {toggleState === 2 && (
                                <div className="right">
                                    <button onClick={(() => setToggleState(6))}>Create New</button>
                                </div>
                            )}

                            {toggleState === 3 && (
                                <div className="right">
                                    <button onClick={(() => setToggleState(5))}>Create New</button>
                                </div>
                            )}
                        </div>
                    )}


                    {/* <TimerComponent /> */}
                    <div className={toggleState === 1 ? "tabContent active-tabContent" : "tabContent"}>
                        <Game />
                    </div>
                    <div className={toggleState === 2 ? "tabContent active-tabContent" : "tabContent"}>
                        <ContestPage />
                    </div>
                    <div className={toggleState === 3 ? "tabContent active-tabContent" : "tabContent"}>
                        <Prize />
                    </div>
                    <div className={toggleState === 4 ? "tabContent active-tabContent" : "tabContent"}>
                        <LiveStat />
                    </div>
                    <div className={toggleState === 5 ? "tabContent active-tabContent" : "tabContent"}>
                        <CreatePrize backButton={() => setToggleState(3)} />
                    </div>
                    <div className={toggleState === 6 ? "tabContent active-tabContent" : "tabContent"}>
                        <CreateNewContest backButton={() => setToggleState(2)} />
                    </div>
                </div>
            </div>
        </HostSidebar>
    )
}

export default Contest