// var value = 2;
// var foo = {
//     value: 1
// }

// function bar(a) {
//     console.log(this.value+"--"+a);
// }

// bar();  //undefined, 浏览器环境下 2

// bar.call(foo,2);  // 1--2


// bar.bind(foo)(3); //1--3

// bar.bind(foo,5)(3); //1--5


Function.prototype.call2 = function(foo){
  //console.log(this); //bar
 // console.log(foo);  //foo
  foo.bar = this;  
  console.log(foo);  // { value: 1, bar: [Function: bar] }
  foo.bar();  // foo.bar()
  delete foo.bar;
}

// 测试一下
var foo = {
    value: 1
};

function bar(){
  console.log(this.value);
}

bar.call2(foo);
