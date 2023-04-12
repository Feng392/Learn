// action用来以何种方式修改state，但是不直接修改，而是通过dispatch通知reducers修改
import * as api from '@/api/company';
import { Dispatch } from 'redux';

interface getCompanyAction {
  type: 'UPDATE' | 'ERROR';
  value: any;
}

// 定义页面传过来的参数数据类型
interface companyParams {
  page: string;
  pagesize: string;
}

// redux-thunk中间件的作用是使action可以返回函数
export function getCompanyAction(params: companyParams) {
  // 返回一个action函数 留给页面调用
  return function (dispatch: Dispatch<any>) {
    // 返回Promise让中间件处理，我们不用管
    // 在这里发请求 并触发dispatch(action) 注意这里的action就是用来告知reducer如何修改state的
    return (
      api
        .getCompanyList(params)
        // 请求成功
        .then((res) =>
          dispatch({
            type: 'UPDATE',
            value: res.data.result
          })
        )
        // 请求失败
        .catch((err) =>
          dispatch({
            type: 'ERROR'
          })
        )
    );
  };
}
