// 用户命名空间
declare namespace User {
  // 登录请求参数
  interface LoginData {
    username: string;
    password: string;
  }

  interface LoginRes {
    token: string;
  }

  // 获取用户列表请求参数
  interface UserListQuery {
    page: number;
    pagesize: number;
    username?: string;
  }

  // 获取用户列表返回数据
  interface Item {
    avatar: string;
    create_time: string;
    email: string;
    id: number;
    introduction: string;
    is_deleted: number;
    last_update_time: string;
    permisstion_group_id: number;
    permisstion_group_title: string;
    phone: string | null;
    role: 'admin' | 'user';
    username: string;
  }

  interface ListData {
    counts: number;
    list: Item[];
    page: string;
    pages: number;
    pagesize: number;
  }

  //  获取用户权限分组返回数据
  interface PermissionGroupItem {
    id: number;
    title: string;
  }

  //   新增用户请求参数
  interface AddUserData {
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'user' | 'editor';
    permission_group_id: number;
    phone: string;
    introduction: string;
  }

//  获取用户详情返回数据
  interface DetailData extends AddUserData {
    create_time: string;
    id: number;
    last_update_time: string;
    sex: '男' | '女';
    // 状态 0 正常 1 禁用 2 删除， 不应该是number
    status: 0 | 1 | 2;
  }

  //   编辑用户请求参数
  interface EditUserData {
    username: string;
    email: string;
    role: 'admin' | 'user' | 'editor';
    permission_group_id: number;
    phone: string;
    introduction: string;
  }
}


//  菜单命名空间
declare namespace Menu {
//  获取菜单列表返回数据

  interface MenuListDataItem {
    childs?: MenuListDataItem[];
    points?: MenuListDataItem[];
    code: string;
    id: string;
    pid: number | null;
    title: string;
    is_points?: boolean;
  }

  // antd表格需要的数据
  interface MenuTabList extends MenuListDataItem {
    key: string;
    children: Menu.MenuTabList[];
  }

  // 数选择器需要的数据
  interface MenuTreeSelectList extends MenuListDataItem {
    value: string;
  }

  interface MenuRes {
    config: {};
    data: MenuListDataItem[];
    heder: {};
    request: {};
    status: number;
    statusText: string;
  }

//  新增菜单请求参数
  interface AddMenuData {
    code: string;
    is_points: boolean;
    pid: number;
    title: string;
  }

//   编辑(修改)菜单请求参数
  interface EditMenuData extends AddMenuData {
    id: string;
  }
}