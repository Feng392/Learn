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
const react_1 = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
// 引入组件
const index_1 = __importDefault(require("./components/index"));
const antd_1 = require("antd");
const Icon = __importStar(require("@ant-design/icons"));
const interview_1 = __importDefault(require("@/store/interview"));
const api = __importStar(require("@/api/interview"));
require("react-quill/dist/quill.snow.css");
const constants_1 = require("@/views/layout/views/interview-skills/constants");
const mobx_1 = require("mobx");
//
require("video-react/dist/video-react.css");
const video_react_1 = require("video-react");
// 当前ID
let currentId = -1;
// 面试技巧
function interview() {
    // loading
    const [loading, setLoading] = react_1.default.useState(true);
    // 文章请求参数
    const [articlesQuery, setArticlesQuery] = react_1.default.useState({
        page: 1,
        pagesize: 10,
    });
    (0, react_1.useEffect)(() => {
        (0, mobx_1.flowResult)(interview_1.default.setArticlesList(articlesQuery)).then(() => {
            setLoading(false);
        });
    }, []);
    // 切换分页器
    const onChangePage = (page, pageSize) => {
        console.log(page, pageSize);
        if (page !== 1 || pageSize !== 10) {
            //   清空 dataSource
            interview_1.default.tabArticlesList = [];
        }
        setLoading(true);
        console.log(page, pageSize);
        setArticlesQuery({ page, pagesize: pageSize });
        (0, mobx_1.flowResult)(interview_1.default.setArticlesList(articlesQuery)).then(() => {
            setLoading(false);
        });
    };
    // 新增技巧
    const [addSkillVisible, setaddSkillVisible] = react_1.default.useState(false);
    // 修改技巧
    const [editSkillVisible, setEditSkillVisible] = react_1.default.useState(false);
    function addSkill() {
        setaddSkillVisible(true);
    }
    function editSkill(id) {
        setEditSkillVisible(true);
        currentId = id;
    }
    // 关闭弹窗
    function addSkillCancel() {
        setaddSkillVisible(false);
    }
    function editSkillCancel() {
        setEditSkillVisible(false);
    }
    // 验证新增技巧
    function onAddSkillFinish(value) {
        value.id = null;
        api.addArticlesList(value).then(() => {
            antd_1.message.success('新增成功');
            setaddSkillVisible(false);
            (0, mobx_1.flowResult)(interview_1.default.setArticlesList(articlesQuery)).then(() => {
                setLoading(false);
            }).catch(() => {
                antd_1.message.error('新增失败');
            });
        });
    }
    // 验证修改技巧
    function onEditSkillFinish(value) {
        value.id = currentId;
        setLoading(true);
        api.editArticles(value, currentId).then(() => {
            antd_1.message.success('修改成功');
            setEditSkillVisible(false);
            (0, mobx_1.flowResult)(interview_1.default.setArticlesList(articlesQuery)).then(() => {
                setLoading(false);
            }).catch(() => {
                antd_1.message.error('修改失败');
            });
        });
    }
    // 改变文章操作状态
    function changeArticlesState(id, state) {
        api.changeArticlesState(id, Number(!state)).then(() => {
            antd_1.message.success('操作成功');
            (0, mobx_1.flowResult)(interview_1.default.setArticlesList(articlesQuery)).then(() => {
                setLoading(false);
            });
        });
    }
    // 播放视频
    const [videoVisible, setVideoVisible] = react_1.default.useState(false);
    function playVideo() {
        setVideoVisible(true);
    }
    return (react_1.default.createElement("div", { className: 'interview' },
        react_1.default.createElement(antd_1.Card, { bodyStyle: {
                padding: '18px',
                width: '100%',
            } },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: 'top' },
                    react_1.default.createElement(antd_1.Space, { size: 14 },
                        react_1.default.createElement(antd_1.Input, { "aria-label": "\u5173\u952E\u5B57", placeholder: "\u6839\u636E\u6587\u7AE0\u6807\u9898\u641C\u7D22" }),
                        react_1.default.createElement(antd_1.Input, { "aria-label": "\u72B6\u6001", placeholder: "\u8BF7\u9009\u62E9" }),
                        react_1.default.createElement(antd_1.Button
                        // onClick={ clearInput }
                        , null, "\u6E05\u7A7A"),
                        react_1.default.createElement(antd_1.Button, { type: "primary" }, "\u641C\u7D22"),
                        react_1.default.createElement(antd_1.Button, { className: 'add-skill', type: "primary", icon: react_1.default.createElement(Icon.SearchOutlined, null), onClick: () => addSkill() }, "\u65B0\u589E\u6280\u5DE7"))),
                react_1.default.createElement("div", { className: 'record' },
                    react_1.default.createElement(antd_1.Space, { size: 8 },
                        react_1.default.createElement(Icon.InfoCircleOutlined, null),
                        react_1.default.createElement("span", null,
                            "\u5171 ",
                            interview_1.default.ArticlesList?.items.length,
                            " \u6761\u8BB0\u5F55"))),
                react_1.default.createElement(antd_1.Table, { pagination: {
                        total: interview_1.default.ArticlesList?.counts,
                        showQuickJumper: true,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '20', '30'],
                        onChange: () => onChangePage,
                    }, loading: loading, dataSource: interview_1.default.tabArticlesList, columns: (0, constants_1.GET_TABLE_COLUMNS)(((text, record) => {
                        if (record.videoURL) {
                            return (react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement("div", { onClick: () => playVideo() },
                                    text,
                                    react_1.default.createElement(Icon.VideoCameraOutlined, null)),
                                react_1.default.createElement(antd_1.Modal, { destroyOnClose: true, open: videoVisible, onCancel: () => {
                                        setVideoVisible(false);
                                        console.log(videoVisible);
                                    } },
                                    react_1.default.createElement(video_react_1.Player, null,
                                        react_1.default.createElement("source", { src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" })))));
                        }
                        if (!record.videoURL) {
                            return (react_1.default.createElement("div", null, text));
                        }
                    }), (_, record) => {
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(antd_1.Button, { type: "text" }, "\u9884\u89C8"),
                            react_1.default.createElement(antd_1.Button, { type: "text", onClick: () => changeArticlesState(record.id, record.state) }, record.state ? '禁用' : '启用'),
                            react_1.default.createElement(antd_1.Button, { type: "text", disabled: record.state === 0, onClick: () => editSkill(record.id) }, "\u4FEE\u6539"),
                            react_1.default.createElement(antd_1.Popconfirm, { title: "\u63D0\u793A", description: "\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u7528\u6237\uFF0C\u662F\u5426\u7EE7\u7EED?", okText: "\u786E\u5B9A", cancelText: "\u53D6\u6D88" },
                                react_1.default.createElement(antd_1.Button, { disabled: record.state === 0, type: "text" }, "\u5220\u9664"))));
                    }) }))),
        addSkillVisible &&
            react_1.default.createElement(index_1.default, { title: '\u65B0\u589E\u6587\u7AE0', open: addSkillVisible, onCancel: addSkillCancel, onFinish: (values) => onAddSkillFinish(values) }),
        editSkillVisible &&
            react_1.default.createElement(index_1.default, { title: '\u4FEE\u6539\u6587\u7AE0', open: editSkillVisible, onCancel: editSkillCancel, onFinish: (values) => onEditSkillFinish(values), initialValues: interview_1.default.tabArticlesList
                    .map((item) => ({
                    title: item.title,
                    articleBody: item.articleBody,
                    id: item.id,
                    videoURL: item.videoURL,
                })).find((item) => item.id === currentId) })));
}
exports.default = (0, mobx_react_1.observer)(interview);
