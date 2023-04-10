"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MENU_TABLE_COLUMNS(render) {
    return [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '权限点代码',
            dataIndex: 'identifier',
            key: 'identifier',
            width: '80%',
        },
        {
            title: '操作',
            render,
        },
    ];
}
exports.default = MENU_TABLE_COLUMNS;
