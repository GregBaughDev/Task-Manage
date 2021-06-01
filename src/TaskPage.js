import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import CardHolder from './CardHolder';
import Card from './Card';
import logo from './img/TMlogo.png';
import './TaskPage.css';

function TaskPage(){
    const containers = ['A', 'B', 'C', 'D'];
    const [parent, setParent] = useState(null);
    const draggableMarkup = (
        <Card></Card>
    )
    return(
        <>
        <header>
            <img className="head-logo" alt="Task Manage logo" src={logo}></img>
            <h2>Tasks</h2>
            <div>
                <button>New Task</button>
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
                <div className="holder-main">
                    <DndContext onDragEnd={handleDragEnd}>
                        {parent === null ? draggableMarkup : null}
                        {containers.map((id) => (
                            <CardHolder key={id} id={id}>
                                <Card id="draggable" />
                                {parent === id ? draggableMarkup : 'Drop here'}
                            </CardHolder>
                        ))}
                    </DndContext>
                </div>
            </div>
        </div>
        </>
    );
    
    function handleDragEnd(event){
        const {over} = event;
        setParent(over ? over.id : null);
    }
}

export default TaskPage;