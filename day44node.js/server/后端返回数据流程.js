const express = require('express'); // 引入express框架
const mysql = require('mysql'); // 引入mysql框架

const server = express();

const connection = mysql.createConnection({
  host: '43.136.175.179',  // 数据库地址
  user: 'root',     // 数据库用户名
  password: '556151993$Wy', // 数据库密码
  database: 'user_db' // 数据库名字
});

connection.connect(); // 连接数据库

server.get('/', (req, res) => {
  // 1.从数据库中获取数据
  connection.query('SELECT * FROM users', (err, result) => {
    if (err) {
      res.status(500).send({
        code: 500,
        success: true,
        msg: '服务器错误',
        data: null,
        err: error,
      });
      return;
    }
    console.log('查询结果为: ', result);
    // 返回给前端
    res.status(200).send({
      code: 200,
      success: true,
      msg: '查询成功',
      data: result,
    });
  });
});

// 服务器监听
server.listen(8888, () => {
  console.log('服务器启动端口号为8888');
});