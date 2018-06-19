import React,{Component} from 'react'
import ReactDOM from 'react-dom'

const MyContainer = WrappedComponent =>
    class Wrapper extends Component{
        constructor(){
            super();
            this.state={
                name:''
            }

            this.onNameChange = this.onNameChange.bind(this)
        }

        onNameChange(e){
            this.setState({
                name:e.target.value
            })
        }

        proc(WrappedComponentInstance){
            WrappedComponentInstance;
        }

        render(){
            const props = Object.assign({},this.props,{
                ref:this.proc.bind(this)
            })

            const newProps = {
                name:{
                    value:this.state.name,
                    onChange:this.onNameChange
                }
            }
            return (
                <div style={{height:40}}>
                    <WrappedComponent {...props} {...newProps}/>
                </div>
            )
        }
    }
    
@MyContainer
class MyComponent extends Component{
    render(){
        return (
            <div>HighComponent !
                <input type='text' {...this.props.name} />
            </div>
        )
    }
}


class Test extends Component{
    render(){
        return (
            <div>
                123456789
            </div>
        )
    }
}


const MyContainer2 = (WrappedComponent) =>
    class extends WrappedComponent{
        /* 设置类的标识符 */
        static displayName = `HOC${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`

        constructor(props){
            super(props);
            this.state = {
                hoc:23
            }
        }

        componentDidMount(){
            const test = ReactDOM.findDOMNode(this.test);

            console.log(this.test)
            console.log('HOC did mount!');
        }

        componentWillUnmount(){
            console.log('HOC will unmount!');
        }
        render(){

            if(!this.props.change){
                return super.render()
            }else{
                /* 
                    render 返回的不是完整的组件树
                */
                const elementsTree = super.render();
                const props = Object.assign({},this.props,{'newPops':'okDONE!'})
                const newEle = React.cloneElement(elementsTree,null,'czczczxcz')

                return (
                    <div id='two'>
                        {'props:' + JSON.stringify(this.props)}
                        {'state:' + JSON.stringify(this.state)}
                        {/* this 可以通过作用于链调用父类的属性和方法(本类有的方法就用本类的) */}
                        {this.say()}
                        {newEle}
                        <Test ref={(instance) => this.test = instance} />
                    </div>
                )
            }
        }
    }

@MyContainer2
class ComponentTwo extends Component{
    constructor(props){
        super(props)
        this.state = {
            comTwo:22
        }
    }

    say(){
        console.log('子类实例调用父类的原型方法！ 是正确的')
    }

    componentDidMount(){
        console.log('com did mount!');
    }

    componentWillUnmount(){
        console.log('com will unmount!');
    }
    render(){
        return (
            <div>HighComponentTwo!{JSON.stringify(this.props)}</div>
        )
    }
}

export {
    MyComponent as HighOne,
    ComponentTwo as HighTwo
}




/* 
    1.组件名首字母必须大写(WrappedComponent这是组件的引用,也必须大写)
    2.类修饰符传入的参数是该类本身,可以在修饰函数中修改其属性,react中必须返回一个新组建或原组建
    3.WrappedComponent的ref函数作用域是Wrapper的实例,但是参数WrappedComponentInstance的值是MyComponent的实例
*/

/* 
    子类在实例化时,必须调用super(parms);即调用父类的constructor(prams)且this指向子类实例,那么父类的constructor里的
    state会被子类自己constructor里的state覆盖。

    子类实例可以调用本类和父类除静态属性和方法外的所有值
*/