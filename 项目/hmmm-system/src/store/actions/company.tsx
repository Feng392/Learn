// action用来以何种方式修改state，但是不直接修改，而是通过dispatch通知reducers修改
import * as api from "@/api/company";
import { Dispatch, AnyAction } from "redux";

// interface CompanyAction {
//   type: any;
//   payload: any;
//   value: any;
// }

// 定义页面传过来的参数数据类型
interface companyParams {
  page: string;
  pagesize: string;
}

// redux-thunk中间件的作用是使action可以返回函数
export function getCompanyAction(params: companyParams) {
  // 返回一个action函数 留给页面调用
  return async (dispatch: Dispatch<AnyAction>) => {
    // 调用接口
    const res = await api.getCompanyList(params);
    // 通过dispatch通知reducers修改state
    dispatch({
      type: "GET_COMPANY_LIST",
      payload: res.data.items,
    });
  };
}