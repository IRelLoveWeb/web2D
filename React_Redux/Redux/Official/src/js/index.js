import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'; 

import TodosApp from './Todos/App'
import MidWare from './midWare/index'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' render={() => (
        <div>
          <Link to='/todos/app'>TodosApp</Link>
          <Link to='/midware'>MidWare</Link>
          {/* <Link to='/todos/app'>TodosApp</Link> */}
        </div>
      )}/>
      <Route path='/todos/app' component={TodosApp} />
      <Route path='/midware' component={MidWare} />
    </Switch>
  </Router>,
  document.getElementById('root')
)