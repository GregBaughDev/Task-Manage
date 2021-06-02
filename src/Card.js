import React from 'react'
import './Card.css'

function Card(){
    return(
        <div draggable className="card">
            <h4>First Task</h4>
            <hr></hr>
            <h5>30.05.21 / 12:45</h5>
            <p>Greg</p>
        </div>
    )
}

export default Card;