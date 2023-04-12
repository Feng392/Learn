import React, { useEffect } from "react";
// 引入mobx
import { observer } from "mobx-react";
import store from "@/store/user";
import menuStore from "@/store/menu";

import {
  Button,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  TreeSelect,
} from "antd";

// 引入图标
// import * as Icon from '@ant-design/icons';

// 定义传过来的 props类型
interface MyFormProps {
  title: string;
  formItem: any[];
  open: boolean;
  // 接收方法
  onCancel: () => void;
  onFinish: (values: any) => void;
  handleCancel: () => void;
  // 默认值 表单反显的数据
  defaultValues?: any;
  // 是否是新增菜单
  isAddMenu?: boolean;
  // 是否是修改菜单
  isEditMenu?: boolean;
}

export default observer((props: MyFormProps) => {
  const [form] = Form.useForm();

  // 更新表单数据
  useEffect(() => {
    if (props.defaultValues) {
      // form实例方法
      form.setFieldsValue(props.defaultValues);
    }
  }, [props.defaultValues]);

  // 监听获取到的菜单详情
  useEffect(() => {
    if (props.defaultValues) {
      form.setFieldsValue(props.defaultValues);
    }
  }, [props.defaultValues]);

  // 获取表单项
  function getFormItem() {
    // const [ TreeSelectValue, setTreeSelectValue ] = React.useState('');
    //
    // const onChangeTreeSelect = (newValue: string) => {
    //   setTreeSelectValue(newValue);
    // };

    return props.formItem.map((item: any) => {
      switch (item.type) {
      case "Input":
        return (
          <Form.Item
            label={item.label}
            name={item.name}
            rules={item.rules}
            key={item.name}
          >
            <Input />
          </Form.Item>
        );
      case "Input.Password":
        return (
          <Form.Item
            label={item.label}
            name={item.name}
            rules={item.rules}
            key={item.name}
          >
            <Input.Password />
          </Form.Item>
        );
      case "Select":
        return (
          <Form.Item
            label={item.label}
            name={item.name}
            rules={item.rules}
            key={item.name}
          >
            <Select>{getPermissionGroup()}</Select>
          </Form.Item>
        );
      case "TreeSelect":
        return (
          <Form.Item
            label={item.label}
            name={item.name}
            rules={item.rules}
            key={item.name}
          >
            <TreeSelect
              treeDefaultExpandAll
              style={{ width: "100%" }}
              treeData={menuStore.MenuListPermission}
              switcherIcon={null}
            />
          </Form.Item>
        );
      case "Input.TextArea":
        return (
          <Form.Item
            label={item.label}
            name={item.name}
            rules={item.rules}
            key={item.name}
          >
            <Input.TextArea />
          </Form.Item>
        );
      case "Radio.Group":
        return (
          <Form.Item
            label={item.label}
            name={item.name}
            rules={item.rules}
            key={item.name}
          >
            <Radio.Group disabled={props.isEditMenu}>
              {item.children.map((child: any) => (
                <Radio value={child.value} key={child.value}>
                  {child.title}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        );
      default:
        break;
      }
      return null;
    });
  }

  // 获取权限分组
  function getPermissionGroup() {
    return store.userPermissionGroup.map((item: User.PermissionGroupItem) => (
      <Select.Option value={item.id} key={item.id}>
        {item.title}
      </Select.Option>
    ));
  }

  return (
    <Modal
      forceRender
      title={props.title}
      open={props.open}
      onCancel={props.onCancel}
      footer={null}
      destroyOnClose
    >
      <Form
        initialValues={props.defaultValues}
        labelCol={{ span: 5 }}
        onFinish={(values) => props.onFinish(values)}
        form={form}
      >
        {getFormItem()}
        <Form.Item className="formBtns">
          <Space size={10}>
            <Button type="dashed" htmlType="reset" onClick={props.handleCancel}>
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              确认
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
});