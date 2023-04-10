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
exports.routes = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
// 导入图标
const Icons = __importStar(require("@ant-design/icons"));
// 路由懒加载
const Home = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../views/home'))));
const Login = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../views/login'))));
const Page1 = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../views/home/views/page1/page1'))));
const Page2 = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require('../views/home/views/page2/index'))));
exports.routes = [
    {
        path: "/home",
        element: react_1.default.createElement(Home, null),
        children: [
            {
                path: "/home/page1",
                element: react_1.default.createElement(Page1, null),
                meta: {
                    title: '页面1',
                    name: 'page1',
                    icon: react_1.default.createElement(Icons.MailOutlined, null),
                    children: [],
                }
            },
            {
                path: "/home/page2",
                element: react_1.default.createElement(Page2, null),
                meta: {
                    title: '页面2',
                    name: 'page2',
                    icon: react_1.default.createElement(Icons.MailOutlined, null)
                }
            },
        ]
    },
    {
        path: "/",
        element: react_1.default.createElement(Login, null),
    },
];
exports.default = (0, react_router_dom_1.createBrowserRouter)(exports.routes);
