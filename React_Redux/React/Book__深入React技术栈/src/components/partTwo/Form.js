import React,{Component} from 'react'

export default class Form extends Component{
    constructor(){
        super()

        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleMulSelectChange = this.handleMulSelectChange.bind(this);

        this.state = {
            radioValue:'',
            loves:[],
            area:'',
            areas:['beijing','wuhan'],
            value1:'This is Ok!',
            value2:'This is Ok!'
        }
    }
    //单选
    handleRadioChange(e){
        this.setState({radioValue:e.target.value})
    }
    //多选
    handleCheckboxChange(e){
        const {checked,value} = e.target;
        let {loves} = this.state;
        if(checked && loves.indexOf(value) == -1){
            loves.push(value);
        }else{
            loves = loves.filter(love => love !== value);
        }

        this.setState({loves:loves})
    }

    //单选下拉框
    handleSelectChange(e){
        this.setState({area:e.target.value})
    }

    handleMulSelectChange(e){
        const {options} = e.target;
        const areas = Array.from(options).filter(option => option.selected === true).map(option =>option.value);

        this.setState({areas})
    }

    render(){
        const {radioValue,loves,area,areas} = this.state;

        return (
            <div>
                <p>鼠标点击会使该input的checked变true,再setState迫使更新;
                   单选按钮选中中心黑点,多选按钮选中打钩 都是浏览器的默认操作;
                   可以使用 e.preventDefault()阻止默认行为.<br />
                   因为合成事件都是绑定在最外层
                </p>
                <div>
                    <p>单选:</p>
                    male:<input type='radio' value='male' checked={radioValue === 'male'} onChange={this.handleRadioChange}/>
                    fmale:<input type='radio' value='fmale' checked={radioValue === 'fmale'} onChange={this.handleRadioChange}/>
                </div>
                <div>
                    <p>多选</p>
                    <input type='checkbox' value='english' checked={loves.indexOf('english') > -1} onChange={this.handleCheckboxChange}/> 英语
                    <input type='checkbox' value='chinese' checked={loves.indexOf('chinese') > -1} onChange={this.handleCheckboxChange}/> 语文
                    <input type='checkbox' value='math' checked={loves.indexOf('math') > -1} onChange={this.handleCheckboxChange}/> 数学
                </div>
                <div>
                    <p>下拉框</p>
                    <select value={area} onChange ={this.handleSelectChange}>
                        <option value={'beijing'}>北京</option>
                        <option value={'wuhan'}>武汉</option>
                        <option value={'guangzhou'}>广州</option>
                    </select>

                    <select multiple={true} value={areas} onChange ={this.handleMulSelectChange}>
                        <option value={'beijing'}>北京</option>
                        <option value={'wuhan'}>武汉</option>
                        <option value={'guangzhou'}>广州</option>
                    </select>
                </div>
                <div>
                    <p>非受控组件和受控组件不能共存</p>

                    <p>非受控组件:</p>
                    <span>不受组件状态值控制,事件绑定与否都不会组件改变状态值。(只有初始化显示值)</span>
                    <input defaultValue={this.state.value1} disabled onChange={e => this.setState({value1:e.target.value.toUpperCase()})}/>

                    <p>受控组件:</p>
                    <span>受组件的状态控制,没绑定事件无法修改值。</span>
                    <input value={this.state.value2} onChange={e => this.setState({value2:e.target.value.toUpperCase()})}/>
                </div>
            </div>
        )
    }
}