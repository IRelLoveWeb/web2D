/*
1. Array.from() 将类数组对象和拥有iterable接口的对象转化为正真的数组
   Array.from(obj,value => handle value,{})
   第一个参数：obj 为类数组对象,其实只要obj的有length属性就可以使用Array.from()方法将对象转化为数组
   第二个参数：将类数组中的每一个元素进行操作处理
   第三个参数：如果第二个参数,函数中需要this,可以将this绑定第三个参数

2. Array.of(...rest) 将一组值，转换为数组
   例子：let arr = Array.of([1,2,3],4); ==》[ [ 1, 2, 3 ], 4 ]

3.Array.prototype.copyWithin()  在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组
  例子：[1,2,3,4,5,6].copyWithin(0,3,5); 将数组中index 3-5[不包含5,默认为数组长度]的数替换 从index 为0开始的数
        ==》[4,5,3,4,5,6]

4.Array.prototype.find() 用于找出第一个符合条件的数组成员
  例子：[1,2,3,-4,5].find((v,i,arr)=>return v<0); //-4
  Array.prototype.findIndex() 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
  例子：[NaN].findIndex(y => Object.is(NaN, y)) //0
  PS: 和Array.prtotype.filter()比較,filter返回所有符合条件的数,而find返回第一个符合条件的数 


5.Array.prototype.fill() 使用给定值，填充一个数组,接受第二个和第三个参数，用于指定填充的起始位置和结束位置
  例子：['a','b','c'].fill(7,1,2) ==>['a',7,'c']

6.Array.prototype.keys() | values() | entries() //生成一个遍历器

7.Array.prototype.includes(v) 某个数组是否包含给定的值
  例子：[1, 2, NaN].includes(NaN); // true

8. {...obj1,...obj2}
*/