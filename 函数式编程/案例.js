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

// 1. 'zhang-san' => 'zhang san'
// 2. 'zhang san' => 'Zhang San'
// 3. 'Zhang San' => { name: 'Zhang San' }
// 4. 数组.map

// 1. 去掉中划线
//const removeGap = name => name.replaceAll('-');
//// 2. 首字母大写
//const upperFirst = name => name.split(' ').map(d => d.charAt(0).toUpperCase() + d.substring(1)).join(' ');
//// 3. 变成对象
//const toObj = name => ({ name });
//// 4. 终结
//console.log( arr.map( pipe(removeGap, upperFirst, toObj) ) );


//const pipe = (...fns) => {
//  return arg => {
//    // 让fns中的每一个函数 把处理好的arg 给下一个函数
//    const res1 = fns[0](arg);
//    const res2 = fns[1](res1);
//    const res3 = fns[2](res2);
//    // 把这个逻辑变成通用逻辑(reduce)
//    return res3;
//  };
//};
const pipe = (...fns) => {
  return arg => {
    return fns.reduce((res, fn) => {
      return fn(res);
    }, arg);
  }
}

// 1. 去掉中划线
const removeGap = name => name.replace(/-/g, ' ');

// 2. 首字母大写
const upperFirst = name => name.split(' ').map(d => d.charAt(0).toUpperCase() + d.substring(1)).join(' ');

// 3. 变成对象
const toObj = name => ({ name });

// 4. 终结
console.log( arr.map( pipe(removeGap, upperFirst, toObj) ) );