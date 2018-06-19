import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let b = 1;

class Index extends Component{
    constructor(props){
        super(props)
        this.state = {changeProps:0,hasError:false}
    }

    componentDidCatch(err,info){
        this.setState({hasError:true})
    }

    componentDidMount(){
        this.timer = setInterval(() =>{
            b++;
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    handleClick(){
        this.setState(({changeProps}) =>({
            changeProps:++changeProps
        }))
    }

    render(){
        if(this.state.hasError){
            return <div>someThings has Error!</div>
        }

        return <div>
            <button onClick={()=>this.handleClick()}>changeProp</button>
            {/* props中b未改变,因为未刷新该组件 */}
            <Test count={this.state.changeProps} bTime={b}/>
        </div>
    }
}

class Test extends Component{
    constructor(props){
        super(props)
        this.state = {count:1}
    }

    componentWillMount(){
        console.log('Test component will Mount!');
    }

    componentDidMount(){
        console.log('Test component did Mount!');
    }

    componentWillReceiveProps(nextProps,nextState){
        console.log('Test component will recive props!');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('Test component should update');
        return  true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log('Test component will update');
    }

    componentDidUpdate(prevProps,prevState){
        console.log('Test component did update');
    }

    componentWillUnmount(){
        console.log('Test component will unMount!');
    }

    handleClick(){
        this.setState(prestate =>({count:prestate.count++}))
    }

    render(){
        return (
            <div>
                <button onClick={()=>this.handleClick()}>changeState</button>
                {`Index prop:${this.props.count} --- Test state:${this.state.count}`}
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);