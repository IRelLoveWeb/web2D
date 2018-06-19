import React,{Component} from 'react';
import propTypes from 'prop-types'

class Tabs extends Component{
    static defaultProps = {
        classPrefix:'tabs',
        onChange:()=>{}
    }

    static propTypes = {
        classPrefix:propTypes.string,
        className:propTypes.string,
        defaultActiveIndex:propTypes.number,
        activeIndex:propTypes.number,
        onChange:propTypes.func,
        children:propTypes.oneOfType([
            propTypes.arrayOf(propTypes.node),
            propTypes.node
        ])
    }

    constructor(props){
        super(props)
        const currProps = props;
        let activeIndex = 0;

        this.handleTabClick = this.handleTabClick.bind(this);
        //初始化时判断是默认还是指定
        if('activeIndex' in currProps){
            activeIndex = currProps.activeIndex
        }else if('defaultActiveIndex' in currProps){
            activeIndex = currProps.defaultActiveIndex
        }

        this.state = {
            activeIndex,
            prevIndex:activeIndex
        }
    }

    handleTabClick(activeIndex){
        const prevIndex = this.state.activeIndex;
        if(this.state.activeIndex !== activeIndex){
            this.setState({
                prevIndex,
                activeIndex
            })

            this.props.onChange({activeIndex,prevIndex})
        }
    }

    renderTabNav(){
        const {classPrefix ,children } = this.props;

        return(
            <TabNav 
                key='tabBar'
                classPrefix = {classPrefix}
                onTabClick = {this.handleTabClick}
                panels = {children}
                activeIndex = {this.state.activeIndex}
            />
        ) 
    }

    renderTabContent(){
        const {classPrefix ,children } = this.props;
        
        return (
            <TabContent 
                key='tabcontent'
                classPrefix = {classPrefix}
                panels = {children}
                activeIndex = {this.state.activeIndex}
            />
        )
    }

    render(){
        const classname = this.props.className;

        return (
            <div className={classname}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        )
    }
}

class TabNav extends Component{
    static propTypes = {
        classPrefix:propTypes.string,
        activeIndex:propTypes.number,
        panels:propTypes.node
    }

    constructor(){
        super();
    }

    getTabs(){//activeIndex每一次改变都会重新渲染该组件(调用该方法)
        const {classPrefix , panels ,activeIndex} = this.props;

        return React.Children.map(panels,child =>{
            if(!child) return ;

            if(child.sayTest){
                child.sayTest()
            }

            const order = parseInt(child.props.order,10);

            //类名
            let classes = classPrefix + '-tab';
            if(order === activeIndex){
                classes += ' ' + classPrefix + '-active'
            }
            if(child.props.disabled){
                classes += ' ' + classPrefix + '-disabled'
            }

            //事件
            let events = {}
            if(!child.props.disabled){
                events = {//此处指向 TabNav实例;在Tabs组件中指向 Tabs实例
                    onClick:this.props.onTabClick.bind(this,order)
                }
            }

            //ref
            const ref = {}
            if(activeIndex === order){
                ref.ref = 'activeTab'
            }

            return (
                <li
                    {...events}
                    className = {classes}
                    key={order}
                    {...ref}
                >
                    {child.props.tab}
                </li>
            )
        })
    }

    render(){
        const {classPrefix} = this.props;

        return (
            <div className={`${classPrefix}-bar`}>
                <ul className ={`${classPrefix}-nav`}>
                    {this.getTabs()}
                </ul>
            </div>
        )
    }
}

class TabContent extends Component{
    static propTypes = {
        classPrefix:propTypes.string,
        activeIndex:propTypes.number,
        panels:propTypes.node
    }

    constructor(){
        super();
    }
    
    getTabPanes(){
        const {classPrefix,activeIndex,panels} = this.props;

        return React.Children.map(panels,child =>{
            if(!child) return ;

            const order = parseInt(child.props.order,10);
            const isActive = activeIndex === order;

            return React.cloneElement(child,{
                classPrefix,
                isActive,
                children:child.props.children,
                key:`tabpane-${order}`
            })
        })
    }

    render(){
        const {classPrefix} = this.props;

        return(
            <div className={`${classPrefix}-content`}>
                {this.getTabPanes()}
            </div>
        )
    }
}

export class TabPane extends Component{
    static propTypes ={
        tab:propTypes.oneOfType([
            propTypes.arrayOf(propTypes.node),
            propTypes.node
        ]).isRequired,
        order:propTypes.string.isRequired,
        disable:propTypes.bool,
        isActive:propTypes.bool
    }

    sayTest(){
        console.log('this order is ' + this.porps.order)
    }
    
    render(){
        const {classPrefix ,className,isActive,children} = this.props;

        let classes = className +' ' + classPrefix + '-panel';

        if(isActive){
            classes += ' ' + classPrefix +'-active';
        }
        
        return (
            <div className={classes}>
            {children}
            </div>
        )
    }
}

export default Tabs;
