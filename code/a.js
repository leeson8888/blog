var a =1;
aa =2;

function fn(){
  console.log(this == global);  // true
  this.c = 10;
}

fn();

module.exports.a =a;