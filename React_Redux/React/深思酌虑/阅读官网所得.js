1.  React Elements 的表示方式 【一个js对象,jsx是一种简写方式】
    <h1 className='greet'>Hello</h1>  jsx方式
    React.createElement('h1',{className:'greet'},'Hello')  es5方式
    JSX 转译后的对象:
    {
        type:'h1',
        props:{
            className:'greet',
            children:'Hello'
        },
        ref:null
    }

2.  组件，组件实例和react元素的区别
    组件是类或者函数
    react元素是对象

    class Test extends Component{}  中 Test 是组件;
    <Test /> 组件被调用,此时 <Test />整体就是元素
    <Test ref={(instance) =>this.test = instance} ,在组件加载完成后, this.test就是组件Test的实例对象

3. 事件绑定【事件绑定的三种方式】,将this绑定在本组件,在其他组件调用this依旧指向本组件
    constructor(){ this.handleClick.bind(this)}
    onClick = {e => this.handleClick(a,b,e)}
    onClick = {this.handleClick.bind(this,a,b)}

4. lists.map( (item,i) => <div key={i}>{i}</div>)
    map的元素必须有key值,一般在此提取组件

5. ref 可以在组件加载完成后调用(ComponentDidMount 或者 事件函数中 )
    函数组件就是一个函数【只是return的jsx代码】

6. 受控组件 form表单元素设置了value属性，且该属性值不为 null,undefined 【键盘无法输入,必须设置onChange事件，value等于state值后，才能正常输入】
   非受控组件 form未设置value属性,或者设置defaultValue或defaultChecked属性【获取值用ref或则findDOMNode】

7. 只要调用setState就会导致组件重新绘制【即使state值未改变,也会重绘】
    用shoudComponentUpdate(nextProps,nextState) 对新旧state和props比较,只有改变了才返回true，进行重绘
    或则 extends React.PureComponent 【state浅比较,注意引用的传递】

8. context 属性
    父组件 getChildContext(){}  ComponentInstance.childContextTypes={}
    子组件 ComponentInstance.contextTypes = {}

9. React.Fragment 内置组件,元素占位符

10. ReactDOM.createPortal(element, container) 
    将element插到原树之外，但是事件冒泡依照原树

11. 新的生命周期 componentDidCatch(err,errInfo) 捕获后代组件js错误
    catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI
    error boundaries only catch errors in the components below them in the tree
    
    封装一个ErrorBounds组件,专门捕获后代组件错误 <ErrorBounds><Childs /></ErrorBounds>