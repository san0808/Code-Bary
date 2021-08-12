import React from 'react'
import Blog from './Blog';
import SideBar from './SideBar';
function Home() {
    return (
        <div>
            <div><Blog/></div>
            <div className='Sidebar'><SideBar /></div> 
        </div>
    )
}

export default Home
