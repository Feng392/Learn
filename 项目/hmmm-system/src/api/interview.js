"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editArticles = exports.changeArticlesState = exports.addArticlesList = exports.getArticlesList = void 0;
const req_1 = __importDefault(require("@/utils/req"));
// 获取文章列表
const getArticlesList = (query) => {
    return req_1.default.get('/articles', { params: query }).then(res => res.data);
};
exports.getArticlesList = getArticlesList;
// 新增文章列表
function addArticlesList(data) {
    return req_1.default.post('/articles', data);
}
exports.addArticlesList = addArticlesList;
// 文章操作状态（禁用或者启用）
function changeArticlesState(id, state) {
    return req_1.default.post(`/articles/${id}/${state}`);
}
exports.changeArticlesState = changeArticlesState;
// 修改文章
function editArticles(data, id) {
    return req_1.default.put(`/articles/${id}`, data);
}
exports.editArticles = editArticles;
