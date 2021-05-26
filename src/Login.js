import React from 'react';
import './Login.css';
import logo from './img/TMlogo.png';

function Login(){
    return(
        <div>
            <div className="head-banner">
                <img className="head-logo" src={logo}></img>
            </div>
        </div>
    )
};

export default Login;