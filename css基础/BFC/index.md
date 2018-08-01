BFC: 内联格式化上下
     内部子元素不会影响外部元素,也不会受外部元素的影响 

触发BFC:
    html
    float 不为none
    overflow 为 auto,scroll,hidden
    display 为 table-cell,table-caption,inline-block
    position 不为 relative,static

应用
    margin重叠 : 两个相邻元素(可能是兄弟关系也可能是祖先关系)要处于同一个BFC中,可能造成外边距折叠
    清除浮动 : 计算BFC的高度时，浮动元素也参与计算高度
    BFC的区域不会与float box重叠(双栏float布局)

常用方式
.bfc{
    overflow:hidden;
}
.bfc{
    display:table-cell;width:9999px;
}

