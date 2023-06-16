import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'

function Host({ theme, setTheme }) {
    return (
        <div>
            <Navbar name="Host" theme={theme} setTheme={setTheme} />
        </div>
    )
}

export default Host