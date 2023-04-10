"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const interview_1 = require("@/api/interview");
exports.default = new class Store {
    // 文章列表
    ArticlesList = null;
    tabArticlesList = [
        {
            visits: 0,
            videoURL: '1',
            articleBody: '',
            createTime: '',
            creatorID: 0,
            id: 0,
            state: 0,
            title: '',
            key: 0,
            username: '',
            order: 0,
        }
    ];
    //   初始化store
    constructor() {
        (0, mobx_1.makeObservable)(this, {
            ArticlesList: mobx_1.observable,
            tabArticlesList: mobx_1.observable,
            setArticlesList: mobx_1.flow,
        });
    }
    //   获取文章列表
    *setArticlesList(query) {
        const data = yield (0, interview_1.getArticlesList)(query);
        this.ArticlesList = data;
        this.tabArticlesList = data.items.map((d, i) => ({
            ...d,
            key: d.id,
            order: i + 1,
        }));
        console.log('this.tabArticlesList', this.tabArticlesList);
    }
};
