import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import Layout from '@/views/layout';
import Login from '@/views/login';
// import store from '@/store';

// 引入store实例
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/data-view',
        async lazy() {
          const Component = await import('@/views/layout/views/data-view');
          return {
            Component: Component.default,
          };
        },
      },
      {
        path: '/company-manage',
        async lazy() {
          const Component = await import('@/views/layout/views/company-manage');
          return {Component: Component.default};
        },
      },
      {
        path: '/interview-skill',
        async lazy() {
          const Component = await import('@/views/layout/views/interview-skills');
          return {Component: Component.default};
        },
      },
      {
        path: '/backstage-manage',
        children: [
          {
            path: '/backstage-manage/user',
            async lazy() {
              const Component = await import('@/views/layout/views/backstage-manage/user');
              return {Component: Component.default};
            }
          },
          {
            path: '/backstage-manage/menu',
            async lazy() {
              const Component = await import('@/views/layout/views/backstage-manage/menu');
              return {Component: Component.default};
            }
          }
        ]
      },
    ],
  },
  {
    path: '/login',
    element: <Login/>,
  },
];

export default createBrowserRouter(routes);