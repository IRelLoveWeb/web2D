/*
1. symbol 是一种原始数据类型,表示独一无二的值;

2. s1 = Symbol('foo'); s2 = Symbol('foo');  s1 == s2;//fasle

3. 作为对象的属性必须在[]中

4. Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名
   Reflect.ownKeys(obj)
*/