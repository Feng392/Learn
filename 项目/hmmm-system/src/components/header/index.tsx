import React from 'react';
import './index.scss';
// 路由跳转
import { useNavigate } from 'react-router-dom';
// 引入图标
import * as Icon from '@ant-design/icons';
import {
  Popover,
  Tooltip,
  Input,
} from 'antd';
import store from '@/store';

export interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

function Header(props: HeaderProps) {
  const [ hasSearchInput, setHasSearchInput ] = React.useState(false);
  // 声明路由跳转
  const nav = useNavigate();
  // 用户名气泡卡片
  const homeContent = (
    <div>
      <div
        style={
          {
            margin: 'auto',
            height: '30px',
            borderBottom: '1px solid #aaa',
            cursor: 'pointer'
          } }
        onClick={ () => nav('/') }
      >首页
      </div>
      <div
        style={ {height: '30px', padding: '10px 0', cursor: 'pointer'} }
        onClick={ () => quitLogin() }
      >
          退出登录
      </div>
    </div>
  );

  // 退出登录
  function quitLogin() {
    sessionStorage.removeItem('token');
    nav('/login');
  }

  // 搜索
  function onSearch() {
    setHasSearchInput(!hasSearchInput);
  }

  return (
    <header>
      <div className='left'>
        <div className={ `logo ${ props.collapsed ? 'active' : '' }` }>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAAcCAYAAABVj5w5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MDUxYmY2OC1jN2IxLWVkNGQtYmE5Mi1iYTdmOWMxZjhlNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzQ4MkREQUMzOTAwMTFFOUFCODZCMEI3QTJBNUI2ODIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzQ4MkREQUIzOTAwMTFFOUFCODZCMEI3QTJBNUI2ODIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA0YzYwYjMxLWY3OTItNjg0My05YmEwLTNkYjQ5YzRkYzNmZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBmNzBkNzljLTIxNzMtMTFlNi04NzM2LWQ3YjNkYmRhMTkwNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq1J50YAAAUHSURBVHja7FpNiBRHFO5Zl93oIWFCPHkQWi9CAkk69wSdFUXBVZyLkIT8MJtATkEyezHxIDh7DKK4A3tRFNkRFRUJmWaTQCAkMBBIjrt92uSgsoO5rQHHr9hXUKntrn5dXW1mh/7gY5jq6tfTVV+9eu/VVAaAl4xnYB285dlj5/r6+k18vpLUYXJy8k2vxNCikiISgX/Bk+BdG4GAS+Dr4gvEkiSSSjkVW1skAk/BwzThXAjP8QP4ln5BF0spkuHGOLPfBHgfPEITzxHI93ECIVGoQpljK7qyoSXo2seHb70yKpWwnHoehA/hehKJf8CD4K+GPjvAB+C7DHvfQixfQTRPM4qkiY9WDpFUUgamm8P2lMFug2I8V+jgeW3FfpBnXGLQA2fHMt70sslDAC+Rx+EI5DLYhEBu5pzsdwQrBPFS8hp9fxWcUq8VhIDowk6twN/pk/1qFndig0fgG8IJKZwA7zLvvwqOg4v03eNQ+c1N6QHF6lRXvnpNub4CVvVrjt1yN48HUuyI37pS4PYxT2PuM/tbi0TgIbiXJnAbeJt53zUS1DWlzVok9H0NrCVcWyE372UVCQmskWGxdXNOoE925gsUSSYRiuEaz/E8kd5+CJ4Fr4DTjHvugR+BF8BTDt+9TXt9qL1gk7aetqXdumKfg5AjBEPQLberSIregAjvFcXYrxq2vSo9u8Ow34f9Xp7tRuAyOAYuMPsvgdvBSzHX8nqSQLpPbSuqq4Nh4UkGUmgp/YIMfZsDN2gm2K85st/lepIF8JOY9uvgF+BF8GPGeP8EHgW/AT936DoHm/bPmGsFhSH6CpXZABdTmscKEgLrLrX3tLY0qPfIrCcu82pRv47Wxq6TiExlGTyvtC2CH5Chzxg/9jfwGP3opqNJ6RgmRAx4I2FAMsUH0u0yMwbrWg2lrn5c/YYE3tP6s9JXeY/sn2C/T1tXqLVlKqa1qPZxhmKK98Fz4GnGvb9TXeVtut9NmXhjL46SXL+jgpmc+IjrSUa1SMcNXL8mj3ID/JJZb/iTBPLEMxzu2aabaZOb0qfDCGblFtLlblf69pdWtNNQGxS8Lxrshy5E4lEG86m29SRBpFgHwEcFva/ppWokFFMfjnfo5yi+1SwKYj1DTOIKSTGJ50okAt+RAPakCOQ98GFRKwILdM5Y/MEEmfpkiBlCyxUbMIWop5xJMYmrcUuKSZyKZJUE8DO4O+b6X7TFrBbkLgNGOVluN5yVHFtrcJTtRN6IwKaYtkqu9Edwl9L+NwmoyMFpZXDj3DRxThFhw8typrE5zokUoWb1QiMRk6hYJkH8Ar4GPgYPUXuRmM0xiZzYpO7ZH671FHu+xWIZmZhEF8p+b+OvjSfAP4p2e7JMTFuJYFusXlnq1nJ90RagraN7iqR4xXTMn2G11jIEx1siJhnL+VwhjH0vQiAaRFGurrn3rqyRKBnGohabiAFpoa1V4G8LFM8wGkip309zz1VSOJ3yHPbZDZ3HDNTTWeXspK6925p+oqqcnTQKGk/jKesont0Mm6DFKhWTHqrFMLENkYj08niH4owZNX0m7yI8SpgnuyEB+lpm5avPS4mv8gTwaWjnSCIarmKS/wNVmvjZhEHvxYhECEjEIereO6MPhG1G420+lo/UOCihSBfmqeOQyPsm+xSv9Szt/yc5SPuP63HwjoPBFP81uW2KqbwSQ4uxcghKlCIpUYqkRPF4LsAA3SAhCbdNaxEAAAAASUVORK5CYII="
            alt=""/>
        </div>
        <div
          className='hamburger' style={ {marginRight: '20px', marginLeft: '30px'} }
          onClick={ () => props.setCollapsed(!props.collapsed) }
        >
          <Icon.MenuFoldOutlined/>
        </div>
        <span>数据概览</span>
      </div>
      <div className='mode'>
        <div
          style={ {cursor: 'pointer'} }
          onClick={ onSearch }
        >
          <Tooltip title="搜索" autoAdjustOverflow>
            <Icon.SearchOutlined style={ {marginRight: '10px'} }/>
          </Tooltip>
        </div>
        { hasSearchInput && (
          <div className='search-input'>
            <Input autoFocus onBlur={ () => setHasSearchInput(false) }/>
          </div>
        ) }
        <div style={ {cursor: 'pointer'} }>
          <Tooltip title="全屏" autoAdjustOverflow>
            <Icon.FullscreenOutlined style={ {marginRight: '10px'} }/>
          </Tooltip>
        </div>
        <Popover content={ homeContent }>
          <div style={ {cursor: 'pointer'} }>
            <span>超级管理员{ store.counter }</span>
            <Icon.CaretDownOutlined style={ {marginLeft: '10px'} }/>
          </div>
        </Popover>
      </div>
    </header>
  );
}

export default Header;