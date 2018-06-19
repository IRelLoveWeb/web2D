import React,{Component} from 'react'
import {Link,Route,Switch} from 'react-router-dom'

export class MulLinks extends Component{
    render(){
        return (
            <div className='side-split'>
                <Link to='/mul/a'>Match-one</Link>
                <Link to='/mul/b'>Match-switch</Link>
                <Link to='/mul/c'>Match-Mul</Link>
            </div>
        )
    }
}
export class MulRoutes extends Component{
    render(){
        return (
            <React.Fragment>
                <Route path='/mul/a' render={()=><div>This is not switch Route,one! </div>}/>
                <Route path='/mul/c' render={()=><div>This is not switch Route,two! </div>}/>

                <Switch>
                    <Route path='/mul/b' render={()=><div>This is switch Route,one! </div>}/>
                    <Route path='/mul/c' render={()=><div>This is switch Route,two! </div>}/>
                </Switch>
            </React.Fragment>
        )
    }
}