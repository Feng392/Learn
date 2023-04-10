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
const userApi = __importStar(require("@/api/user"));
exports.default = new class Store {
    // 声明变量
    counter = 1;
    // 用户返回数据
    usersData = null;
    // 用户列表
    userList = [];
    // 用户权限分组
    userPermissionGroup = [];
    // 获取用户详情
    userDetail = null;
    //   初始化store
    constructor() {
        (0, mobx_1.makeObservable)(this, {
            counter: mobx_1.observable,
            usersData: mobx_1.observable,
            userList: mobx_1.observable,
            userPermissionGroup: mobx_1.observable,
            userDetail: mobx_1.observable,
            setUsersData: mobx_1.action,
            setPermissionGroup: mobx_1.action,
            setUserDetail: mobx_1.flow,
        });
    }
    setUsersData = async (query) => {
        const res = await userApi.getUserList(query);
        this.usersData = res.data;
        this.userList = res.data.list.map((item) => ({
            ...item,
            key: item.id,
        }));
    };
    // 获取用户权限分组
    setPermissionGroup = async () => {
        this.userPermissionGroup = await userApi.getUserPermissionGroup();
    };
    //   获取用户详情
    *setUserDetail(id) {
        const res = yield userApi.getUserDetail(id);
        this.userDetail = res;
        console.log('this.userDetail', this.userDetail);
    }
};
