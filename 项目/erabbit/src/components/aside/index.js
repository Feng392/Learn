"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
// 导入路由
const router_1 = require("@/router");
const menuRoutes = router_1.routes[0].children;
function Aside() {
    return (react_1.default.createElement(antd_1.Menu, { mode: "inline", theme: "light", items: menuItems }));
}
exports.default = Aside;
