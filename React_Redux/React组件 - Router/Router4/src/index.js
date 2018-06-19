
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import * as NestRoutes from './js/NestRouter.js';
import * as WithRoutes from './js/WithRouter.js';
import * as SwitchRoutes from './js/SwitchRouter';
import * as ThreeRouter from './js/ThreeRouter';
import * as MulRouter from './js/mulMatch';

import './css/index.scss'

class Index extends Component{
    componentWillUpdate(){
        console.log('this component has updated!')
    }

    render(){
        return (
            <Router>
                <React.Fragment>
                    <div className='side'>
                        <NestRoutes.NestLinks />
                        <WithRoutes.WithLinks />
                        <SwitchRoutes.SwitchLinks />
                        <ThreeRouter.ThreeLinks />
                        <MulRouter.MulLinks />
                    </div>
                    <div className='content'>
                        <Route exact path='/' render={() => <div>This is RootRoute!</div>} />
                        <NestRoutes.NestRoutes />
                        <WithRoutes.WithRoutes />
                        <SwitchRoutes.SwitchRoutes />
                        <ThreeRouter.ThreeRoutes />
                        <MulRouter.MulRoutes />
                    </div>
                </React.Fragment>
            </Router>
        )
    }
}

ReactDOM.render(
    <Index />
    ,
    document.getElementById('root')
)

/* 
    每一次点击Link,Router的子组件都会重新加载
*/