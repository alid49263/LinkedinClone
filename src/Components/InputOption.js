import React from 'react'
import './InputOption.css'
function InputOption({title,Icon,color}) {
    return (
        <div className="inputOption">
            {Icon &&<Icon style={{color:color}}/>}
            {title&&<h5>{title}</h5>}
        </div>
    )
}

export default InputOption
