import React,{Component} from 'react'
import PropTypes from 'prop-types'

import {EventEmitter} from 'events'

const emitter = new EventEmitter();

export default class MulComponent extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <List  list={['item1','item2','item3']} title={'Titles'}/>
                <List1 list={[{text:'item1',checked:true},{text:'item2',checked:false},{text:'item3',checked:false}]}/>
                <Root />
                <Side/>
                <OtherSide />
            </div>
        )
    }
}

//父组件向子组件传递值
function ListItem({value}){
    return (
        <li>
            <span>{value}</span>
        </li>
    )
}

function List({list,title}){
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {list.map((item,index) => (
                    <ListItem key={`list-${index}`} value={item} />
                ))}
            </ul>
        </div>
    )
}

//子组件向父组件传值(回调)
class ListItem1 extends Component{
    static defaultProps = {
        text:'',
        checked:false
    }

    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <input type='checkbox' checked={this.props.checked} onChange={this.props.onChange}/>
                <span>{this.props.text}</span>
            </div>
        )
    }
}

class List1 extends Component{
    static defaultProps = {
        list:[]
    }

    //构造函数中使用props,必须显示声明参数
    //子组件改变父组件内部状态迫使组件重新渲染(组件props是不可变的)
    constructor(props){
        super(props)
        this.state ={
            list:props.list.map(entry =>({
                text:entry.text,
                checked:entry.checked
            }))
        }
    }

    onChangeItem(entry){
        const {list} = this.state;

        this.setState({
            list:list.map(item => ({
                text:item.text,
                checked: item.text == entry.text ? !item.checked : item.checked 
            }))
        })
    }

    render(){
        return (
            <div>
                {this.state.list.map((entry,index) => <ListItem1 
                    key={`list-${index}`}
                    checked={entry.checked}
                    text={entry.text}
                    onChange ={this.onChangeItem.bind(this,entry)}
                />)}
            </div>
        )
    }
}

//子组件向父组件传值(合成事件)
class List2 extends Component{
    constructor(){
        super()
        this.handleItemChange = this.handleItemChange.bind(this)
    }

    handleItemChange(item){}

    render(){
        const list = [{text:'item1',checked:true},{text:'item2',checked:false},{text:'item3',checked:false}];
        return (
            <div>
                {list.map((entry,index) => <ListItem1 
                    key={`list-${index}`}
                    checked={entry.checked}
                    text={entry.text}
                    onChange={this.handleItemChange}
                />)}
            </div>
        )
    }
}

//跨级传值(context)
class Root extends Component{
    static childContextTypes = {
        color:PropTypes.string
    }

    getChildContext(){
        return {
            color:'red'
        }
    }
    
    render(){
        return (
            <One />
        )
    }
}

const One = () => <Two />

class Two extends Component{
    static contextTypes = {
        color:PropTypes.string
    }

    render(){
        return (
            <div style={{color:this.context.color}}>跨级传递值context</div>
        )
    }
}

//没有嵌套关系的组件通信(全局事件对象emitter来绑定和激活事件)
class Side extends Component{
    constructor(){
        super()
    }

    handleClick(){
        emitter.emit('changeDiv',true,'this div has Changed!')
    }

    render(){
        return (
            <div>
                <button onClick={() => this.handleClick()}>点击</button>
            </div>
        )
    }
}


class OtherSide extends Component{
    constructor(){
        super()
        this.state ={
            text:'Not Change!'
        }
    }

    componentDidMount(){
        emitter.addListener('changeDiv',(msg,data) =>{
            this.setState({text:data})
        })
    }

    componentWillUnmount(){
        emitter.removeAllListeners('changeDiv');
    }

    render(){
        return (
            <div>{this.state.text}</div>
        )
    }
}