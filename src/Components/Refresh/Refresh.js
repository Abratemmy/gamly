import React from 'react';
import "./refresh.scss";
import { BiRefresh } from 'react-icons/bi';

function Refresh({ handleRefresh }) {
    return (
        <div className='RefreshComp'>
            <button onClick={handleRefresh}><BiRefresh className='r-icon' /> <span>Refresh</span></button>
        </div>
    )
}

export default Refresh