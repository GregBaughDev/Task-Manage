import React, {Component} from 'react';
import LoginForm from './LoginForm';
import './Login.css';
import logo from './img/TMlogo.png';

class Login extends Component{
    constructor(){
        super();
        this.getData = this.getData.bind(this);
    }

    getData(val){
        console.log(val);
    }

    render(){
        return(
            <div>
                <div className="head-banner">
                    <img className="head-logo" alt="Task Manage logo" src={logo}></img>
                </div>
                <LoginForm />
            </div>
        )
    }
};

export default Login;