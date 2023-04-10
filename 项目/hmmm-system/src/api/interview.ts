import req from '@/utils/req';

// 获取文章列表
export const getArticlesList = (query: Interview.ArticlesParams) => {
  return req.get('/articles', {params: query}).then(res => res.data);
};

// 新增文章列表
export function addArticlesList(data: Interview.addArticlesData) {
  return req.post('/articles', data);
}

// 文章操作状态（禁用或者启用）
export function changeArticlesState(id: number, state: number | boolean) {
  return req.post(`/articles/${ id }/${ state }`);
}

// 修改文章
export function editArticles(data: Interview.addArticlesData, id: number) {
  return req.put(`/articles/${ id }`, data);
}