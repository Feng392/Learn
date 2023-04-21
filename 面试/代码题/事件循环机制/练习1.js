console.log(1);

async function f1() {
  await f3();
  console.log(2);
  await f2();
  console.log(3);
}

async function f2() {
  console.log(4);
  await f3();
  console.log(5);
}

async function f3() {
  console.log(6);
}

f1();

setTimeout(() => {
  console.log(12);
  Promise.resolve(14)
    .then((res) => {
      console.log(res);
    })
    .then((res) => {
      console.log(res);
    });
});

setTimeout(() => {
  console.log(13);
  Promise.resolve(7).then((res) => {
    console.log(res);
  });
});

new Promise((resolve) => {
  console.log(8);
  resolve(15);
})
  .then((res) => {
    console.log(res);
    return 11;
  })
  .then((res) => {
    console.log(res);
  });

console.log(10);

// 一： 宏观： 1.6.8.10
// 微观： 2.4.6.15.
// 微2： 5.11
// 微3： 3

// 2: 宏：12.
// 微：14
// 微2：un

// 3: 宏： 13
// 微：7