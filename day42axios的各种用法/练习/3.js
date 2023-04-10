setTimeout(() => {
    console.log(1);
    new Promise((resolve) => {
        console.log(2);
        resolve();
    })
        .then(() => {
            // 微任务
            console.log(3);
        });
}, 0);

console.log(7);
setTimeout(() => {
    console.log(4);

    new Promise((resolve) => {
        console.log(5);
        resolve();
    })
        .then(() => {
            console.log(6);
        });
}, 0);
console.log(8);
// 7 8 1 2 3 4 5 6

// 1 2 3 6 6 7 7  4  5 5