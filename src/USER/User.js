import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

function User({ theme, setTheme }) {
    return (
        <div>
            <Navbar name="User" theme={theme} setTheme={setTheme} />
            <div className=''>Users</div>
        </div>
    )
}

export default User