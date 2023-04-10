import type { ColumnsType, ColumnType } from 'antd/es/table';

export default function MENU_TABLE_COLUMNS(render: ColumnType<Menu.MenuListDataItem>['render']): ColumnsType<Menu.MenuListDataItem> {
  return [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '权限点代码',
      dataIndex: 'identifier',
      key: 'identifier',
      width: '80%',
    },
    {
      title: '操作',
      render,
    },
  ];
}