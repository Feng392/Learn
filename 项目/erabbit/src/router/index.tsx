import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
// 导入图标
import * as Icons from '@ant-design/icons';

// 路由懒加载
const Home = React.lazy(() => import('../views/home'));
const Login = React.lazy(() => import('../views/login'));
const Page1 = React.lazy(() => import('../views/home/views/page1/page1'));
const Page2 = React.lazy(() => import('../views/home/views/page2/index'));


export  const routes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
    children:[
      {
        path: "/home/page1",
        element: <Page1 />,
        meta: {
          title: '页面1',
          name: 'page1',
          icon: <Icons.MailOutlined />,
          children: [],
        }
      },
      {
        path: "/home/page2",
        element: <Page2 />,
        meta: {
          title: '页面2',
          name: 'page2',
          icon: <Icons.MailOutlined />
        }
      },
    ]
  },
  {
    path: "/",
    element: <Login />,
  },
]
export default createBrowserRouter(routes)