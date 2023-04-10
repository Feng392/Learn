"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TABLE_COLUMNS = void 0;
function GET_TABLE_COLUMNS(render) {
    return [
        {
            title: '序号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '联系电话',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '权限组名称',
            dataIndex: 'permission_group_title',
            key: 'permission_group_title',
        },
        {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '操作',
            render,
        }
    ];
}
exports.GET_TABLE_COLUMNS = GET_TABLE_COLUMNS;
;
