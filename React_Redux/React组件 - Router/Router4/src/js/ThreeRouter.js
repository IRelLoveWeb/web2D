import React,{Component} from 'react'
import {Link,Route,Prompt} from 'react-router-dom'

export class ThreeLinks extends Component{
    render(){
        return (
            <div className='side-split'>
                <Link to='/three/component'>component-type</Link>
                <Link to='/three/render'>render-type</Link>
                <Link to='/three/child'>child-type</Link>

                <LinkWrapper to='/three/wrapper'/>
            </div>
        )
    }
}
export class ThreeRoutes extends Component{
    render(){
        return (
            <React.Fragment>
                <Route path='/three/component' component={A}/>
                {/* render props属性,必须是点击link 匹配到该Route才会触发 */}
                <Route path='/three/render' render={({match})=><div>this is render type!</div>} />
                {/* children props属性,初始化就会展示出来,不必等到点击link时 */}
                <Route path='/three/child' children={({match}) =><div>this is child type,in TreeRouter.js page!</div>} />

                <Route path='/three/wrapper' component={Wrapper}/>
            </React.Fragment>
        )
    }
}

class A extends Component{
    constructor(props){
        super(props)
        this.state={val:'',flag:false}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt){
        this.setState({val:evt.target.value,flag:evt.target.value.length>0});
    }

    render(){
        return (
            <div>
                <div>this is componet type!</div>
                <input type='text' value={this.state.val} onChange={this.handleChange} />
                <Prompt when={this.state.flag} message={location =>(
                    location.pathname.startsWith('/switch') ? 'true' : `are you sure go to  ${location.pathname}?`
                )}/>
            </div>
        )
    }
}

let change = false;

setInterval(()=>change=!change,1000);

class LinkWrapper extends Component{
    render(){
        let {to} = this.props;
        /* 
            返回一个Route带children props【children是一个Link】
            点击link 会匹配所有的Route,加载component render children
        */
        return <Route path={to} children={({match})=>{
            return <Link to='/three/wrapper'>{change ? 'linkwrapper-true' : 'linkwrapper-false'}</Link>
        }}/>
    }
}

class Wrapper extends Component{
    render(){
        return <div>This is linkwrapper!</div>
    }
}