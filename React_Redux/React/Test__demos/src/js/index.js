import React,{Component} from 'react'

export default class ErrorBounds extends Component{
    constructor(props){
        super(props)
        this.state = {
            err:null,
            info:null
        }
    }

    componentDidCatch(err,info){
        this.setState({err,info})
    }

    render(){
        if(this.state.err){
            return (
                <details>
                    <summary>{this.state.err}</summary>
                    {this.state.info.componentStack}
                </details>
            )
        }

        return this.props.children;
    }
}