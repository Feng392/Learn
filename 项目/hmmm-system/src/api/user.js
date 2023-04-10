"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUser = exports.getUserDetail = exports.addUser = exports.getUserPermissionGroup = exports.getUserList = exports.getProfile = void 0;
const req_1 = __importDefault(require("@/utils/req"));
// 获取用户名
function getProfile() {
    return req_1.default.post('/frame/profile');
}
exports.getProfile = getProfile;
// 获取用户列表
function getUserList(query) {
    // @ts-ignore
    return req_1.default.get('/users', {
        params: query,
    });
}
exports.getUserList = getUserList;
// 获取用户权限分组
function getUserPermissionGroup() {
    return req_1.default.get('/permissions/simple').then((res) => {
        return res.data;
    });
}
exports.getUserPermissionGroup = getUserPermissionGroup;
// 新增用户
function addUser(data) {
    return req_1.default.post('/users', data);
}
exports.addUser = addUser;
// 获取用户详情
function getUserDetail(id) {
    return req_1.default.get(`/users/${id}`).then((res) => {
        return res.data;
    });
}
exports.getUserDetail = getUserDetail;
// 编辑用户
function editUser(id, data) {
    return req_1.default.put(`/users/${id}`, data);
}
exports.editUser = editUser;
// 删除用户
function deleteUser(id) {
    return req_1.default.delete(`/users/${id}`);
}
exports.deleteUser = deleteUser;
