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
const layout_1 = __importDefault(require("@/views/layout"));
const login_1 = __importDefault(require("@/views/login"));
// import store from '@/store';
// 引入store实例
exports.routes = [
    {
        path: '/',
        element: react_1.default.createElement(layout_1.default, null),
        children: [
            {
                path: '/data-view',
                async lazy() {
                    const Component = await Promise.resolve().then(() => __importStar(require('@/views/layout/views/data-view')));
                    return {
                        Component: Component.default,
                    };
                },
            },
            {
                path: '/company-manage',
                async lazy() {
                    const Component = await Promise.resolve().then(() => __importStar(require('@/views/layout/views/company-manage')));
                    return { Component: Component.default };
                },
            },
            {
                path: '/interview-skill',
                async lazy() {
                    const Component = await Promise.resolve().then(() => __importStar(require('@/views/layout/views/interview-skills')));
                    return { Component: Component.default };
                },
            },
            {
                path: '/backstage-manage',
                children: [
                    {
                        path: '/backstage-manage/user',
                        async lazy() {
                            const Component = await Promise.resolve().then(() => __importStar(require('@/views/layout/views/backstage-manage/user')));
                            return { Component: Component.default };
                        }
                    },
                    {
                        path: '/backstage-manage/menu',
                        async lazy() {
                            const Component = await Promise.resolve().then(() => __importStar(require('@/views/layout/views/backstage-manage/menu')));
                            return { Component: Component.default };
                        }
                    }
                ]
            },
        ],
    },
    {
        path: '/login',
        element: react_1.default.createElement(login_1.default, null),
    },
];
exports.default = (0, react_router_dom_1.createBrowserRouter)(exports.routes);
