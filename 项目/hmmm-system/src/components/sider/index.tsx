import React from 'react';
// 路由跳转
import { useNavigate } from 'react-router-dom';
import './index.scss';
import {
  Menu,
} from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface'; // npm
import { MENU } from '@/constants/menu';


export interface AsideProps {
    collapsible: boolean;
}
export default function Asider(props: AsideProps) {
  // 声明路由跳转
  const nav = useNavigate();

  function onMenuItemSelect(info: MenuInfo) {
    // 编程式导航
    console.log(info.key);
    nav(info.key); // router.push('路径');
  }

  return (
    <aside className='aside'>
      <Menu
        mode="inline"
        theme="light"
        items={ MENU }
        inlineCollapsed={ props.collapsible }
        onClick={ onMenuItemSelect }
      />
    </aside>
  );
}