// 引入一个库
// 引入方法
// require: commonjs
const express = require('express');
const mysql = require('mysql');

const app = express();

const pool = mysql.createPool({
    host: '47.98.249.40',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'ajax_lesson',
});

pool.getConnection((err, db) => {

    // 先处理失败
    if (err) {
        console.error(err);
        return;
    }

    // 访问地址
    // http://localhost:8080/list
    app.get('/list', (req, res) => {
        // 查询数据库SQL 可以做任何数据处理
        // 把查询到的结果send出去
        db.query('SELECT * FROM todolist', (err, result, fields) => {
            // 先处理失败
            if (err) {
                res.send({
                    code: -1,
                    msg: '查询错误',
                    content: err,
                });
            } else {
                res.send({
                    code: 200,
                    msg: '查询成功',
                    data: result,
                });
            }
        });
    });

});

// 处理跨域
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

// // 访问地址(本地)
// // http://localhost:8080/list
// app.get('/list', (req, res) => {
//     // req: 请求相关内容
//     // res：响应相关内容
//     res.send('hello word')
// });

app.listen(8080, () => {
    console.log('启动成功，端口号为8080');
});