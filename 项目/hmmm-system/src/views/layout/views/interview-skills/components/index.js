"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mobx_react_1 = require("mobx-react");
const antd_1 = require("antd");
// 文档格式
const react_quill_1 = __importDefault(require("react-quill"));
require("react-quill/dist/quill.snow.css");
exports.default = (0, mobx_react_1.observer)((props) => {
    const [form] = antd_1.Form.useForm();
    // 导入文档组件
    const [reactQuillValue, setReactQuillValue] = react_1.default.useState('');
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(antd_1.Modal, { forceRender: true, footer: null, title: props.title, open: props.open, onCancel: props.onCancel, destroyOnClose: true },
            react_1.default.createElement(antd_1.Form, { labelCol: { span: 5 }, onFinish: props.onFinish, form: form, initialValues: props.initialValues },
                react_1.default.createElement(antd_1.Form.Item, { label: "\u6587\u7AE0\u6807\u9898", name: "title", rules: [{ required: true, message: 'Please input your username!' }] },
                    react_1.default.createElement(antd_1.Input, null)),
                react_1.default.createElement(antd_1.Form.Item, { label: "\u6587\u7AE0\u5185\u5BB9", name: "articleBody", rules: [{ required: true, message: 'Please input your content!' }] },
                    react_1.default.createElement(react_quill_1.default, { style: {
                            height: '120px',
                            width: '100%',
                            marginBottom: '40px'
                        }, theme: "snow", value: reactQuillValue, onChange: setReactQuillValue })),
                react_1.default.createElement(antd_1.Form.Item, { label: "\u89C6\u9891\u5730\u5740", name: "videoURL", rules: [{ message: 'Please input your username!' }] },
                    react_1.default.createElement(antd_1.Input, null)),
                react_1.default.createElement(antd_1.Form.Item, { className: 'formBtns' },
                    react_1.default.createElement(antd_1.Space, { size: 10 },
                        react_1.default.createElement(antd_1.Button, { type: "dashed", htmlType: "reset", onClick: props.onCancel }, "\u53D6\u6D88"),
                        react_1.default.createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "\u786E\u8BA4")))))));
});
