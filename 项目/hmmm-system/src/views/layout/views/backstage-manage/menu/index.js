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
/* eslint-disable react/no-unstable-nested-components */
const react_1 = __importStar(require("react"));
require("./index.scss");
const my_form_1 = __importDefault(require("@/components/my-form"));
const MenuApi = __importStar(require("@/api/menu"));
// 引入mobx
const mobx_react_1 = require("mobx-react");
const menu_1 = __importDefault(require("@/store/menu"));
// 引入antd
const antd_1 = require("antd");
// 引入图标
const Icon = __importStar(require("@ant-design/icons"));
// 引入常量
const constants_1 = __importDefault(require("./constants"));
const formItem = [
    {
        label: '权限组选项',
        name: 'is_point',
        rules: [{ required: true, message: '请选择权限组选项' }],
        type: 'Radio.Group',
        children: [
            {
                type: 'Radio',
                value: false,
                title: '菜单',
            },
            {
                type: 'Radio',
                value: true,
                title: '权限点',
            }
        ],
    },
    {
        label: '权限组名称',
        name: 'id',
        rules: [{ required: true, message: '请选择权限组名称' }],
        type: 'TreeSelect',
    },
    {
        label: '权限代码',
        name: 'code',
        rules: [{ required: true, message: '请输入权限代码' }],
        type: 'Input',
    },
    {
        label: '权限标题',
        name: 'title',
        rules: [{ required: true, message: '请输入权限标题' }],
        type: 'Input',
    },
];
function Menu() {
    (0, react_1.useEffect)(() => {
        menu_1.default.setMenuData();
    }, []);
    // 新增菜单
    const [isAddMenu, setIsAddMenu] = react_1.default.useState(false);
    // 修改菜单
    const [isEditMenu, setIsEditMenu] = react_1.default.useState(false);
    function AddMenu(data) {
        MenuApi.addMenu(data).then(() => {
            antd_1.message.success('新增成功');
            menu_1.default.setMenuData();
            setIsAddMenu(false);
        }).catch(() => {
            antd_1.message.error('新增失败');
        });
    }
    // 修改菜单
    function editMenu(id) {
        setIsEditMenu(true);
        menu_1.default.setMenuDetail(id);
    }
    // 修改菜单验证
    function onEditFinish(data) {
        MenuApi.editMenu(data).then(() => {
            antd_1.message.success('修改成功');
            menu_1.default.setMenuData();
            setIsEditMenu(false);
        }).catch(() => {
            antd_1.message.error('修改失败');
        });
    }
    return (react_1.default.createElement("div", { className: 'menu' },
        react_1.default.createElement(antd_1.Card, { bodyStyle: {
                padding: '18px',
                width: '100%',
            } },
            react_1.default.createElement("div", { className: 'top' },
                react_1.default.createElement(antd_1.Button, { className: 'add-menu', type: "primary", icon: react_1.default.createElement(Icon.SearchOutlined, null), onClick: () => setIsAddMenu(true) }, "\u6DFB\u52A0\u83DC\u5355")),
            react_1.default.createElement("div", { className: 'content' },
                react_1.default.createElement(antd_1.Table, { indentSize: 20, dataSource: menu_1.default.MenuListData, columns: (0, constants_1.default)((_, record) => {
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(antd_1.Button, { type: "primary", shape: "circle", icon: react_1.default.createElement(Icon.EditOutlined, null), onClick: () => editMenu(record.id) }),
                            react_1.default.createElement(antd_1.Button, { type: "primary", shape: "circle", icon: react_1.default.createElement(Icon.DeleteOutlined, null) })));
                    }), expandable: {
                        defaultExpandAllRows: true,
                        expandedRowKeys: menu_1.default.MenuListKeys,
                        expandIcon: ({ expanded }) => {
                            // expanded: 是否展开
                            // record: 当前行数据
                            // onExpand: 点击展开的回调
                            return expanded ? (react_1.default.createElement(Icon.FileOutlined, null)) : (react_1.default.createElement(Icon.EyeOutlined, null));
                        }
                    } }))),
        react_1.default.createElement(my_form_1.default, { title: "\u521B\u5EFA\u83DC\u5355", formItem: formItem, open: isAddMenu, onCancel: () => setIsAddMenu(false), onFinish: AddMenu, handleCancel: () => setIsAddMenu(false), defaultValues: {
                is_point: false,
                code: '',
                pid: '',
                title: '',
            }, isAddMenu: true }),
        react_1.default.createElement(my_form_1.default, { title: "\u4FEE\u6539\u83DC\u5355", formItem: formItem, open: isEditMenu, onCancel: () => setIsEditMenu(false), onFinish: onEditFinish, handleCancel: () => setIsEditMenu(false), defaultValues: menu_1.default.MenuDetail, isEditMenu: true })));
}
exports.default = (0, mobx_react_1.observer)(Menu);
