import { makeObservable, observable, flow, computed } from 'mobx';
import * as menuApi from '@/api/menu';


export default new class Store {
  // 声明变量
  public counter = 1;
  // 菜单返回数据
  public MenuListData: Menu.MenuTabList[] = [];

  // 菜单展开的keys
  public get MenuListKeys() {
    return (function deal(data: Menu.MenuTabList[]): any[] {
      return data.filter((item) => item.children.length > 0)
        .map(item => [ item.key, ...deal(item.children) ])
        .flat(Infinity);
    })(this.MenuListData);
  }

  // 添加菜单权限组名称列表
  public get MenuListPermission() {
    return (function deal(data: Menu.MenuTabList[]): Menu.MenuTreeSelectList[] {
      return data.map((item) => ({
        ...item,
        value: item.key,
        disabled: !(item.children.length > 0),
        //  递归 children
        children: deal(item.children || []),
      }));
    })(this.MenuListData);
  }

  // 获取菜单详情
  public MenuDetail: Menu.EditMenuData | null = null;

  //   初始化store
  public constructor() {
    makeObservable(this, {
      counter: observable,
      MenuListData: observable,
      setMenuData: flow,
      MenuListKeys: computed,
      MenuDetail: observable,
      setMenuDetail: flow,
    });
  }

  public * setMenuData() {
    // 示例 const data: User.ListData = yield api.getUsers(query);
    const data: Menu.MenuRes = yield menuApi.getMenuList();
    this.MenuListData = (function formatData(data: Menu.MenuListDataItem[]): Menu.MenuTabList[] {
      return data.map((item) => ({
        ...item,
        key: item.id,
        children: formatData(item.childs || item.points || []),
      }));
    })(data.data);
    console.log('this.MenuListData', this.MenuListData);
  }

  //  获取菜单详情
  public * setMenuDetail(id: string) {
    this.MenuDetail = yield menuApi.getMenuDetail(id);
    console.log('this.MenuDetail', this.MenuDetail);
  }
};