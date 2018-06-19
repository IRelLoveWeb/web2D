import React,{Component} from 'react'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from 'TestCss/button.scss'
//console.log(JSON.stringify(styles));
//{"normal":"button__normal--1Zz7u","disabled":"button__disabled--2nMAn"}
//将源文件的class =>文件名 + 样式名 + hash

//在scss文件中除了类名之外的其他选择器都不会装换,点开head中内部样式可以看到(即编译后的css文件)
//{"normal":"button__normal--1Zz7u","disabled":"button__disabled--2nMAn"}

import styles2 from 'TestCss/button2.scss'
//console.log(JSON.stringify(styles2))
//{"normal":"button2__normal--1f4zP","style2":"button2__style2--3PbHF","disabled":"button2__disabled--3F-ya"}
//全局没装换,重复的只生成一个
 class StyleM extends Component{
    constructor(){
        super()
        this.state ={
            disabled:true
        }
    }

    render(){
        const defaultStyle={
            height:20,
            color:'red'
        }

        //通过组合state值该构成最终类名
        const names = classNames({
            disabled:this.state.disabled,
            enable:!this.state.disabled
        })

        return (
            <div>
                <div style={defaultStyle}>
                    1.设置行内样式需要使用对象 
                    2.对样式自动添加单位px
                </div>
                <div className={names}>
                    3.使用classnames库操作类
                </div>
                <div styleName='normal' /* className={styles.normal} */ >
                    4.css模块化 通过 webpack、css-loader来实现;
                    5.使用 react-css-modules库来避免每次调用类名都关联styles对象;
                    6.local 中的styles用styleName引用类名,全局的样式用className引用类名
                </div>
            </div>
        )
    }
}

export default CSSModules(StyleM,styles)