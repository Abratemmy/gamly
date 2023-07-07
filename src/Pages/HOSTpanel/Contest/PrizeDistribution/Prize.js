import React from 'react'
import ContestCard from '../../../../Components/ContestCard/ContestCard'
import './Prize.scss';
import contestImg2 from '../../../../Assets/contestImg2.svg'
function Prize() {
    const contestCardData = [
        { winner: 50, distribution: 80 },
        { winner: 50, distribution: 80 },
        { winner: 50, distribution: 80 },
        { winner: 50, distribution: 80 },
        { winner: 50, distribution: 80 },
        { winner: 50, distribution: 80 },
    ]
    return (
        <div className='prizeDistribution'>
            <ContestCard contestCardData={contestCardData} contestImg2={contestImg2} />
        </div>
    )
}

export default Prize