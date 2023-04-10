import React from 'react';
import type { MenuProps } from 'antd';

// 引入图标
import * as Icon from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];
export const MENU: MenuItem[] = [
  {
    icon: <Icon.PieChartOutlined/>,
    label: '数据概览',
    key: '/data-view',
  },
  {
    icon: <Icon.UsergroupDeleteOutlined/>,
    label: '企业管理',
    key: '/company-manage',
  },
  {
    icon: <Icon.CalculatorOutlined/>,
    label: '面试技巧',
    key: '/interview-skill',
  },
  {
    icon: <Icon.TeamOutlined/>,
    label: '后台管理',
    key: '/backstage-manage',
    children: [
      {
        icon: <Icon.AppstoreOutlined/>,
        label: '用户',
        key: '/backstage-manage/user',
      },
      {
        icon: <Icon.AppstoreOutlined/>,
        label: '菜单',
        key: '/backstage-manage/menu',
      },
    ]
  },
];