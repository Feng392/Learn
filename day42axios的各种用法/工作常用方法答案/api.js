/**
 * @param { { id: string; name: string; description: string } }
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

/**
 * @param { { name: string; description: string } } data
 * @summary 新增请求
 */
export function add(data) {
    return axios({
        method: 'post',
        url: 'http://47.98.249.40:1234/todo',
        data,
    });
}

/**
 * @param { number | string } id
 * @summary 删除请求
 */
export function del(id) {
    return axios({
        method: 'delete',
        url: 'http://47.98.249.40:1234/todo/' + id,
    });
}

/**
 * @summary 查询请求
 */
export function search() {
    return axios({
        url: 'http://47.98.249.40:1234/todo/list',
    });
}
