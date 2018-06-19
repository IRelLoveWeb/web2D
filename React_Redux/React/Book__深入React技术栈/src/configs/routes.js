import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Index from '../components/Index'

const Routers = () =>(
    <Router>
        <Switch>
            <Route path='/' exact component={Index} ></Route>
        </Switch>
    </Router>
)

export default Routers;