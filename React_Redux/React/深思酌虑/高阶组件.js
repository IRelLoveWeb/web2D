高阶组件 component => component

//高阶组件就是一个函数
Hoc = (Wrapper,...rest) =>{
    class HOC extends Component{

        render(){
            /* 
                //TODO rest参数
            */
            let data = 'abc';
            return <Wrapper {...this.props} da={data}/>
         }
    }

    return HOC;
}

//传入一个组件 返回一个包含组件(原组件不改变),在包含组件可以进行一系列的操作
let HocComponent = Hoc(Index);

声明周期中只有 componetWillUpdate 不能使用setState函数
    而在 componentWillMount可以调用setState,但一般在constructor中初始化state,不需要调用setState函数