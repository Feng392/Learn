import req from "@/utils/req";
// 获取企业列表
export const getCompanyList = (query: Company.companyParams) => {
  return req.get<any>("/companys", { params: query }).then((res) => res.data);
};