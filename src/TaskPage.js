import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import logo from './img/TMlogo.png';
import Card from './Card';
import './TaskPage.css';

function TaskPage(){
    const [ref, setRef] = useState(React.createRef());
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
                <DndContext>
                    <div className="holder-main">
                        <div ref={ref} id={1} className="holder-col">
                            <div draggable className="card">
                                <h4>First Task</h4>
                                <hr></hr>
                                <h5>30.05.21 / 12:45</h5>
                                <p>Greg</p>
                            </div>
                        </div>
                        <div className="holder-col">
                            
                        </div>
                        <div className="holder-col">
                            
                        </div>
                        <div className="holder-col">
                            
                        </div>
                    </div>
                </DndContext>
            </div>
        </div>
        </>
    )
}

export default TaskPage;