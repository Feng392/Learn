// axios包
const axios = (function() {
  // 回调函数队列
  const interceptorQueue = [];

  function 真正的axios() {
    // 正确拦截时机
    interceptorQueue.forEach(f => f());
    console.log('hello world');
  }

  真正的axios.lanjie = function(callback) {
    interceptorQueue.push(callback);
  };

  return 真正的axios;
})();

// 使用场景
// 使用拦截器
axios.lanjie(() => {
  console.log(1);
});

axios.lanjie(() => {
  console.log(2);
});

axios.lanjie(() => {
  console.log(3);
});

// 使用加了拦截器的axios
axios(); // 1, 2, 3, 'hello world'
axios(); // 1, 2, 3, 'hello world'
axios(); // 1, 2, 3, 'hello world'