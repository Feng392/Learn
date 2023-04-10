"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// 路由跳转
const react_router_dom_1 = require("react-router-dom");
require("./index.scss");
const antd_1 = require("antd");
const menu_1 = require("@/constants/menu");
function Asider(props) {
    // 声明路由跳转
    const nav = (0, react_router_dom_1.useNavigate)();
    function onMenuItemSelect(info) {
        // 编程式导航
        console.log(info.key);
        nav(info.key); // router.push('路径');
    }
    return (react_1.default.createElement("aside", { className: 'aside' },
        react_1.default.createElement(antd_1.Menu, { mode: "inline", theme: "light", items: menu_1.MENU, inlineCollapsed: props.collapsible, onClick: onMenuItemSelect })));
}
exports.default = Asider;
