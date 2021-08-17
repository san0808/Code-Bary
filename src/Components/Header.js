import React from 'react'
import './Header.css'


function Header() {

    return (
    <div className='Header'>
        
        <div className='Navigation'>
        
            <span className='Home'>Home</span>
            <span className='About'>About</span>
            <a className="Name">CODE-BARY</a>
            {/* <img  className="Logo"src='\Images\main-logo.png'/> */}
            {/* SearchBox */}
        </div>
        <div className="Topic-Bar">
            <span className='Coding'>Coding</span>
            <span className='Anime'>Anime</span>
            <span className='Books'>Books</span>
            <span className='Productive'>Productive</span>
        </div>
    </div>
        
    )
}

export default Header
