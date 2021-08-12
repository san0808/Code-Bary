import React from 'react'
import './Header.css'


function Header() {

    return (
    <div className='Header'>
        
        <div className='Navigation'>
        <img src='public\Images\main-logo.png'/>
            <span className='Home'>Home</span>
            <span className='About'>About</span>
            {/* SearchBox */}
        </div>

    </div>
        
    )
}

export default Header
