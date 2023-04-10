// 需要启动服务

// 封装修改
/**
 * 
 * @param {{ id: string, name: string, description: string }} 
 * @summary 修改请求 
 */
export function edit({ id, name, description }) {
    return axios({
        method: 'put',
        url: 'http://47.98.249.40:1234/todo/' + id,
        data: {
            name,
            description,
        },
    });
}

// 封装新增
/**
 * 
 * @param {{name: string; description: string}} data 
 * @summary 新增请求 
 */
export function add(data) {
    return axios({
        method: 'post',
        url: 'http://47.98.249.40:1234/todo',
        data,
    }).catch(err => alert('新增失败'));
}

// 封装删除
/**
 * 
 * @param {number | string} id 
 * @summary 删除请求 
 */
export function del(id) {
    return axios({
        method: 'delete',
        url: 'http://47.98.249.40:1234/todo/' + id,
    });
}

// 封装查询
export function search() {
    return axios({
        method: 'get',
        url: 'http://47.98.249.40:1234/todo/list',
    })
}


