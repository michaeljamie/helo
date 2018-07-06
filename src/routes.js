import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';

export default (
    <Switch>

        <Route component = {Auth} exact path= '/'/>
        <Route component = {Dashboard} path='/dashboard'/>
        <Route component = {Post} path='/post/:postid'/> 
        <Route component = {Form} path='/new'/>  

    </Switch>
    )