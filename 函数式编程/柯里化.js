function add(a, b, c) {
  return a + b + c;
}
//  装饰者模式
function curry(fn) {
  const args = [];
  return function curried(arg) {

    // 判断参数的个数是否达到了函数的参数个数
    if (args.length === fn.length - 1) {
      return fn(...args, arg);
    }

    else {
      args.push(arg);
      return  curried;
    }
  }
}
// 得到柯里化函数
const curried = curry(add);
// 调用柯里化函数
const curry1 = curried(1)(2);
console.log(curry1(2));