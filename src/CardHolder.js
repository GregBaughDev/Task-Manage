import React, {Component} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Card from './Card';

class CardHolder extends Component{
    render(){
        return(
            <div className="holder-col">
                {(provided, snapshot) => {
                    <Droppable 
                        droppableId={this.props.column.id} 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}>
                            {this.props.tasks.map((task, index) => <Card key={task.id} task={task} index={index}/>)}
                            {provided.placeholder}
                        </Droppable>
                }}
            </div>
        )
    }
}

export default CardHolder;