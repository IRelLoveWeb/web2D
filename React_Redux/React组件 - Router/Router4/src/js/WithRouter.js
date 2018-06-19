import React,{Component} from 'react'
import {Link,Route,withRouter} from 'react-router-dom'

export class WithLinks extends Component{
    render(){
        return (
            <div className='side-split'>
                <Link to='/with' >with</Link>
            </div>
        )
    }
}

export class WithRoutes extends Component{
    render(){
        return (
            <React.Fragment>
                {/* <WD /> */}
                <Route path='/with' component={A} />
            </React.Fragment>
        )
    }
}

class A extends Component{
    render(){
        return (
            <React.Fragment>
                <h3>该组件A 是Route直接指向的组件</h3>
                <h3>加载未被withRouter处理的组件B:</h3>
                <B />
                <h3>加载经过withRouter处理的组件C:</h3>
                <WC />
            </React.Fragment>
        )      
    }
}

class B extends Component{
    render(){
        return (
            <div>
                This is Component B!
                <br/>
                无法获取match!
            </div>
        )
    }
}


class C extends Component{
    render(){
        return (
            <div>
                This is Component C!
                <br />
                获取match中url的值:
                <br />
                {`url:${this.props.match.url}`}
            </div>
        )
    }
}

const WC = withRouter(C);

class D extends Component{
    render(){
        return (
            <div> This is D!
            <br />
            {`url:${this.props.match.url}`}</div>
        )
    }
}
const WD = withRouter(D);