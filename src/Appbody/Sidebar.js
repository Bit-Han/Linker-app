import React from 'react'
import './Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )



    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
                <Avatar className='sidebar__avatar' />
                <h2> Betty  Onoucha </h2>
                <h4>BeetyOnoucha@gmail.com</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed me</p>
                    <p className='sidebar__statNavbar'>2.543</p>
                </div>
                <div className='sidebar__stat'>
                    <p>view on the post </p>
                    <p className='sidebar__statNavbar'>2.454</p>
                </div>
            </div>
            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem('programming')}
                {recentItem('Software')}
                {recentItem('Computer markerting')}
                {recentItem('Content writing')}
            </div>
        </div>
    )
}

export default Sidebar