import { makeObservable, observable, action, flow } from 'mobx';
import * as userApi from '@/api/user';

export default new class Store {
  // 声明变量
  public counter = 1;
  // 用户返回数据
  public usersData: User.ListData | null = null;
  // 用户列表
  public userList = [];
  // 用户权限分组
  public userPermissionGroup: User.PermissionGroupItem[] = [];
  // 获取用户详情
  public userDetail: User.DetailData | null = null;

  //   初始化store
  public constructor() {
    makeObservable(this, {
      counter: observable,
      usersData: observable,
      userList: observable,
      userPermissionGroup: observable,
      userDetail: observable,

      setUsersData: action,
      setPermissionGroup: action,
      setUserDetail: flow,
    });
  }

  public setUsersData = async (query: User.UserListQuery) => {
    const res = await userApi.getUserList(query);
    this.usersData = res.data;
    this.userList = res.data.list.map((item: User.Item) => ({
      ...item,
      key: item.id,
    }));
  };

  // 获取用户权限分组
  public setPermissionGroup = async () => {
    this.userPermissionGroup = await userApi.getUserPermissionGroup();
  };

  //   获取用户详情
  public * setUserDetail(id: number) {
    const res: User.DetailData = yield userApi.getUserDetail(id);
    this.userDetail = res;
    console.log('this.userDetail', this.userDetail);
  }
};