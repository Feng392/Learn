import React, { useEffect } from "react";
import "./index.scss";
// 引入mobx
import { observer } from "mobx-react";
import store from "@/store/user";
import * as userApi from "@/api/user";
// 引入组件
import MyForm from "@/components/my-form";
import { Space, Card, Input, Button, Table, message, Popconfirm } from "antd";
// 引入图标
import * as Icon from "@ant-design/icons";
// 引入常量
import { GET_TABLE_COLUMNS } from "./constants";

const userListQuery: User.UserListQuery = {
  page: 1,
  pagesize: 10,
  username: "",
};

// 新增用户表单
const formAddItem = [
  {
    type: "Input",
    label: "用户名",
    name: "username",
    rules: [{ required: true, message: "请输入用户名" }],
  },
  {
    type: "Input",
    label: "邮箱",
    name: "email",
    rules: [{ required: true, message: "邮箱" }],
  },
  {
    type: "Input.Password",
    label: "密码",
    name: "password",
    rules: [{ required: true, message: "请输入密码" }],
  },
  {
    type: "Radio.Group",
    label: "角色",
    name: "role",
    children: [
      {
        type: "Radio",
        value: 1,
        title: "管理员",
      },
      {
        type: "Radio",
        value: 2,
        title: "普通用户",
      },
    ],
    rules: [{ required: true, message: "Please input your password!" }],
  },
  {
    type: "Select",
    label: "权限组名称",
    name: "permission_group_id",
    rules: [{ required: true, message: "Please input your password!" }],
  },
  {
    type: "Input",
    label: "联系电话",
    name: "phone",
    rules: [{ required: true, message: "Please input your password!" }],
  },
  {
    type: "Input.TextArea",
    label: "介绍",
    name: "introduction",
    rules: [{ required: true, message: "Please input your password!" }],
  },
];
// 编辑用户表单
const formEditItem = [
  {
    type: "Input",
    label: "用户名",
    name: "username",
    rules: [{ required: true, message: "请输入用户名" }],
  },
  {
    type: "Input",
    label: "邮箱",
    name: "email",
    rules: [{ required: true, message: "邮箱" }],
  },
  {
    type: "Radio.Group",
    label: "角色",
    name: "role",
    children: [
      {
        type: "Radio",
        value: 1,
        title: "管理员",
      },
      {
        type: "Radio",
        value: 2,
        title: "普通用户",
      },
    ],
    rules: [{ required: true, message: "Please input your password!" }],
  },
  {
    type: "Select",
    label: "权限组名称",
    name: "permission_group_id",
    rules: [{ required: true, message: "Please input your password!" }],
  },
  {
    type: "Input",
    label: "联系电话",
    name: "phone",
    rules: [{ required: true, message: "Please input your password!" }],
  },
  {
    type: "Input.TextArea",
    label: "介绍",
    name: "introduction",
    rules: [{ required: true, message: "Please input your password!" }],
  },
];
let currentId = -1;

function user() {
  // 表格loading
  const [loading, setLoading] = React.useState(false);

  // 获取表格数据
  function refesh(userListQuery: User.UserListQuery) {
    setLoading(true);
    store.setUsersData(userListQuery).then(() => {
      setLoading(false);
    });
  }

  // 搜索用户输入框
  function inputValueChange(username: string) {
    console.log(username);
    userListQuery.username = username;
    console.log(userListQuery);
  }

  //  清空
  function clearInput() {
    userListQuery.username = "";
    refesh(userListQuery);
  }

  // 搜索
  function searchUser() {
    refesh(userListQuery);
  }

  // 新增验证表单成功
  function onFinish(values: any) {
    userApi
      .addUser(values)
      .then(() => {
        refesh(userListQuery);
        setIsShowAddUser(false);
        message.success("新增用户成功");
      })
      .catch(() => {
        message.error("新增用户失败");
      });
  }

  // 编辑验证表单成功
  function onEditFinish(values: any) {
    console.log(values);
    userApi
      .editUser(currentId, values)
      .then(() => {
        refesh(userListQuery);
        setIsShowEditUser(false);
        message.success("编辑用户成功");
      })
      .catch(() => {
        message.error("编辑用户失败");
      });
  }

  useEffect(() => {
    refesh(userListQuery);
  }, []);

  // 获取用户权限分组
  useEffect(() => {
    store.setPermissionGroup();
  }, []);

  // 是否显示新增用户弹窗
  const [isShowAddUser, setIsShowAddUser] = React.useState(false);
  // 是否显示编辑用户弹窗
  const [isShowEditUser, setIsShowEditUser] = React.useState(false);

  // 编辑用户
  async function editUser(id: number) {
    // 获取用户详情
    await store.setUserDetail(id); // 先得到用户详情后才能反显数据
    // 显示编辑用户弹窗
    setIsShowEditUser(true);
    currentId = id;
  }

  // 删除用户
  const confirm = (id: number) => {
    userApi
      .deleteUser(id)
      .then(() => {
        refesh(userListQuery);
        message.success("删除用户成功");
      })
      .catch(() => {
        message.error("删除用户失败");
      });
  };
  const cancel = () => {
    message.error("已取消操作!");
  };

  // 关闭新增用户弹窗
  function handleCancel() {
    setIsShowAddUser(false);
  }

  // 关闭编辑用户弹窗
  function handleEditCancel() {
    setIsShowEditUser(false);
  }

  return (
    <div className="card">
      <Card
        bodyStyle={{
          padding: "18px",
          width: "100%",
        }}
      >
        <div>
          <div className="top">
            <Space size={14}>
              <Input
                placeholder="根据用户名搜索"
                onChange={(e) => inputValueChange(e.target.value)}
              />
              <Button onClick={clearInput}>清空</Button>
              <Button type="primary" onClick={searchUser}>
                搜索
              </Button>
              <Button
                className="add-user"
                type="primary"
                icon={<Icon.SearchOutlined />}
                onClick={() => {
                  setIsShowAddUser(true);
                }}
              >
                新增用户
              </Button>
            </Space>
          </div>
          <div className="record">
            <Space size={8}>
              <Icon.InfoCircleOutlined />
              <span>共 {store.usersData?.counts} 条记录</span>
            </Space>
          </div>
          {/*/ 表格数据放在了store里面，表头放在了constants里面 */}
          <Table
            loading={loading}
            dataSource={store.userList}
            columns={GET_TABLE_COLUMNS((_, record) => {
              if (record.role === "admin") {
                return null;
              }
              return (
                <>
                  {/* 编辑 */}
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<Icon.EditOutlined />}
                    onClick={() => editUser(record.id)}
                  />
                  {/* 删除 */}
                  <Popconfirm
                    title="提示"
                    description="此操作将永久删除用户，是否继续?"
                    onConfirm={() => confirm(record.id)}
                    onCancel={cancel}
                    okText="确定"
                    cancelText="取消"
                  >
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<Icon.DeleteOutlined />}
                    />
                  </Popconfirm>
                </>
              );
            })}
            pagination={{
              total: store.usersData?.counts,
              current: userListQuery.page,
              pageSize: userListQuery.pagesize,
              pageSizeOptions: ["5", "10", "30", "50"],
              showSizeChanger: true,
              onChange: (page, pageSize) => {
                userListQuery.page = page;
                userListQuery.pagesize = pageSize;
                store.setUsersData(userListQuery).then(() => {
                  refesh(userListQuery);
                });
              },
            }}
          />
        </div>
      </Card>
      {/* 新增用户 */}
      <MyForm
        formItem={formAddItem}
        open={isShowAddUser}
        onCancel={handleCancel}
        onFinish={onFinish}
        handleCancel={handleCancel}
        title="新增用户"
      />
      {/* 编辑用户 */}
      <MyForm
        formItem={formEditItem}
        open={isShowEditUser}
        onCancel={handleEditCancel}
        onFinish={onEditFinish}
        handleCancel={handleEditCancel}
        title="编辑用户"
        defaultValues={store.userDetail}
      />
    </div>
  );
}

export default observer(user);