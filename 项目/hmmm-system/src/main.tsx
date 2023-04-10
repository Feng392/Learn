import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '@/assets/styles/main.scss';
import router from '@/router';
// 国际化
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={ zhCN }>
    <RouterProvider router={ router }/>
  </ConfigProvider>,
);