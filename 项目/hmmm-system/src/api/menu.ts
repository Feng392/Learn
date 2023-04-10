import req from '@/utils/req';

// 获取菜单列表
export const getMenuList = () => {
  return req.get('/menus');
};

// 新增菜单
export const addMenu = (data: Menu.AddMenuData) => {
  return req.post('/menus', data);
};
// 获取菜单详情
export const getMenuDetail = (id: string) => {
  return req.get(`/menus/${ id }`).then(res => res.data);
};
// 修改菜单
export const editMenu = (params: Menu.EditMenuData) => {
  return req.get('/menus', {params});
};