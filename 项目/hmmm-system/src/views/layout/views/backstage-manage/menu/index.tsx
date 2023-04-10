/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import './index.scss';
import MyForm from '@/components/my-form';
import * as MenuApi from '@/api/menu';
// 引入mobx
import { observer } from 'mobx-react';
import store from '@/store/menu';
// 引入antd
import {
  Button,
  Card,
  Table,
  message,
} from 'antd';
// 引入图标
import * as Icon from '@ant-design/icons';
// 引入常量
import MENU_TABLE_COLUMNS from './constants';


const formItem = [
  {
    label: '权限组选项',
    name: 'is_point',
    rules: [ {required: true, message: '请选择权限组选项'} ],
    type: 'Radio.Group',
    children: [
      {
        type: 'Radio',
        value: false,
        title: '菜单',
      },
      {
        type: 'Radio',
        value: true,
        title: '权限点',
      }
    ],
  },
  {
    label: '权限组名称',
    name: 'id',
    rules: [ {required: true, message: '请选择权限组名称'} ],
    type: 'TreeSelect',
  },
  {
    label: '权限代码',
    name: 'code',
    rules: [ {required: true, message: '请输入权限代码'} ],
    type: 'Input',
  },
  {
    label: '权限标题',
    name: 'title',
    rules: [ {required: true, message: '请输入权限标题'} ],
    type: 'Input',
  },
];

function Menu() {
  useEffect(() => {
    store.setMenuData();
  }, []);


  // 新增菜单
  const [ isAddMenu, setIsAddMenu ] = React.useState(false);
  // 修改菜单
  const [ isEditMenu, setIsEditMenu ] = React.useState(false);

  function AddMenu(data: Menu.AddMenuData) {
    MenuApi.addMenu(data).then(() => {
      message.success('新增成功');
      store.setMenuData();
      setIsAddMenu(false);
    }).catch(() => {
      message.error('新增失败');
    });
  }

  // 修改菜单
  function editMenu(id: string) {
    setIsEditMenu(true);
    store.setMenuDetail(id);
  }

  // 修改菜单验证
  function onEditFinish(data: Menu.EditMenuData) {
    MenuApi.editMenu(data).then(() => {
      message.success('修改成功');
      store.setMenuData();
      setIsEditMenu(false);
    }).catch(() => {
      message.error('修改失败');
    });
  }

  return (
    <div className='menu'>
      <Card
        bodyStyle={ {
          padding: '18px',
          width: '100%',
        } }
      >
        <div className='top'>
          <Button
            className='add-menu'
            type="primary"
            icon={ <Icon.SearchOutlined/> }
            onClick={ () => setIsAddMenu(true) }
          >
              添加菜单
          </Button>
        </div>
        <div className='content'>
          {/*/ 表格数据放在了store里面，表头放在了constants里面 */ }
          <Table
            indentSize={ 20 }
            dataSource={ store.MenuListData }
            columns={ MENU_TABLE_COLUMNS((_, record) => {
              return (
                <>
                  <Button
                    type="primary"
                    shape="circle"
                    icon={ <Icon.EditOutlined/> }
                    onClick={ () => editMenu(record.id) }
                  />
                  <Button type="primary" shape="circle" icon={ <Icon.DeleteOutlined/> }/>
                </>
              );
            }) }
            expandable={ {
              defaultExpandAllRows: true,
              expandedRowKeys: store.MenuListKeys,
              expandIcon: ({expanded}) => {
                // expanded: 是否展开
                // record: 当前行数据
                // onExpand: 点击展开的回调
                return expanded ? (
                  <Icon.FileOutlined/>
                ) : (
                  <Icon.EyeOutlined/>
                );
              }
            } }
          />
        </div>
      </Card>
      {/* 添加菜单 */ }
      <MyForm
        title="创建菜单"
        formItem={ formItem }
        open={ isAddMenu }
        onCancel={ () => setIsAddMenu(false) }
        onFinish={ AddMenu }
        handleCancel={ () => setIsAddMenu(false) }
        defaultValues={ {
          is_point: false,
          code: '',
          pid: '',
          title: '',
        } }
        isAddMenu={ true }
      />
      {/* 修改菜单 */ }
      <MyForm
        title="修改菜单"
        formItem={ formItem }
        open={ isEditMenu }
        onCancel={ () => setIsEditMenu(false) }
        onFinish={ onEditFinish }
        handleCancel={ () => setIsEditMenu(false) }
        defaultValues={ store.MenuDetail }
        isEditMenu={ true }
      />
    </div>
  );
}

export default observer(Menu);