// a = 1;
// var b=2;
// console.log(this);
// console.log(this.a);
// console.log(global.a);

// console.log(global);

// console.log(this); {}
// this.num = 10;
// console.log(this.num); 10
// console.log(global.num); undefined

function fn(){
  console.log(this == global);  // true
  this.a = 10;
}
fn();
console.log(this.a); //undefined
console.log(global.a); //10
console.log(global.fn);  //undefined

// console.log(this === module.exports);



// console.log(this);  //{}
// console.log(this == global); //false

// var a=1;
// b=2;

// console.log(this.a);  // undefined
// console.log(global.a); //undefined
// console.log(global.b); //2