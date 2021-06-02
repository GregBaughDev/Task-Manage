import React, {useState} from 'react';
import CardHolder from './CardHolder';
import logo from './img/TMlogo.png';
import './TaskPage.css';

function TaskPage(){
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
                    <CardHolder />
                    <CardHolder />
                    <CardHolder />
                    <CardHolder />
                </div>
            </div>
        </div>
        </>
    );
    

}

export default TaskPage;