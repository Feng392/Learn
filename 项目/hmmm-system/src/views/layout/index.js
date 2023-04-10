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
const sider_1 = __importDefault(require("@/components/sider"));
const header_1 = __importDefault(require("@/components/header"));
// 路由视窗
const react_router_dom_1 = require("react-router-dom");
require("./index.scss");
// 导入api
const userApi = __importStar(require("@/api/user"));
// 导入mobx
const mobx_react_1 = require("mobx-react");
function Layout() {
    // 获取用户信息
    userApi.getProfile().then((res) => {
        console.log(res);
    });
    const [collapsed, setCollapsed] = (0, react_1.useState)(false);
    // 改变侧边栏状态
    function toggleCollapsed(x) {
        setCollapsed(x);
    }
    return (react_1.default.createElement("div", { className: "layout" },
        react_1.default.createElement(header_1.default, { collapsed: collapsed, setCollapsed: toggleCollapsed }),
        react_1.default.createElement("section", null,
            react_1.default.createElement(sider_1.default, { collapsible: collapsed }),
            react_1.default.createElement("main", null,
                react_1.default.createElement("div", { className: 'nav' }, "xxxx"),
                react_1.default.createElement(react_router_dom_1.Outlet, null)))));
}
exports.default = (0, mobx_react_1.observer)(Layout);
