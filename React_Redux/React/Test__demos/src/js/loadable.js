import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Loadable from 'react-loadable'

const Com = Loadable({
    loader:() => import('./index2'),
    loading:() => <div>Loading...</div>
})

class Child extends Component{
    render(){
        return (
            <div>{`num is ${this.props.num}`}{this.props.children}</div>
        )
    }
}

class Parent extends Component{

    componentDidMount(){
        // let dom = ReactDOM.findDOMNode(this.div);
        // ReactDOM.unmountComponentAtNode(dom);

        // ReactDOM.unmountComponentAtNode(document.getElementById('no'))
    }

    render(){
        return (
            <div id='no'>
                <Child num={1} ref={div => this.div = div}/>
                {/* cloneElement 克隆的是组件 dom or use-Compoent */}
                {React.cloneElement(<Child />,{num:2},<div>3</div>)}
                {React.cloneElement(<Child>6</Child>,{num:5},<div>7</div>)}

                {/* Test object is React Element */}
                {`Component: ${React.isValidElement(Child)}`}
                <br />
                {`Component Element: ${React.isValidElement(<Child />)}`}
                <br/>
                {`Dom Element: ${React.isValidElement(<div />)}`}
                <br/>

                {/* child 是一個React Element */}
                React.Children.map:
                {React.Children.map(this.props.children,child => child)}
                React.Children.forEach:
                {React.Children.forEach(this.props.children,child => console.log(child))}
                <br/>
                {`childs count: ${React.Children.count(this.props.children)}`}
                <br/>
                React.Children.toArray:
                {React.Children.toArray(this.props.children)}
            </div>
        )
    }
}

ReactDOM.render(
    <Parent>
        <span>11</span>
        <span>12</span>
    </Parent>,
    document.getElementById('root')
);

/* 
    Props func,Child func 返回組建,參數就是父組件的状态值
    pureReact组件会进行浅比较,如果props中有未绑定的func等【索引变量】,会使每次渲染都更新
*/