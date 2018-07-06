import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateInfo } from './../../ducks/reducer';
import { Link } from 'react-router-dom';

class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (property, value) => {
        this.setState({
      [property]: value
    })
    }

    registerUser = () => {
            axios.post('/api/auth/register', this.state)
            .then(res => {
                this.props.updateInfo(res.data.userId, res.data.username);
            })
        }

    loginUser = () => {
        axios.post('/api/auth/login', this.state)
        .then(res => {
            this.props.updateInfo(res.data.userId, res.data.username);
        })
    }
    
    render(){
        
        const { updateInfo } = this.props;
        
        return(
            <div>
                <p>Auth</p>
                Username: <input onChange = {(e) => this.handleChange('username', e.target.value)} type="text"/>
                Password: <input onChange = {(e) => this.handleChange('password', e.target.value)} type="text"/>
                <Link to='/dashboard'><button onClick = { this.registerUser }>Register</button></Link>
                <Link to='/dashboard'><button onClick = { this.loginUser }>Login</button></Link>
            </div>
        )
    }
}


export default connect( null, { updateInfo } )(Auth);