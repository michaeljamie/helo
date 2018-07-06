import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav(props) {
    
    return(
        <div>    

            <h3>Nav Bar</h3>
            <img src={props.profile_pic} alt=""/>
            <p>Username:</p>
            <p>{props.username}</p>
            <Link to = '/dashboard'><button>Home</button></Link>
            <Link to = '/post/:postid'><button>New Post</button></Link>
            <Link to = '/'><button>LogOut</button></Link>
        </div>
    )
}

function mapStateToProps( state ){
    const { username, profile_pic } = state;
    return {
        username,
        profile_pic
    };
}

export default connect(mapStateToProps)(Nav);