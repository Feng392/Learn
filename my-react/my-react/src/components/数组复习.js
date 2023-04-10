const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 增加
arr.unshift(999);
arr.push(888);
console.log(arr);

// 删除，按照索引删除 splice
arr.splice(0, 3);
console.log(arr);
const shift = arr.shift();
const pop = arr.pop();
console.log(shift, pop);

// 修改
// 按照索引修改
arr[0] = 999;
// 数组排序 sort
arr.sort((a, b) => a - b); // 升序
arr.sort((a, b) => b - a); // 降序

// 数组反转 reverse
arr.reverse();
arr.fill('xxxx');
console.log(arr);

//给定一个时间，计算七天前的时间
const date = new Date();
date.setDate(date.getDate() - 7);
console.log(date);