/// <reference path="Shape.d.ts" />
/// <reference path="Animal.ts" />
// ts文件中的命名空间
// let ani: Animal // error  
var ani_1;
var ani_2;
var ani_3;
var ani_4;
var ani__1 = Animal; // 命名空间可以当作值
var ani__2 = Animal.C;
var ani__3 = Animal.e;
var ani__4 = Animal.f;
var ani__5 = Animal.v;
// .d.ts中的命名空间
// let sha: Shape // error
var sha_1;
var sha_2;
var sha_3;
var sha_4;
var sha__1 = Shape;
var sha__2 = Shape.C || Shape.C2;
var sha__3 = Shape.e || Shape.e2;
var sha__4 = Shape.f || Shape.f2;
var sha__5 = Shape.v || Shape.v2;
// 命名空间
// 1. 在 .ts文件中, 只有export的成员才能使用.(点操作)取值; 而在.d.ts文件中, 所有成员都可以.(点操作)取值
// 2. 有类型的声明可以定义外部成员类型; 有内容的声明可以给外部成员赋值
// 3. 命名空间没有类型,无法直接给成员定义类型,但是可以赋值
