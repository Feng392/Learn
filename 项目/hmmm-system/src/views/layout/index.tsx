import React, { useState } from 'react';
import Sider from '@/components/sider';
import Header from '@/components/header';
// 路由视窗
import { Outlet } from 'react-router-dom';
import './index.scss';
// 导入api
import * as userApi from '@/api/user';
// 导入mobx
import { observer } from 'mobx-react';

function Layout() {

  // 获取用户信息
  userApi.getProfile().then((res) => {
    console.log(res);
  });
  const [ collapsed, setCollapsed ] = useState(false);

  // 改变侧边栏状态
  function toggleCollapsed(x: boolean) {
    setCollapsed(x);
  }

  return (
    <div className="layout">
      <Header
        collapsed={ collapsed }
        setCollapsed={ toggleCollapsed }
      />
      <section>
        <Sider collapsible={ collapsed }/>
        <main>
          <div className='nav'>
              xxxx
          </div>
          <Outlet/>
        </main>
      </section>
    </div>
  );
}

export default observer(Layout);