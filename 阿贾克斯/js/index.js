// $.ajax({
//     type: "method",
//     url: "url",
//     data: "data",
//     dataType: "dataType",
//     success: function (response) {

//     }
// });
$('#btn').click(function () {
    $.ajax({
        type: 'get',
        url: './js/data.txt',
        data: {

        },
        // 预期返回的数据类型,如果是json格式，在接收到返回值时，自动封装成json对象
        // dataType: 'json',
        // 请求成功时调用的函数
        success: function (data) {
            // console.log(`${typeof data} + ${data}`);
            const obj = JSON.parse(data);
            console.log(`${typeof obj} + ${obj}`);
        }
    });
});

$('#btn').click(function () {
    $.ajax({
        type: 'get',
        url: './js/data.txt',
        data: {

        },
        // 预期返回的数据类型,如果是json格式，在接收到返回值时，自动封装成json对象
        dataType: 'json',
        // 请求成功时调用的函数
        success: function (data) {
            console.log(`${typeof data} + ${data}`);
            // dom渲染在页面上
            // 创建一个 ul元素
            const ul = $('<ul></ul>');
            for (const d of data) {
                // const li = $('<li></li>');
                // li.text(d.name);
                const li = $('<li>' + d.name + '</li>');
                ul.append(li);
            }
            console.log(ul);
            $('body').append(ul);
        }
    });
})
