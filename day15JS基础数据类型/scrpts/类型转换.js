var inp = prompt('x')

//把 inp 转化为数字类型，赋值给num
//无脑转换
var num = Number(inp) 
//第二种转换 （推荐）
var num = +inp;
//第三种转换
var num = parsetInt(inp); 


// 控制台打印出num的类型 和 num的值
console.log(typeof num , num)