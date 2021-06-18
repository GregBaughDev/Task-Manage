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

    onClick = (e) => {
        if(e.target.nodeName === "H4" || e.target.innerText === "Close"){
            this.toggleModal();
        }
        if(e.target.innerText === "Delete" && e.target.nodeName === "BUTTON"){
            e.target.parentNode.parentNode.remove();
            this.toggleModal();
        }
    };

    toggleModal = () => {
        this.setState(prevState => {
            return {
                isClicked: !prevState.isClicked,
            }
        })
    }

    render(){
        const cardClass = this.state.isClicked ? "modal-card-content" : "card";
        const divClass = this.state.isClicked ? "modal-card" : "no-modal";
        const descClass = this.state.isClicked ? "task-display" : "no-display";
        const buttonClass = this.state.isClicked ? "modal-button" : "no-display";
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
                                <div className="button-div">
                                    <button onClick={this.onClick} className={buttonClass}>Close</button>
                                    <button onClick={this.onClick} className={buttonClass}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </Draggable>
        )
    }
}

export default Card;