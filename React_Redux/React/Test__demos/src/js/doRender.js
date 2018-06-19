import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Mouse extends Component{
    constructor(props){
        super(props);
        this.state = {x:0,y:0}
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event){
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render(){
        return (
            <div style={{height:'100%'}} onMouseMove={this.handleMouseMove}>
                {/* <MouseTip {...this.state}/> */}
                将组件当做prop传入另一个组件:
                <br />
                1.函数当做child,调用child-func,返回组件
                {this.props.children[0](this.state)}
                2.react-element当做child,用eact.cloneElement
                {React.cloneElement(this.props.children[1],this.state)}
                3.函数当做props,调用prop-func,返回组件
                {this.props.render(this.state)}
                4.将组件【类】当做props,传入
                <this.props.component {...this.state}/>
            </div>
        )
    }
}

function MouseTip({x,y}){
    return <div>{`mousePosition ==> x:${x} --- y:${y}`}</div>
}

/* Hoc */
const CreateMove = Wrapper =>{
    return class extends Component{
        render(){
            return(
                <Mouse render={mouse =>{
                    <Wrapper {...this.props} mouse={mouse}/>
                }}/>
            )
        }
    }
}

export default function B(){
    return <div>show Text!</div>
}


ReactDOM.render(
    <Mouse render={state => <MouseTip {...state}/>} component={MouseTip}>
        {(state) => <MouseTip {...state}/>}
        <MouseTip />
    </Mouse>,
    document.getElementById('root')
);

/* 
    Props func,Child func 返回組建,參數就是父組件的状态值
    pureReact组件会进行浅比较,如果props中有未绑定的func等【索引变量】,会使每次渲染都更新
*/