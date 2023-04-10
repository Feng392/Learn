import { makeObservable, observable, flow, } from 'mobx';
import { getArticlesList } from '@/api/interview';

export default new class Store {
  // 文章列表
  public ArticlesList: Interview.ArticlesData | null = null;
  public tabArticlesList: Interview.tabArticleslist[] = [
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
  public constructor() {
    makeObservable(this, {
      ArticlesList: observable,
      tabArticlesList: observable,
      setArticlesList: flow,
    });
  }

  //   获取文章列表
  public * setArticlesList(query: Interview.ArticlesParams) {
    const data: Interview.ArticlesData = yield getArticlesList(query);
    this.ArticlesList = data;
    this.tabArticlesList = data.items.map((d, i) => ({
      ...d,
      key: d.id,
      order: i + 1,
    }));
    console.log('this.tabArticlesList', this.tabArticlesList);
  }
};