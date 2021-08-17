import React from 'react'
import Blog from './Blog';
import SideBar from './SideBar';
import "./Home.css"
function Home() {
    return (
        <div className="Home-Page">
            <div><Blog/></div>
            <div className='Sidebar'><SideBar /></div> 
        </div>
    )
}

export default Home
