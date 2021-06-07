import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import './Card.css';

class Card extends Component{
    constructor(){
        super();
        this.state = {
            isClicked: false,
        }
    }

    onClick = () => {
        if(!this.state.isClicked){
            this.setState(prevState => {
                return {
                    isClicked: !prevState.true,
                }
            })
            document.body.style.overflow = "hidden";
        }
    }

    render(){
        const cardClass = this.state.isClicked ? "modal-card-content" : "card";
        const divClass = this.state.isClicked ? "modal-card" : "no-modal";
        const descClass = this.state.isClicked ? "task-display" : "task-description";
        return(
            <Draggable draggableId={this.props.task.id}
                index={this.props.index}>
                    {(provided, snapshot) => (
                        <div className={divClass}>
                            <div className={cardClass} 
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            isDragging={snapshot.isDragging}>
                                <h4 onClick={this.onClick}>{this.props.task.title}</h4>
                                <hr></hr>
                                <h5>Date and time created: <br/>{this.props.task.datetime}</h5>
                                <p class={descClass}>{this.props.task.description}</p>
                                <p>User: {this.props.task.user}</p>
                            </div>
                        </div>
                    )}
                </Draggable>
        )
    }
}

export default Card;