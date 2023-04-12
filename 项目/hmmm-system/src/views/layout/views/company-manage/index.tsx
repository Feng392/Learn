import React from 'react';

// 提供 connect装饰者函数 该函数可以把《页面组件》变成《注入了store数据的页面组件》
import { useDispatch, useSelector } from 'react-redux';
// 引入我们之前写好的action函数
import { StoreState } from '@/store';
import { getCompanyAction } from '@/store/actions/company';
//  引入我们之前写好的接口函数
import * as api from '@/api/company';
function Page2() {
  const companyList = useSelector<StoreState, any>(
    (state) => state.company.companyList
  );
  const dispatch = useDispatch();

  // mounted
  React.useEffect(() => {
    console.log(123);

    // 调用接口
    const action = getCompanyAction({ page: '1', pagesize: '10' });
    // 调用action
    dispatch(action as any);
  }, []);
  return (
    <div>
      公司管理
      {companyList.map((item: any) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}

export default Page2;