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
const mobx_1 = require("mobx");
const menuApi = __importStar(require("@/api/menu"));
exports.default = new class Store {
    // 声明变量
    counter = 1;
    // 菜单返回数据
    MenuListData = [];
    // 菜单展开的keys
    get MenuListKeys() {
        return (function deal(data) {
            return data.filter((item) => item.children.length > 0)
                .map(item => [item.key, ...deal(item.children)])
                .flat(Infinity);
        })(this.MenuListData);
    }
    // 添加菜单权限组名称列表
    get MenuListPermission() {
        return (function deal(data) {
            return data.map((item) => ({
                ...item,
                value: item.key,
                disabled: !(item.children.length > 0),
                //  递归 children
                children: deal(item.children || []),
            }));
        })(this.MenuListData);
    }
    // 获取菜单详情
    MenuDetail = null;
    //   初始化store
    constructor() {
        (0, mobx_1.makeObservable)(this, {
            counter: mobx_1.observable,
            MenuListData: mobx_1.observable,
            setMenuData: mobx_1.flow,
            MenuListKeys: mobx_1.computed,
            MenuDetail: mobx_1.observable,
            setMenuDetail: mobx_1.flow,
        });
    }
    *setMenuData() {
        // 示例 const data: User.ListData = yield api.getUsers(query);
        const data = yield menuApi.getMenuList();
        this.MenuListData = (function formatData(data) {
            return data.map((item) => ({
                ...item,
                key: item.id,
                children: formatData(item.childs || item.points || []),
            }));
        })(data.data);
        console.log('this.MenuListData', this.MenuListData);
    }
    //  获取菜单详情
    *setMenuDetail(id) {
        this.MenuDetail = yield menuApi.getMenuDetail(id);
        console.log('this.MenuDetail', this.MenuDetail);
    }
};
