/*
Set：

1.const s = new Set(arr);  接受一个数组作为参数,其没有重复的值
  s.add(v);
  数组去重: [...new Set(arr)] | Array.from(new Set(arr))

2.Size.prototype.size | constructor

3. Size.prototype.add(v) | delete(v) | has(v) | clear()

4. Size.prototype.keys() | values() | entries() | forEach()
    PS： Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致
    forEach((v,k,arr) =>{}) 对每一个值进行处理,没有返回值

5.将Set转为数组 [... new Set()]

6.对Set结构进行数据处理,可以先将Set转化为数组,再对数组进行操作,将得到的数组在转为Set

Map:
1.类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

2. Map.prototype.set() | has() | delete() | get() | size | clear()

3. Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键

4. 对Map结构进行数据处理,可以先将Map转化为数组,再对数组进行操作,将得到的数组在转为Map

5. new Map([['x',1],[true,2]]) //键可以是任意值,二维数组赋值 

6. forEach方法还可以接受第二个参数，用来绑定this
   例子：
   const report = {say(k,v){console.log(`${k} = ${v}`)}}
   map.forEach((v,k,map) => this.say(k,v),report);// 报错
   map.forEach(functon(k,v,map){
       this.say(k,v)
   },report); //正常输出

数据类型的转化
1.Map ==> Array   [...map]
2.Array ==> Map   new Map([[true,1],[{x:1},2]])
3.Map ==> Objext  let obj; for(let [k,v] of map) obj[k] = v;//map的键必须全为字符串
4.Object ==> Map  let map = new Map() for(let k of Object.keys(obj)) map.set(k,obj[k])

*/