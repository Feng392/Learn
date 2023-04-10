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
// 引入mobx
const mobx_react_1 = require("mobx-react");
const store_1 = __importDefault(require("@/store"));
const menu_1 = __importDefault(require("@/store/menu"));
const antd_1 = require("antd");
exports.default = (0, mobx_react_1.observer)((props) => {
    const [form] = antd_1.Form.useForm();
    // 更新表单数据
    (0, react_1.useEffect)(() => {
        if (props.defaultValues) {
            // form实例方法
            form.setFieldsValue(props.defaultValues);
        }
    }, [props.defaultValues]);
    // 监听获取到的菜单详情
    (0, react_1.useEffect)(() => {
        if (props.defaultValues) {
            form.setFieldsValue(props.defaultValues);
        }
    }, [props.defaultValues]);
    // 获取表单项
    function getFormItem() {
        // const [ TreeSelectValue, setTreeSelectValue ] = React.useState('');
        //
        // const onChangeTreeSelect = (newValue: string) => {
        //   setTreeSelectValue(newValue);
        // };
        return (props.formItem.map((item) => {
            switch (item.type) {
                case 'Input':
                    return (react_1.default.createElement(antd_1.Form.Item, { label: item.label, name: item.name, rules: item.rules, key: item.name },
                        react_1.default.createElement(antd_1.Input, null)));
                case 'Input.Password':
                    return (react_1.default.createElement(antd_1.Form.Item, { label: item.label, name: item.name, rules: item.rules, key: item.name },
                        react_1.default.createElement(antd_1.Input.Password, null)));
                case 'Select':
                    return (react_1.default.createElement(antd_1.Form.Item, { label: item.label, name: item.name, rules: item.rules, key: item.name },
                        react_1.default.createElement(antd_1.Select, null, getPermissionGroup())));
                case 'TreeSelect':
                    return (react_1.default.createElement(antd_1.Form.Item, { label: item.label, name: item.name, rules: item.rules, key: item.name },
                        react_1.default.createElement(antd_1.TreeSelect, { treeDefaultExpandAll: true, style: { width: '100%' }, treeData: menu_1.default.MenuListPermission, switcherIcon: null })));
                case 'Input.TextArea':
                    return (react_1.default.createElement(antd_1.Form.Item, { label: item.label, name: item.name, rules: item.rules, key: item.name },
                        react_1.default.createElement(antd_1.Input.TextArea, null)));
                case 'Radio.Group':
                    return (react_1.default.createElement(antd_1.Form.Item, { label: item.label, name: item.name, rules: item.rules, key: item.name },
                        react_1.default.createElement(antd_1.Radio.Group, { disabled: props.isEditMenu }, item.children.map((child) => (react_1.default.createElement(antd_1.Radio, { value: child.value, key: child.value }, child.title))))));
                default:
                    break;
            }
            return null;
        }));
    }
    // 获取权限分组
    function getPermissionGroup() {
        return store_1.default.userPermissionGroup
            .map((item) => (react_1.default.createElement(antd_1.Select.Option, { value: item.id, key: item.id }, item.title)));
    }
    return (react_1.default.createElement(antd_1.Modal, { forceRender: true, title: props.title, open: props.open, onCancel: props.onCancel, footer: null, destroyOnClose: true },
        react_1.default.createElement(antd_1.Form, { initialValues: props.defaultValues, labelCol: { span: 5 }, onFinish: (values) => props.onFinish(values), form: form },
            getFormItem(),
            react_1.default.createElement(antd_1.Form.Item, { className: 'formBtns' },
                react_1.default.createElement(antd_1.Space, { size: 10 },
                    react_1.default.createElement(antd_1.Button, { type: "dashed", htmlType: "reset", onClick: props.handleCancel }, "\u53D6\u6D88"),
                    react_1.default.createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "\u786E\u8BA4"))))));
});
