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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./index.scss");
// 路由跳转
const react_router_dom_1 = require("react-router-dom");
// 引入api
const loginApi = __importStar(require("@/api/login"));
// 导入图标
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
// 消息通知
const Context = react_1.default.createContext({ name: 'Default' });
function Index() {
    // 通知提醒框
    const [api, contextHolder] = antd_1.notification.useNotification();
    const openNotification = (placement, err) => {
        api.info({
            message: `${err}`,
            placement,
        });
    };
    const contextValue = (0, react_1.useMemo)(() => ({ name: '登录失败' }), []);
    // 声明路由跳转
    const nav = (0, react_router_dom_1.useNavigate)();
    const onFinish = (values) => {
        loginApi.login(values).then((res) => {
            // 把token存到sessionStorage
            sessionStorage.setItem('token', res.data.token);
            //   路由跳转
            nav('/');
        })
            .catch((err) => {
            console.log(err);
            openNotification('topRight', err.response.data.error || '登录失败');
        });
    };
    // 登录
    const onLogin = () => {
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (react_1.default.createElement(Context.Provider, { value: contextValue },
        contextHolder,
        react_1.default.createElement("div", { className: "login" },
            react_1.default.createElement("div", { className: 'loginBox' }),
            react_1.default.createElement("div", { className: 'box' },
                react_1.default.createElement("div", { className: 'content' },
                    react_1.default.createElement("div", { className: 'title' },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement(icons_1.QqOutlined, null)),
                        react_1.default.createElement("span", null, "\u7528\u6237\u767B\u5F55"),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement(icons_1.AmazonOutlined, null))),
                    react_1.default.createElement("div", { className: 'form' },
                        react_1.default.createElement(antd_1.Form, { name: "basic", style: { maxWidth: 600 }, 
                            // 初始值， 只记录第一次
                            initialValues: {
                                remember: true,
                                username: 'root@admin.com',
                                password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'
                            }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off" },
                            react_1.default.createElement(antd_1.Form.Item, { name: "username", rules: [
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                        // 邮箱正则
                                        pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-])+$/,
                                    }
                                ] },
                                react_1.default.createElement(antd_1.Input, { className: 'username' })),
                            react_1.default.createElement(antd_1.Form.Item, { name: "password", rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    }
                                ] },
                                react_1.default.createElement(antd_1.Input.Password, { className: 'password' })),
                            react_1.default.createElement(antd_1.Form.Item, { name: "remember", valuePropName: "checked", wrapperCol: { offset: 8, span: 16 } },
                                react_1.default.createElement(antd_1.Checkbox, null, "Remember me")),
                            react_1.default.createElement(antd_1.Form.Item, { className: 'logining' },
                                react_1.default.createElement(antd_1.Button, { className: 'logining', type: "primary", htmlType: "submit", onClick: onLogin }, "Submit"))))))))
    // 新增用户
    );
}
exports.default = Index;
