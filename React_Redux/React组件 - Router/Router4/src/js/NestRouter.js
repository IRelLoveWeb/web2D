import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'

export class NestLinks extends Component{
    render(){
        return <div className='side-split'>
            <Link to={{pathname:'/A',id:1}}> link-to-object </Link>
            <Link to='/B'>link-to-str</Link>
            <Link to='/B/nest1'>nest1</Link>
            <Link to='/B/nest2'>nest2</Link>
            <Link to='/B/nest3'>nest3</Link>
        </div>
    }
}

export class NestRoutes extends Component{
    render(){
        return <React.Fragment>
            <Route path='/A' component={A} test={2}/>
            <Route path='/B' component={B}/>
            <Route path='/C' render={() => <div>this is C!</div>} />
        </React.Fragment>
    }
}

class B extends Component{
    render(){
        const {match} = this.props;
        return (
            <div>
                B!
                {/* link只负责跳转,具体页面怎么显示需要看匹配的Route所在位置及返回元素 */}
                <Link to='/C'>link-in-child</Link>
                <br/>
                <Route exact path={`${match.url}`} render={() => <div>this is B!</div>} />
                <Route path={`${match.url}/:id(nest1|nest2)`} render={({match})=>{
                    let param = match.params.id;
                    if(param === 'nest1'){
                        return <div>this is nest1!</div>
                    }else if(param === 'nest2'){
                        return <div>this is nest2!</div>
                    }
                }}/>
                {/* 
                    展示/B/nest1 必
                */}
            </div>
        )
    }
}

class A extends Component{
    render(){
        return <div>A!{this.props.test}</div>;
    }
}
