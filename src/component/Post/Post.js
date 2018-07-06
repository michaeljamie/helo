import React, { Component } from 'react';


export default class Post extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            image: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }
    
    render(){


        return(
            <p>Post</p>
        )
    }
}