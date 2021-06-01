import React from 'react'
import {useDraggable} from '@dnd-kit/core';
import './Card.css'

function Card(props){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    });

    return(
        <div ref={setNodeRef} {...listeners} {...attributes} className="card">
            <h4>First Task</h4>
            <hr></hr>
            <h5>30.05.21 / 12:45</h5>
            <p>Greg</p>
            {props.children}
        </div>
    )
}

export default Card;