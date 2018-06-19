import React,{Component} from 'react'

export  class TestOne extends Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        this.bodyEvent = this.bodyEvent.bind(this)

        this.state = {
            show:true
        }
    }

    handleClick(e){
        this.setState({
            show:!this.state.show
        })
    }

    bodyEvent(e){
        this.setState({show:false})
    }

    componentDidMount(){
        document.body.addEventListener('click',this.bodyEvent)
    }

    componentWillUnmount(){
        document.body.removeEventListener('click',this.bodyEvent);
    }

    render(){
        const {show} = this.state;
        return (
            <div className='testone'>
                <button onClick={this.handleClick}>showDiv</button>
                <div style={{display:show ? 'block' : 'none'}}>This is show Or not !</div>

                <span>
                    react中的合成事件不是绑定在原生dom上,而是统一绑定在最外成(document)上;
                    此处body上事件冒泡到document,body点击事件使得show始终未false,
                    所以点击button使得show始终是true
                </span>
                <span>
                     合成事件和原生事件不建议一起使用,合成事件阻止冒泡无用,原生事件可以组建合成事件的冒泡。
                </span>
            </div>
        )
    }
}

export class TestTwo extends Component{
    constructor(){
        super()
        this.state = {
            show:true
        }

        this.bodyEvent = this.bodyEvent.bind(this);
        this.divEvent = this.divEvent.bind(this);
    }

    bodyEvent(e){
        this.setState({show:false})
    }

    divEvent(e){
        this.setState({show:!this.state.show});
        e.stopPropagation();
    }

    componentDidMount(){
        document.body.addEventListener('click',this.bodyEvent)
        document.body.querySelector('.code').addEventListener('click',this.divEvent)
    }
    componentWillUnmount(){
        document.body.removeEventListener('click',this.bodyEvent)
        document.body.querySelector('.code').removeEventListener('click',this.divEvent)
    }
    render(){
        const {show} = this.state;

        return(
            <div>
                <button className='code'>ShowDiv</button>
                <div style={{display:show ? 'block' : 'none'}}>
                事件绑定在原生的dom对象中.
                合成事件对象中的stopPropagation可以阻止合成事件的冒泡;
                对原生事件无效;而原生事件的stopPropagation可以阻止原生和合成事件中的冒泡。
                </div>
            </div>
        )
    }
}