import React from 'react'
import './Widget.css' 
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
function Widget() {
    const newsArticle=(heading,subtitle)=>{
        return(
            <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Coronavirus: India Updates","Top News - 1332 Readers")}
            {newsArticle("How to Ace Software Engineering Interviews","Software Engineering - 431 Readers")}
            {newsArticle("Tesla hits new high","Cars & Auto - 171 Readers")}
            {newsArticle("Bitcoin breaks $22k","Crypto - 432 Readers")}
        </div>
    )
}

export default Widget
