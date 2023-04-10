"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./index.scss");
// 引入mobx
const mobx_react_1 = require("mobx-react");
const store_1 = __importDefault(require("@/store"));
const userApi = __importStar(require("@/api/user"));
// 引入组件
const my_form_1 = __importDefault(require("@/components/my-form"));
const antd_1 = require("antd");
// 引入图标
const Icon = __importStar(require("@ant-design/icons"));
// 引入常量
const constants_1 = require("./constants");
const userListQuery = {
    page: 1,
    pagesize: 10,
    username: '',
};
// 新增用户表单
const formAddItem = [
    {
        type: 'Input',
        label: '用户名',
        name: 'username',
        rules: [{ required: true, message: '请输入用户名' }],
    },
    {
        type: 'Input',
        label: '邮箱',
        name: 'email',
        rules: [{ required: true, message: '邮箱' }],
    },
    {
        type: 'Input.Password',
        label: '密码',
        name: 'password',
        rules: [{ required: true, message: '请输入密码' }],
    },
    {
        type: 'Radio.Group',
        label: '角色',
        name: 'role',
        children: [
            {
                type: 'Radio',
                value: 1,
                title: '管理员',
            },
            {
                type: 'Radio',
                value: 2,
                title: '普通用户',
            }
        ],
        rules: [{ required: true, message: 'Please input your password!' }],
    },
    {
        type: 'Select',
        label: '权限组名称',
        name: 'permission_group_id',
        rules: [{ required: true, message: 'Please input your password!' }],
    },
    {
        type: 'Input',
        label: '联系电话',
        name: 'phone',
        rules: [{ required: true, message: 'Please input your password!' }],
    },
    {
        type: 'Input.TextArea',
        label: '介绍',
        name: 'introduction',
        rules: [{ required: true, message: 'Please input your password!' }],
    },
];
// 编辑用户表单
const formEditItem = [
    {
        type: 'Input',
        label: '用户名',
        name: 'username',
        rules: [{ required: true, message: '请输入用户名' }],
    },
    {
        type: 'Input',
        label: '邮箱',
        name: 'email',
        rules: [{ required: true, message: '邮箱' }],
    },
    {
        type: 'Radio.Group',
        label: '角色',
        name: 'role',
        children: [
            {
                type: 'Radio',
                value: 1,
                title: '管理员',
            },
            {
                type: 'Radio',
                value: 2,
                title: '普通用户',
            }
        ],
        rules: [{ required: true, message: 'Please input your password!' }],
    },
    {
        type: 'Select',
        label: '权限组名称',
        name: 'permission_group_id',
        rules: [{ required: true, message: 'Please input your password!' }],
    },
    {
        type: 'Input',
        label: '联系电话',
        name: 'phone',
        rules: [{ required: true, message: 'Please input your password!' }],
    },
    {
        type: 'Input.TextArea',
        label: '介绍',
        name: 'introduction',
        rules: [{ required: true, message: 'Please input your password!' }],
    },
];
let currentId = -1;
function user() {
    // 表格loading
    const [loading, setLoading] = react_1.default.useState(false);
    // 获取表格数据
    function refesh(userListQuery) {
        setLoading(true);
        store_1.default.setUsersData(userListQuery).then(() => {
            setLoading(false);
        });
    }
    // 搜索用户输入框
    function inputValueChange(username) {
        console.log(username);
        userListQuery.username = username;
        console.log(userListQuery);
    }
    //  清空
    function clearInput() {
        userListQuery.username = '';
        refesh(userListQuery);
    }
    // 搜索
    function searchUser() {
        refesh(userListQuery);
    }
    // 新增验证表单成功
    function onFinish(values) {
        userApi.addUser(values).then(() => {
            refesh(userListQuery);
            setIsShowAddUser(false);
            antd_1.message.success('新增用户成功');
        })
            .catch(() => {
            antd_1.message.error('新增用户失败');
        });
    }
    // 编辑验证表单成功
    function onEditFinish(values) {
        console.log(values);
        userApi.editUser(currentId, values).then(() => {
            refesh(userListQuery);
            setIsShowEditUser(false);
            antd_1.message.success('编辑用户成功');
        })
            .catch(() => {
            antd_1.message.error('编辑用户失败');
        });
    }
    (0, react_1.useEffect)(() => {
        refesh(userListQuery);
    }, []);
    // 获取用户权限分组
    (0, react_1.useEffect)(() => {
        store_1.default.setPermissionGroup();
    }, []);
    // 是否显示新增用户弹窗
    const [isShowAddUser, setIsShowAddUser] = react_1.default.useState(false);
    // 是否显示编辑用户弹窗
    const [isShowEditUser, setIsShowEditUser] = react_1.default.useState(false);
    // 编辑用户
    async function editUser(id) {
        // 获取用户详情
        await store_1.default.setUserDetail(id); // 先得到用户详情后才能反显数据
        // 显示编辑用户弹窗
        setIsShowEditUser(true);
        currentId = id;
    }
    // 删除用户
    const confirm = (id) => {
        userApi.deleteUser(id).then(() => {
            refesh(userListQuery);
            antd_1.message.success('删除用户成功');
        }).catch(() => {
            antd_1.message.error('删除用户失败');
        });
    };
    const cancel = () => {
        antd_1.message.error('已取消操作!');
    };
    // 关闭新增用户弹窗
    function handleCancel() {
        setIsShowAddUser(false);
    }
    // 关闭编辑用户弹窗
    function handleEditCancel() {
        setIsShowEditUser(false);
    }
    return (react_1.default.createElement("div", { className: 'card' },
        react_1.default.createElement(antd_1.Card, { bodyStyle: {
                padding: '18px',
                width: '100%',
            } },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: 'top' },
                    react_1.default.createElement(antd_1.Space, { size: 14 },
                        react_1.default.createElement(antd_1.Input, { placeholder: "\u6839\u636E\u7528\u6237\u540D\u641C\u7D22", onChange: (e) => inputValueChange(e.target.value) }),
                        react_1.default.createElement(antd_1.Button, { onClick: clearInput }, "\u6E05\u7A7A"),
                        react_1.default.createElement(antd_1.Button, { type: "primary", onClick: searchUser }, "\u641C\u7D22"),
                        react_1.default.createElement(antd_1.Button, { className: 'add-user', type: "primary", icon: react_1.default.createElement(Icon.SearchOutlined, null), onClick: () => {
                                setIsShowAddUser(true);
                            } }, "\u65B0\u589E\u7528\u6237"))),
                react_1.default.createElement("div", { className: 'record' },
                    react_1.default.createElement(antd_1.Space, { size: 8 },
                        react_1.default.createElement(Icon.InfoCircleOutlined, null),
                        react_1.default.createElement("span", null,
                            "\u5171 ",
                            store_1.default.usersData?.counts,
                            " \u6761\u8BB0\u5F55"))),
                react_1.default.createElement(antd_1.Table, { loading: loading, dataSource: store_1.default.userList, columns: (0, constants_1.GET_TABLE_COLUMNS)((_, record) => {
                        if (record.role === 'admin') {
                            return null;
                        }
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(antd_1.Button, { type: "primary", shape: "circle", icon: react_1.default.createElement(Icon.EditOutlined, null), onClick: () => editUser(record.id) }),
                            react_1.default.createElement(antd_1.Popconfirm, { title: "\u63D0\u793A", description: "\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u7528\u6237\uFF0C\u662F\u5426\u7EE7\u7EED?", onConfirm: () => confirm(record.id), onCancel: cancel, okText: "\u786E\u5B9A", cancelText: "\u53D6\u6D88" },
                                react_1.default.createElement(antd_1.Button, { type: "primary", shape: "circle", icon: react_1.default.createElement(Icon.DeleteOutlined, null) }))));
                    }), pagination: {
                        total: store_1.default.usersData?.counts,
                        current: userListQuery.page,
                        pageSize: userListQuery.pagesize,
                        pageSizeOptions: ['5', '10', '30', '50'],
                        showSizeChanger: true,
                        onChange: (page, pageSize) => {
                            userListQuery.page = page;
                            userListQuery.pagesize = pageSize;
                            store_1.default.setUsersData(userListQuery).then(() => {
                                refesh(userListQuery);
                            });
                        },
                    } }))),
        react_1.default.createElement(my_form_1.default, { formItem: formAddItem, open: isShowAddUser, onCancel: handleCancel, onFinish: onFinish, handleCancel: handleCancel, title: '\u65B0\u589E\u7528\u6237' }),
        react_1.default.createElement(my_form_1.default, { formItem: formEditItem, open: isShowEditUser, onCancel: handleEditCancel, onFinish: onEditFinish, handleCancel: handleEditCancel, title: '\u7F16\u8F91\u7528\u6237', defaultValues: store_1.default.userDetail })));
}
exports.default = (0, mobx_react_1.observer)(user);
