import React from 'react';
import {
  Menu,
} from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface'; // npm
import { MENU } from '@/constants/menu';
import { useNavigate } from 'react-router-dom';

export default function Sider() {

  const nav = useNavigate();

  function onMenuItemSelect(info: MenuInfo) {
    // 编程式导航
    nav(info.key); // router.push('路径');
  }

  return (
    <aside>
      <Menu
        className="sider"
        mode="inline"
        theme="light"
        items={ MENU }
        onClick={ onMenuItemSelect }
      />
    </aside>
  );
}