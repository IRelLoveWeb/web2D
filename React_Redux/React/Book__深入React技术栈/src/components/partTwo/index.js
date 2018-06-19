import React,{Component} from 'react'

import {TestOne,TestTwo} from './testOne'
import Form from './Form'
import Style from './Style'
import MulComponent from './mulComponents'

import {HighOne,HighTwo} from './highComponent'
import SearchSelect from './searchSelected'

export default class Main extends Component{
    constructor(){
        super();
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleClick1(e,text){ alert(JSON.stringify(e) + text);}
    handleClick2(e,text){}
    handleClick3(e,text){}

    handleBtnRef(e){
        alert('this is dom event!')
    }

    componentDidMount(){
        this.btn.addEventListener('click',this.handleBtnRef);
    }

    componentWillUnmount(){
        this.btn.removeEventListener('click',this.handleBtnRef)
    }
    render(){
        return (
            <div className='partTwo'>
                <div>
                    <h3>1.手动绑定事件该对象实例</h3>
                    <p>
                        <span>
                            1.构造器中bind一次,在调用时不用声明了(适用于不用传入额外的参数)<br />
                            2.每个方法调用时bind一次,(适用于每个函数都传递不同的参数)
                            3.bind是指定该函数被调用时上下文范围(无论函数在哪调用,上下文都是绑定时的);
                            4.bind时函数的形参,必须在被调用时赋予实参(参数是函数被调用处的值)
                        </span>
                        <button onClick={this.handleClick1.bind(this,'Test')}>bind方法</button>
                        <button onClick={this.handleClick2}>构造器内声明</button>
                        <button onClick={() => this.handleClick3()}>箭头函数声明</button>
                    </p>
                </div>

                <div>
                    <h3>2.Dom原生事件</h3>
                    <p>
                        <span>在组件加载完成后,可以获取原生的dom元素添加事件;使用原生事件必须在卸载组件时移除事件绑定</span>
                        <button ref={btn => this.btn = btn}>原生事件</button>
                    </p>
                </div>

                <TestOne />
                <TestTwo />
                <Form />
                <Style />
                <MulComponent />
                <HighOne name='lyf'/>
                <HighTwo test='2' change={true}/>
                <SearchSelect />
            </div>
        )
    }
}