// 定义state类型
export interface CompanyState {
  companyList: Company.companyList[];
}

// 设置初始数据
// 相当于vuex中的state
const initState: CompanyState = {
  companyList: []
};

// 默认导出reducer
export default function (state: CompanyState = initState, action: any) {
  switch (action.type) {
  case 'GET_COMPANY_LIST':
    return {
      ...state,
      companyList: action.payload
    };
  default:
    return state;
  }
}
