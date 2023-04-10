// 导入  (封装请求函数)
export { edit, query, set, del };


// 修改确认
/**
 * @param {id: string; name: string; description: string} 
 * @summary  修改请求 
 */
function edit({ id, name, description }) {
    return axios({
        method: 'put',
        url: 'http://47.98.249.40:1234/todo/' + id,
        data: {
            name,
            description,
        },
    })
}

// 查询所有
function query() {
    return axios({
        method: 'get',
        url: 'http://47.98.249.40:1234/todo/list',
    });
}

// 新增
/**
 * @param {{name: string; description: string}} data 
 * @summary 新增
 */
function set(data) {
    return axios({
        method: 'post',
        url: 'http://47.98.249.40:1234/todo',
        data,
    });
}

// 删除
/** 
 * @param {number | string} id 
 * @summary 删除
 */
function del(id) {
    return axios({
        method: 'delete',
        url: 'http://47.98.249.40:1234/todo/' + id,
    });
}