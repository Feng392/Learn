"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editMenu = exports.getMenuDetail = exports.addMenu = exports.getMenuList = void 0;
const req_1 = __importDefault(require("@/utils/req"));
// 获取菜单列表
const getMenuList = () => {
    return req_1.default.get('/menus');
};
exports.getMenuList = getMenuList;
// 新增菜单
const addMenu = (data) => {
    return req_1.default.post('/menus', data);
};
exports.addMenu = addMenu;
// 获取菜单详情
const getMenuDetail = (id) => {
    return req_1.default.get(`/menus/${id}`).then(res => res.data);
};
exports.getMenuDetail = getMenuDetail;
// 修改菜单
const editMenu = (params) => {
    return req_1.default.get('/menus', { params });
};
exports.editMenu = editMenu;
