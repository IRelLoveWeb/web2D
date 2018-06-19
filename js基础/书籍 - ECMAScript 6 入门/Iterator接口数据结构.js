/*
1.遍历器是一种接口,为所有的数据结构提供统一的访问机制;数据和处理机制是分开的。

2.遍历器每次调用next()，都会返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束

3.遍历器是一种对数据的处理方式

4.用闭包模拟遍历器
  function makeIterator(array){
    var index = 0;
    return {
        next(){
        if(index < array.length){
            return {'done':false,value:array[index++]}
        }else{
            return {'done':true}
        }
     }
     }
    }
  var ss = makeIterator([1,2,3,'a','b']); ss.next()
  // {done: false, value: 1}

  调用指针对象的next方法，就可以遍历事先给定的数据结构; ss被称为遍历器对象(对象的根本特征就是具有next方法)
  Iterator只是把接口规格加到数据结构之上，所以，遍历器与它所遍历的那个数据结构，实际上是分开的

5.在数组,Set,Map等数据结构具有原生的Iterator接口,即prototye原型中有Symol.iterator属性;
  凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象
  var arr = [1,2,3];  var it = arr[Symbol.iterator]() ; it.next();

  arr[Symbol.iterator]类似于makeIterator,调用后返回一个遍历对象

*6. for..of..遍历会直接调用 Symbol.iterator生成遍历器,然后循环
    for...of循环内部调用的是数据结构的Symbol.iterator方法

7.类似数组的对象（存在数值键名和length属性），部署Iterator接口，有一个简便方法，就是Symbol.iterator方法直接引用数组的Iterator接口
  obj[Symbol.iterator] = Array.prototype[Symbol.iterator]

  普通对象部署数组的Symbol.iterator方法，并无效果

8.obj[Symbol.iterator]必须返回一个遍历对象  {next(){}}

9.遍历器与数据是分离的
  var $iterator = ITERABLE[Symbol.iterator]();
  var $result = $iterator.next();
  while (!$result.done) {
    var x = $result.value;
    // ...
    $result = $iterator.next();
  }

*10.数组的遍历都会调用遍历接口;所以任何接受数组作为参数的场合，其实都调用了遍历器接口
    Array.from() Promise.all() Map(), Set()
    扩展运算符会调用遍历接口;
    解构赋值会调用遍历接口;

11. var arr1 = [1,2,3]
    arr1[Symbol.iterator] = function* (){
        let self = this,index = 0;
        while(index<self.length){
            yield self[index++]
        }
        yield {'done':true}
    }
    for (x of arr1) console.log(x)
    // 1 2 3 {'done':true}

12.遍历器对象的return()，throw()
    return方法的使用场合是，如果for...of循环提前退出（通常是因为出错，或者有break语句或continue语句），就会调用return方法。如果一个对象在完成遍历前，需要清理或释放资源，就可以部署return方法
    return方法必须返回一个对象，这是Generator规格决定的

13.for...in循环，只能获得对象的键名，不能直接获取键值。ES6提供for...of循环，允许遍历获得键值

14.对于普通的对象，for...in循环可以遍历键名，for...of循环会报错
    1.> Object.keys(obj)  将对象的键名生成一个数组,具有遍历接口
    2.>用generator函数包装,生成一个构造器,再循环

15.对象的Symbol.iterator方法是一个遍历器生成函数,调用该函数会生成一个遍历器对象;
    而Generator函数也是一个遍历器生成函数,可以将Generator函数赋值给Symbol.iterator属性

*/