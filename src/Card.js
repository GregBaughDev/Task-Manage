import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import './Card.css';

class Card extends Component{
    render(){
        return(
            <Draggable draggableId={this.props.task.id}
                index={this.props.index}>
                    {(provided, snapshot) => (
                        <div className="card" 
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}>
                            <h4>{this.props.task.title}</h4>
                            <hr></hr>
                            <h5>{this.props.task.datetime}</h5>
                            <p>{this.props.task.user}</p>
                        </div>
                    )}
                </Draggable>
        )
    }
}

export default Card;