import React, {useState} from 'react';
import {useDroppable} from '@dnd-kit/core';

function CardHolder(props){
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
    });
    const style = {
        color: isOver ? 'green' : undefined,
    }
    return(
        <div ref={setNodeRef} style={style} id={1} className="holder-col">
            {props.children}
        </div>
    )
}

export default CardHolder;