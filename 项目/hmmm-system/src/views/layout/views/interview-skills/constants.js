"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TABLE_COLUMNS = void 0;
function GET_TABLE_COLUMNS(render, render1) {
    return [
        {
            title: '序号',
            dataIndex: 'order',
            key: 'order',
        },
        {
            title: '文章标题',
            dataIndex: 'title',
            key: 'title',
            render,
        },
        {
            title: '阅读数',
            dataIndex: 'visits',
            key: 'visits',
        },
        {
            title: '录入人',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '录入时间',
            dataIndex: 'createTime',
            key: 'createTime',
        },
        {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: '操作',
            render: render1,
        }
    ];
}
exports.GET_TABLE_COLUMNS = GET_TABLE_COLUMNS;
