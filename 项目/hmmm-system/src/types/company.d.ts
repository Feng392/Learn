// 企业命名空间
declare namespace Company {
  interface companyParams {
    page: string;
    pagesize: string;
  }

  //   获取公司列表返回数据

  interface companyList {
    addDate: string;
    city: string;
    company: string;
    creatorID: number;
    id: number;
    isFamous: number;
    number: string;
    province: string;
    remarks: string;
    shortName: string;
    state: number;
    tags: string;
    username: string;
  }

  interface companyData {
    counts: number;
    items: companyList[];
    page: string;
    pages: number;
    pagesize: string;
  }
}