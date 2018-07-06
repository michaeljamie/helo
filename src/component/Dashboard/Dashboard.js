import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Auth extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    componentDidMount(){
        axios.get(`/api/posts`).then( results => {
            this.setState({'posts': results.data})
        })
    }

    handleCheck = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

    this.setState({
      [name]: value
    });
  }

    handleChange = (property, value) => {
        this.setState({
      [property]: value
    })
    }

    handleSearch = () => {
        axios.get(`/api/posts?userposts=${this.state.userposts}&search=${this.state.search}`).then( results => {
            this.setState({'posts': results.data})
        })
    }
    
    render(){
        let postList = this.state.posts.map( (post, i) => {
            return(
                <div key = {i}>
                    <h3>{this.state.posts[i].title}</h3>
                    <p>{this.state.posts[i].content}</p>
                    <img src={this.state.posts[i].img} alt=""/>
                </div>
            )
        })

        return(
            <div>
            <p>Dashboard</p>
                <input type="text" placeholder = 'search posts' onChange = {(e)=> {this.handleChange('search', e.target.value)}}/>
                <button onClick = {this.handleSearch}>Search</button>
                <button>Reset</button>
                My Posts<input name="userposts" type="checkbox" checked = {this.state.userposts} onChange={this.handleCheck}/>
                {postList}
            </div>
        )
    }
}

function mapStateToProps(state){
    const { userId } = state;
    return {
        userId
    };
}

export default connect (mapStateToProps)(Auth);