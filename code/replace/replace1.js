/*
// 情形1：replace: 默认只替换搜索到第一个
var Str ="js好，js好的不得了";
var searchStr ="js";
var newStr ="nodejs";

var retStr = Str.replace(searchStr,newStr);

console.log(retStr);  //nodejs好，js好的不得了


*/

/*
// 情形2：如果需要全局替换，需要使用regExp正则匹配替换
var Str ="js好，js好的不得了";
var searchStr =/js/g;
var newStr ="nodejs";

var retStr = Str.replace(searchStr,newStr);

console.log(retStr);  //nodejs好，nodejs好的不得了


*/


// 情形3： 第一个参数为正则，第二个参数为字符串
// 对于正则replace约定了一个特殊标记符$：

// $i (i:1-99) : 表示从左到右正则子表达式所匹配的文本。
// $&:表示与正则表达式匹配的全文本。
// $`(`:切换技能键)：表示匹配字符串的左边文本。
// $’(‘:单引号)：表示匹配字符串的右边文本。
// $$：表示$转移。


// "\d": 匹配数字,, "\w"：匹配字母，数字，下划线,,  "\s"：匹配空格 
// "*"(贪婪):重复零次或更多,, "+"(懒惰): 重复一次或更多次,,   "?"(占有):重复零次或一次,, "{n}": 重复n次,, "{n,m}":重复n到m次,, "{n,}" :重复n次或更多次
// 更多正则参考：http://www.cnblogs.com/zery/p/3438845.html

/*

var retStr1 = "js  &  nodejs".replace(/(\w+)\s*&\s*(\w+)/g,"$2 & $1") 
console.log(retStr1);  //nodejs & js


var retStr2 = "js".replace(/\w+/g,"$& & $&") 

console.log(retStr2); // js & js


var retStr3 = "nodejs".replace(/node/,"$& !=")

console.log(retStr3); // node !=js


var retStr4 = "javascript".replace(/java/,"$&$' is ") 

console.log(retStr4); // javascript is script

*/


//情形4：第二个参数为函数

// 函数参数的规定：

// 第一个参数为每次匹配的全文本（$&）。
// 中间参数为子表达式匹配字符串，个数不限.( $i (i:1-99))
// 倒数第二个参数为匹配文本字符串的匹配下标位置。
// 最后一个参数表示字符串本身。


// 示例1：字符串首字母大写：
/*
String.prototype.capitalize1 = function(){

    return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ 
      console.log("--"+p1+"--"); 
      //p1:匹配到的字符开头或空格
      //p2:匹配打的首字母
      return p1+p2.toUpperCase();
    } );
 
};
console.log("i am a boy !".capitalize1()) //I Am A Boy !
*/

// 示例2：字符串首字母大写：
/*
String.prototype.capitalize2 = function(){

    return this.replace( /\b\w+\b/g , function(word){ 
     	return word.substring(0,1).toUpperCase()+word.substring(1);
    } );
 
};
console.log("i am a boy !".capitalize2())  //I Am A Boy !
*/



//参考： http://www.cnblogs.com/whitewolf/archive/2013/03/14/2958720.html


