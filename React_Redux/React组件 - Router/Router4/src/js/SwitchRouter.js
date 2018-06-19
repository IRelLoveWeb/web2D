import React,{Component} from 'react'
import {Link,Route,Switch,Redirect} from 'react-router-dom'

export class SwitchLinks extends Component{
    render(){
        return (
            <div className='side-split'>
                <Link to='/switch' >switch-route</Link>
                <Link to='/switch/c/A' >switch-redirect</Link>
                <Link to='/switch/B' >switchB</Link>
                <Link to='/switch/C' >switchC</Link>
                <Link to='/kkk'>Route no path</Link>
            </div>
        )
    }
}

export class SwitchRoutes extends Component{
    constructor(props){
        super(props)
        this.state = {
            location:{
                pathname:location.pathname //将location默认为当前路径中pathname [location是window.location]
            }
        }
    }

    componentDidMount(){
        this.timer = setTimeout(() =>{
            this.setState(prevState =>{
                return Object.assign(prevState.location,{
                    pathname:'/switch/switch componet has props location'
                })
            })

            this.timer1 = setTimeout(()=>{
                this.setState({location:null});
            },2000)

        },1000)
    }

    componentWillMount(){
        clearTimeout(this.timer);
        clearTimeout(this.timer1);
    }

    render(){
        return (
            /* Switch中的location可以动态设置   
                this.props.location || this.context.router.route.location
                可知props.location 会覆盖当前路径,且和页面路径无关了

                有props location属性,那么只能手动修改,与页面路径无关【网址url改变,这个switch匹配的route不会改变,switch外的route会随着匹配改变】;
                设置props location为空,那么恢复与页面路径关联【点击Link生效】
             */
            <Switch /* location={this.state.location} */>
                <Route exact path='/switch' component={A} />
                <Redirect from='/switch/c/:id' to='/switch' />
                {/* :id 匹配所有的值，所以需要放置在特殊值之后 */}
                <Route path='/switch/:id' component={B} />

                <Route  component={NoMatch}/>
            </Switch>
        )
    }
}

class NoMatch extends Component{
    render(){
        return <div>404！  ==》 {this.props.match.url}</div>
    }
}

class A extends Component{
    render(){
        return (
            <div>This is Switch2!</div>
        )
    }
}

class B extends Component{
    render(){
        return (
            <div>{`${this.props.match.params.id}`}</div>
        )
    }
}