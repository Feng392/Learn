console.log("start");

for (var i = 0; i < 5; i++) {
  // i = 5
  setTimeout(() => {
    console.log(i);
  }, 0);
  console.log(i);
}

setTimeout(() => {
  console.log("timeout1");
  Promise.resolve(10).then((res) => {
    console.log(res);
  });
}, 0);

setTimeout(() => {
  console.log("timeout2");
  Promise.resolve(11).then((res) => {
    console.log(res);
  });
}, 0);

new Promise((resolve) => {
  console.log("promise1");
  resolve(12);
}).then((res) => {
  console.log(res);
});

console.log("end");

// 一： 宏： start.0.1.2.3.4.promise1.end
// 微：12

// 宏：5.5.5.5.5

// 宏：timeout1
// 微：10