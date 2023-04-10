"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./login.scss");
// 导入图标
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
function Index() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onLogin = (props) => {
        //   路由跳转
        props.history.push('/home');
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (react_1.default.createElement("div", { className: "login" },
        "log",
        react_1.default.createElement("div", { className: 'box' },
            react_1.default.createElement("div", { className: 'content' },
                react_1.default.createElement("div", { className: 'title' },
                    react_1.default.createElement(icons_1.QqOutlined, null),
                    react_1.default.createElement("span", null, "\u7528\u6237\u767B\u5F55"),
                    react_1.default.createElement(icons_1.AmazonOutlined, null)),
                react_1.default.createElement("div", { className: 'form' },
                    react_1.default.createElement(antd_1.Form, { name: "basic", labelCol: { span: 8 }, wrapperCol: { span: 16 }, style: { maxWidth: 600 }, initialValues: {
                            remember: true,
                            username: 'root@admin.com',
                            password: '123456'
                        }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off" },
                        react_1.default.createElement(antd_1.Form.Item, { name: "username", rules: [{ required: true, message: 'Please input your username!' }] },
                            react_1.default.createElement(antd_1.Input, null)),
                        react_1.default.createElement(antd_1.Form.Item, { name: "password", rules: [{ required: true, message: 'Please input your password!' }] },
                            react_1.default.createElement(antd_1.Input.Password, null)),
                        react_1.default.createElement(antd_1.Form.Item, { name: "remember", valuePropName: "checked", wrapperCol: { offset: 8, span: 16 } },
                            react_1.default.createElement(antd_1.Checkbox, null, "Remember me")),
                        react_1.default.createElement(antd_1.Form.Item, { wrapperCol: { offset: 8, span: 16 } },
                            react_1.default.createElement(antd_1.Button, { type: "primary", htmlType: "submit", onClick: onLogin }, "Submit"))))))));
}
exports.default = Index;
