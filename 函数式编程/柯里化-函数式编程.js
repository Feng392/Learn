const arr = [
  'zhang-san',
  'li-si',
  'wang-wu',
];

const expect = [
  { name: 'Zhang San' },
  { name: 'Li Si' },
  { name: 'Wang Wu' },
];

// 1. 'zhang-san' => 'zhang san'   把中划线去掉
// 2. 'zhang san' => Zhang San  把首字母变大写
// 3. 'Zhang San' => { name: 'Zhang San' }  把字符串变成对象

const removeStrike = name => name.replace(/-/g, ' ');  // 正则表达式
const uppercase = name => name.split(' ').map(d => d.substring(0, 1).toUpperCase() + d.substring(1)).join(' ');
const toObj = (key,str) => ({ [key]: str }); // 需要柯里化

const curry = (fn) => {
  const args = [];
  return function curried(arg) {
    if (args.length === fn.length - 1) {
      return fn(...args, arg);
    }
    else {
      args.push(arg);
      return curried;
    }
  }
}
const curry1 = curry(toObj)('name');
// 传入多个函数，返回一个函数
const pipe = (...fns) => {
  return arg => {
    return fns.reduce((res, fn) => {
      return fn(res);
    }, arg);
  }
}
console.log(arr.map(pipe(removeStrike, uppercase, curry1)));