import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './Sidebar.css'
function Sidebar() {
    const recentItems=(topic)=>{
        return(
            <div className="sidebar__recentItems">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }
    const user = useSelector(selectUser);
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/w-qjCHPZbeXCQ-unsplash.jpg" alt=""/>
                <Avatar src={user.photoURL}>
                  {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">10</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">1330</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems("reactjs")}
                {recentItems("softwareEngineering")}
                {recentItems("design")}
                {recentItems("programming")}
                {recentItems("developer")}
            </div>
        </div>
    )
}

export default Sidebar
