"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_2 = require("react");
// 导入样式
require("./home.scss");
const antd_1 = require("antd");
const { Header, Sider, Content } = antd_1.Layout;
function Index() {
    const [collapsed, setCollapsed] = (0, react_2.useState)(false);
    const { token: { colorBgContainer }, } = antd_1.theme.useToken();
    return (react_1.default.createElement("div", { className: 'layout' },
        react_1.default.createElement("header", null, "122"),
        react_1.default.createElement("div", { className: 'content' },
            react_1.default.createElement("aside", null,
                react_1.default.createElement(antd_1.Menu, null),
                react_1.default.createElement("main", null,
                    react_1.default.createElement(react_router_dom_1.Outlet, null))))));
}
exports.default = Index;
