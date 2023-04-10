// 面试技巧命名空间
declare namespace Interview {
  // 获取文章列表请求参数
  interface ArticlesParams {
    page: number;
    pagesize: number;
  }

//   // 获取文章列表响应数据
  interface ArticlesItems {
    articleBody: string;
    createTime: string;
    creatorID: number;
    id: number;
    state: 0 | 1 | 2;
    title: string;
    username: string;
    videoURL: string | null;
    visits: number;
  }

  interface ArticlesData {
    counts: number;
    items: ArticlesItems[];
    page: string;
    pages: 2;
    pagesize: string;
  }

//   antd 表格需要的数据
  interface tabArticleslist extends ArticlesItems {
    key: number;
    order: number
  }

//   新增文章列请求参数
  interface addArticlesData {
    articleBody: string;
    id: number | null;
    title: string;
    videoURl: string | null;
  }
}