import React, {Component} from 'react';
import initialData from './initial-data';
import {DragDropContext} from 'react-beautiful-dnd';
import CardHolder from './CardHolder';
import logo from './img/TMlogo.png';
import './TaskPage.css';

class TaskPage extends Component {
    state = initialData;

    onClick = (e) => {
        console.dir(e.target);
    }

    onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if(!destination){
            return;
        };

        if(destination.droppableId === source.droppableId &&
            destination.index === source.index){
                return;
            };

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if(start === finish){
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...start,
            taskIds: newTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            },
        };
        this.setState(newState);
        return;
    }
    //Moving card to another column
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };
        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        this.setState(newState);
    }

    render(){
        return(
            <>
            <header>
                <img className="head-logo" alt="Task Manage logo" src={logo}></img>
                <h2>Tasks</h2>
                <div>
                    <button onClick={this.onClick}>New Task</button>
                    <button>Log Out</button>
                </div>
            </header>
            <div id="outer">
                <div className="card-holder">
                    <div className="holder-header">
                        <div className="head-item">
                            <h3>Submitted</h3> 
                        </div>
                        <div className="head-item">
                            <h3>In Progress</h3>
                        </div>
                        <div className="head-item">
                            <h3>QA</h3> 
                        </div>
                        <div className="head-item">
                            <h3>Complete</h3>
                        </div> 
                    </div>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <div className="holder-main">
                                <>
                                    {this.state.columnOrder.map(columnId => {
                                        const column = this.state.columns[columnId];
                                        const tasks = column.taskIds.map(taskId => 
                                            this.state.tasks[taskId])
                                            return <CardHolder key={column.id} column={column} tasks={tasks} />;
                                    })}
                                </>
                        </div>
                    </DragDropContext>
                </div>
            </div>
            </>
        );
    }
}

export default TaskPage;