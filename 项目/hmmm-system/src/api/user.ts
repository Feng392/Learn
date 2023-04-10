import req from '@/utils/req';

// 获取用户名
export function getProfile() {
  return req.post('/frame/profile');
}

// 获取用户列表
export function getUserList(query: User.UserListQuery) {
  // @ts-ignore
  return req.get('/users', {
    params: query,
  });
}

// 获取用户权限分组
export function getUserPermissionGroup() {
  return req.get<User.PermissionGroupItem[]>('/permissions/simple').then((res) => {
    return res.data;
  });
}

// 新增用户
export function addUser(data: User.AddUserData) {
  return req.post('/users', data);
}

// 获取用户详情
export function getUserDetail(id: number) {
  return req.get(`/users/${ id }`).then((res) => {
    return res.data;
  });
}

// 编辑用户
export function editUser(id: number, data: User.EditUserData) {
  return req.put(`/users/${ id }`, data);
}

// 删除用户
export function deleteUser(id: number) {
  return req.delete(`/users/${ id }`);
}