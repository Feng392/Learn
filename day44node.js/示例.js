  // 做api接口
  // 输入前端的参数
  // 输出后端的结果
  // express框架  还有一种框架是 koa框架
  const express = require('express');

  const server = express();
  // 服务器监听
  server.get('/', (req, res) => {
    console.log(req);
    res.send(
      {
        name: '张三',
        age: 18
      }
    );
  })
  server.listen(8888, () => {
    console.log('服务器启动端口号为8888');
  });