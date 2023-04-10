console.log(1);

setTimeout(() => {
   console.log(3);

   new Promise((resolve) => {
       resolve(6);
   })
       .then(res => {
           console.log(res);
       });

   new Promise((resolve) => {
       resolve(7);
   })
       .then(res => {
           console.log(res);
       });
});

new Promise((resolve) => {
    setTimeout(() => {
        console.log(4);
    });
    resolve(5);
})
    .then(res => {
        console.log(res);
    });

console.log(2);