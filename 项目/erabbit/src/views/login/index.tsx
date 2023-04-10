import React from 'react'
import './login.scss'
// 导入图标
import { Button, Checkbox, Form, Input } from 'antd';
import {
  QqOutlined,
  AmazonOutlined,
} from '@ant-design/icons';
export default function Index() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onLogin= (props: any) => {
    //   路由跳转
    props.history.push('/home')
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login">
      log
      <div className='box'>
        <div className='content'>
          <div className='title'>
            <QqOutlined />
            <span>用户登录</span>
            <AmazonOutlined />
          </div>
          <div className='form'>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={
                {
                  remember: true,
                  username: 'root@admin.com',
                  password: '123456'
                }
              }
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button 
                  type="primary" 
                  htmlType="submit"
                  onClick={onLogin}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        
      </div>
    </div>
  )
}