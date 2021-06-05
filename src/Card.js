import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import './Card.css';

class Card extends Component{
    render(){
        return(
            <>
            {(provided, snapshot) => (
                <Draggable className="card"
                draggableId={this.props.task.id}
                index={this.props.index}
                {...provided.draggableProps}
                {...provided.dragHangleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}>
                    <h4>{this.props.task.title}</h4>
                    <hr></hr>
                    <h5>{this.props.task.datetime}</h5>
                    <p>{this.props.task.user}</p>
            </Draggable>
            )}
            </>
        )
    }
}

export default Card;