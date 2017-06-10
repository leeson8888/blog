// function Fn(){
//   this.a = 10;
// }

// const fn = new Fn();
// console.log(fn.a) // 10
// console.log(global.a) // undefined
// console.log(global.Fn);  //undefined


// global.a =10;
// b =20;

// console.log(global.a);
// console.log(global.b);
// console.log(this.a);
// console.log(this.b);

// this.a = 10;
// console.log(this.a);


console.log(module.exports === exports);

console.log(this === module.exports)