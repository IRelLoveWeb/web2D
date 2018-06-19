import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Tabs,{TabPane} from './tabs'

const ItemOne = (props) =>(
    <div>
        <h3>{props.index +'. '+ props.tip}</h3>
        <p>
            <span>扩展运算符<a href='http://es6.ruanyifeng.com/#docs/array' target='_blank'>点击此处</a></span>
            <span>rest操作符<a href='http://es6.ruanyifeng.com/#docs/function#rest-参数' target='_blank'>点击此处</a></span>
        </p>
    </div>
)

const ItemTwo = (props) =>(
    <div>
        <h3>{props.index +'. ' + props.tip}</h3>
        <p>
            <span /* cprop='one' */>一般的自定义属性无法再react中生效</span>
            <span data-cprop='one'>以 data- 开头的属性生效</span>
            <span aria-level='2'>
                无障碍阅读属性 aria- 可以生效,详情见<a target='_blank' href='http://www.zhangxinxu.com/wordpress/2012/03/wai-aria-%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%98%85%E8%AF%BB/'>点击链接</a>
            </span>
        </p>
    </div>
)

const ItemThree = (props) =>(
    <div>
        <h3>{props.index +'. ' + props.tip}</h3>
        <p>
            <span>createElement函数的三个参数是: 组件类型,组件的props(对象),子元素(多个用数组表示)</span>
            <span>render函数中返回的类型最后会通过该方法生成实际的DOM对象</span>
            <span>组件的children只有在render中直接或间接被调用后,才能展示在页面上(不是直接展示)</span>
            {/* 字符转义,防止xxs攻击 */}
            <span dangerouslySetInnerHTML={{__html:'cc&copy;2015'}}></span>

            <span>{React.Children.map(props.children,function(){
                return <label>3333</label>
            })}</span>
        </p>
    </div>
)

class ItemFour extends Component{
    constructor(){
        super()
    }

    static defaultProps = {
        index:4,tip:'组件的构造方式'
    }

    render(){
        const props = this.props;
        return (
            <div>
                <h3>{props.index +'. ' + props.tip}</h3>
                <p>
                    <span>组件构建现在一般用纯es6 和 </span>
                    <span>
                        当defaultProps和this.props的值没有冲突,各自显示;
                        但是有冲突时this.props会覆盖defaultProps的值。
                    </span>
                </p>
            </div>
        )
    }
}

class ItemFive extends Component{
    constructor(){
        super()
    }

    render(){
        const props = this.props;
        return (
            <div>
                <h3>{props.index +'. ' + props.tip}</h3>
                <p>
                    <span>生命周期分为挂载卸载和更新</span>
                    <span>
                        <b>挂载</b>时初始化state和props属性,且componentWillMount和componentDidMount函数只执行一次;<br/>
                        在will中setSatet<b>不会二次渲染</b>,在did中setState<b>重新渲染页面</b>(此时用于更新页面属性);<br/>
                    </span>
                    <span>
                        <b>卸载</b>componentWillUnMount用于在组件卸载前清除状态等
                    </span>
                    <span>
                        <b>更新</b>有两种方式:自身状态state和父组件传递状态props;<br/>
                        componentWillReceiveProps(nextProps)在父组件状态props改变是触发,此时可以使用setSate且<b>不会二次渲染</b>;<br/>
                        shouldComponentUpdate(nextProps,nextState)返回布尔值,决定组件是否更新;<br/>
                        componentWillUpdate(nextProps,nextState)在should返回true或组件调用forceUpdate(<b>强制刷新组件</b>)时会执行;<br/>
                        compoentDidUpdate(preProps,preState)组件渲染之后,此时调用setState会<b>重新渲染页面</b>
                    </span>
                </p>
            </div>
        )
    }
}

class ItemSix extends Component{
    constructor(){
        super()
    }

    componentDidMount(){
        //ReactDOM.findDOMNode(componentOrElement);
        const dom = ReactDOM.findDOMNode(this);
    }

    render(){
        const props = this.props;
        return (
            <div>
                <h3>{props.index +'. ' + props.tip}</h3>
                <p>
                    <span>
                        在Dom元素被真正加入html后,可以调用ReactDOM.findDOMNode(component)获取Dom元素(只对以挂载的组件有效)
                    </span>
                </p>
            </div>
        )
    }
}

class SevenChildren extends Component{
    constructor(){
        super()
        this.unitSay = this.unitSay.bind(this);
    }

    unitSay(){
        console.log(123);
    }

    render(){
        return(
            <span>This is Test ref RectInstance!!!</span>
        )
    }
}

class ItemSeven extends Component{
    constructor(){
        super()
    }

    componentDidMount(){
        //dom元素聚焦
        this.myTextInput.focus();
        //react实例
        this.sevenChild.unitSay();
        
        //字符串形式
        //this.refs.sevenChild.unitSay();

        //通过ref获取组件实际的dom元素
        const seven = ReactDOM.findDOMNode(this.sevenChild);
        console.log(seven)
    }

    render(){
        const props = this.props;
        return (
            <div>
                <h3>{props.index +'. ' + props.tip}</h3>
                <p>
                    <span>
                        在组件中JSX子组件是以ReactElement形式存在,无法调用该组件内的方法;
                        但是可以通过ref在组件加载完成后来获取子React组件实例或子Dom元素(ref在组件获取的是组件实例,ref在dom标签获取的是dom元素).
                    </span>
                    <span>
                        ref支持函数和字符串形式(字符串形式必须用this.refs.sevenChild获取实例;函数形式 this.sevenChild 获取实例)
                    </span>
                    <span>
                        在render中JSX语法出现的所有组件都是react-element(Tabs组件中 通过React.Children.map遍历的children是react元素);
                        但是render中的this 指向的该组件的实例
                    </span>
                    <spaan>
                        <input type='text' ref={dom => this.myTextInput = dom} />
                    </spaan>
                    <SevenChildren /* ref='sevenChild' */  ref={instance => this.sevenChild = instance}/>
                </p>
            </div>
        )
    }
}

class Main extends Component{
    constructor(){
        super() //类中定义构造函数必须super继承原型方法
    }

    render(){
        const itemOne = {index:1,tip:'对象rest用法',show:{a:'1'}}
        const itemTwo = {index:2,tip:'自定义属性'}
        const itemThree = {index:3,tip:'createElement详解'}
        const itemFive = {index:5,tip:'组件的生命周期'}
        const itemSix = {index:6,tip:'React和Dom'}
        const itemSeven = {index:7,tip:'refs的使用'}

        return (
            <div className='partOne'>
                <ItemOne {...itemOne} /> 
                <ItemTwo {...itemTwo} />
                <ItemThree {...itemThree} >
                    <span>TChildren1</span>
                    <span>TChildren2</span>
                </ItemThree>
                <ItemFour index='notDefault4' />
                <ItemFive {...itemFive}/>
                <ItemSix {...itemSix}/>
                <ItemSeven {...itemSeven}/>
                <Tabs classPrefix='tabs' defaultActiveIndex={0} className='tabs-bar'>
                    <TabPane order='0' tab={<span>Home</span>}>第一个tab里的内容</TabPane>
                    <TabPane order='1' tab={<span>Company</span>}>第二个tab里的内容</TabPane>
                    <TabPane order='2' tab={<span>Others</span>}>第三个tab里的内容</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Main;