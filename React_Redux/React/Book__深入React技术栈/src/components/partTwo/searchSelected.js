import React,{Component} from 'react'

const listDecorator = Wrapper =>{
    return class ListWrapper extends Component{
        constructor(){
            super()
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick(e){
            const {onList} = this.props;
            onList(e.target.value,false);
        }

        render(){
            const {keyWord,isActive} = this.props;
            return <Wrapper keyWord={keyWord} onClick={this.handleClick} isActive={isActive}/>
        }
    }
}

@listDecorator
class List extends Component{
    render(){
        const {keyWord,onClick,isActive} = this.props;
        return (
            <div style={{display:isActive ? 'block' : 'none'}}>
                <select onChange={onClick}>
                    <option value='Item1'>Item1</option>
                    <option value='Item2'>Item2</option>
                    <option value='Item3'>Item3</option>
                </select>
                <span>{keyWord}</span>
            </div>
        )
    }
}


const selectDecorator = Wrapper =>{
    return class SelectInputWrapper extends Component{
        constructor(){
            super()
            this.handleSelect = this.handleSelect.bind(this);
        }

        handleSelect(e){
            const {onSelect} = this.props;
            onSelect(undefined,true);
        }

        render(){
            const {placeholder,text} = this.props;

            const props={
                placeholder,text,
                onSelect : this.handleSelect
            }
            return <Wrapper {...props}/>
        }
    }
}

@selectDecorator
class SelectInput extends Component{
    render(){
        const {placeholder,text,onSelect} = this.props;

        return (
            <div>
                <input type='text' placeholder={placeholder} onClick={onSelect} value={text}/>
            </div>
        )
    }
}


const searchDecorator = Wrapper =>{
    return class SearchInputWrapper extends Component{
        constructor(){
            super()
            this.handleSearch = this.handleSearch.bind(this);
        }

        handleSearch(e){
            const {onSearch} = this.props;
            onSearch(e.target.value,true);
        }

        render(){
            const {placeholder} = this.props;
            return <Wrapper onSearch={this.handleSearch} placeholder={placeholder}/>
        }
    }
}

@searchDecorator
class SearchInput extends Component{
    render(){
        const {onSearch,placeholder} = this.props;

        return (
            <div>
                <input type='text' placeholder={placeholder} onChange={onSearch}/>
            </div>
        )
    }
}

export default class SearchSelect extends Component{
    constructor(props){
        super(props)
        this.state={
            isActive:false,
            keyWord:'',
            text:''
        }

        this.handleKeyWord = this.handleKeyWord.bind(this)
        this.hanleClickItem = this.hanleClickItem.bind(this)
    }

    handleKeyWord(key,isActive){
        this.setState({
            keyWord:key ? key : this.state.keyWord,
            isActive:isActive
        })
    }

    hanleClickItem(text,isActive){
        this.setState({
            text,
            isActive
        })
    }

    render(){
        const searchProps ={
            onSearch:this.handleKeyWord,
            placeholder:'请选择...'
        }

        const selectProps={
            onSelect:this.handleKeyWord,
            placeholder:'请选择...',
            text:this.state.text
        }

        const listProps={
            isActive:this.state.isActive,
            keyWord:this.state.keyWord,
            onList:this.hanleClickItem
        }

        return (
            <div>
                <SearchInput {...searchProps}/>
                <SelectInput {...selectProps}/>
                <List {...listProps}/>
            </div>
        )
    }
}


/* 
    1.利用不同函数写的高级组件,必须手动调用一次;修饰符写的高组件不需要,只用调原函数
    2.需要多些熟练
*/