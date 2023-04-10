const arr = [1, 2, 3, 4, 5, 6];
console.log(Math.max(...arr)); //es6
console.log(Math.max.apply(null, arr)); // Math.max 求最大值
