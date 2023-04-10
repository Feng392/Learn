const str = 'name=zhangsan&age=18&sex=nan&height=180';
// 用 reduce生成对象
//const res = [name=zhangsan, age=18, sex=nan, height=180]

// 按 & 分割
// 按每一项分割成 ，
// 转换为数组

const change = (str) => {
  return str.split('&')
}
const change2 = (str) => {
  return str.join(',')
}
const change3 = (str) => {
  return str.split(',')
}
const  pipe = (...fns) => {
    return arg => {
       return fns.reduce((res, fn) => {
        return fn(res);
      }, arg);
    }
}

console.log(pipe(change, change2, change3)(str));