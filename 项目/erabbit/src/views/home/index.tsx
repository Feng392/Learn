import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
// 导入样式
import './home.scss'

// 导入图标
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const {Header, Sider, Content} = Layout;

export default function Index() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <div className='layout'>
      <header>
        122
      </header>
      <div className='content'>
        <aside>
          <Menu />
          <main>
            <Outlet />
          </main>
        </aside>
      </div>
     
    </div>
  )
}