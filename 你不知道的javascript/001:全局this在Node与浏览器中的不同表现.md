# this

我们知道如果是浏览器环境，全局的`this === window` (注意是小写的window);

而且我们知道, nodejs 环境中有个全局的global对象，那么 `this == global `？？吗

### 以下所有代码运行在node环境中

- 1.全局中的this

```js
console.log(this);  //{}
console.log(this == global); //false

var a=1;
b=2;

console.log(this.a);  // undefined
console.log(global.a); //undefined
console.log(global.b); //2


```

由以上可以，nodejs中， this是一个空对象，不等于global,和global没有任何关系 。
至于global具体是什么，为什么`global.b` 可以访问，稍后分解。

- 2. 函数中的this

```js
function fn(){
  console.log(this == global);  // true
  this.a = 10;  // 不推荐使用
}
fn();
console.log(this.a); //undefined
console.log(global.a); //10
console.log(global.fn);  //undefined

```

在函数中this指向的是global对象，和全局中的this不是同一个对象。

在函数中通过this定义的变量就是相当于给global添加了一个属性，此时与全局中的this已经没有关系了。

- 3. 构造函数中的this

```js
function Fn(){
  this.a = 10;
}

const fn = new Fn();
console.log(fn.a)     // 10
console.log(global.a) // undefined
console.log(global.Fn);  //undefined

```
在构造函数中this指向的是它的实例，而不是global。


- 4. 全局中this：{} 到底是何物？global到底是何物？



官方文档：

>In browsers, the top-level scope is the global scope. This means that within the browser var something will define a new global variable. In Node.js this is different. The top-level scope is not the global scope; var something inside a Node.js module will be local to that module.

在nodejs中，global是全局的作用域，在nodejs文件中通过var 定义的变量，其作用域仅限于当前模块（当前文件），是不会挂载到全局的。

只有通过`global.a =10`  或 `a =10` 声明的变量才会挂载到全局。

```js
global.a =10;
b =20;

console.log(global.a);  //10
console.log(global.b);  //20
console.log(this.a);   //undefined
console.log(this.b);    //undefined

```


### 实际上 node.js 使用的 commonjs 规范就是每个文件都是独立的作用域啊！

当一个模块的代码执行是，nodejs 实际上将其包裹为下面的函数：

```js
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```
因为，所有通过var, const or let 定义的变量，都仅限当前模块，避免了全局污染。

而，全局的 `this === module.exports`  (或`this === exports `)



参考：https://zhuanlan.zhihu.com/p/25916585

参考：https://nodejs.org/api/modules.html#modules_the_module_wrapper

参考：https://www.zhihu.com/question/57375179/answer/152633354




