var foo = {
    value: 1
};

function bar(a,b) {
    console.log(this.value+"--"+a+"--"+b);
}

// 返回了一个函数
var bindFoo = bar.bind(foo,2); 

bindFoo(3); // 1-2-3