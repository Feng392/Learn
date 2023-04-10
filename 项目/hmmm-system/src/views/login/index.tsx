import React, { useMemo } from 'react';
import './index.scss';
// 路由跳转
import { useNavigate } from 'react-router-dom';
// 引入api
import * as loginApi from '@/api/login';
// 导入图标
import {
  Button,
  Checkbox,
  Form,
  Input,
  notification,
} from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import {
  QqOutlined,
  AmazonOutlined,
} from '@ant-design/icons';
// 消息通知
const Context = React.createContext({name: 'Default'});
export default function Index() {
  // 通知提醒框
  const [ api, contextHolder ] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement, err: string) => {
    api.info({
      message: `${ err }`,
      placement,
    });
  };
  const contextValue = useMemo(() => ({name: '登录失败'}), []);
  // 声明路由跳转
  const nav = useNavigate();
  const onFinish = (values: any) => {
    loginApi.login(values).then((res) => {
      // 把token存到sessionStorage
      sessionStorage.setItem('token', res.data.token);
      //   路由跳转
      nav('/');
    })
      .catch((err) => {
        console.log(err);
        openNotification('topRight', err.response.data!.error || '登录失败');
      });
  };
  // 登录
  const onLogin = () => {
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Context.Provider value={ contextValue }>
      { contextHolder }
      <div className="login">
        <div className='loginBox'/>
        <div className='box'>
          <div className='content'>
            <div className='title'>
              <div>
                <QqOutlined/>
              </div>
              <span>用户登录</span>
              <div>
                <AmazonOutlined/>
              </div>
            </div>
            <div className='form'>
              <Form
                name="basic"
                style={ {maxWidth: 600} }
                // 初始值， 只记录第一次
                initialValues={
                  {
                    remember: true,
                    username: 'root@admin.com',
                    password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'
                  }
                }
                onFinish={ onFinish }
                onFinishFailed={ onFinishFailed }
                autoComplete="off"
              >
                <Form.Item
                  name="username"
                  rules={ [
                    {
                      required: true,
                      message: 'Please input your username!',
                      // 邮箱正则
                      pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-])+$/,
                    }
                  ] }
                >
                  <Input className='username'/>
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={ [
                    {
                      required: true,
                      message: 'Please input your password!',
                    }
                  ] }
                >
                  <Input.Password className='password'/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={ {offset: 8, span: 16} }>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  className='logining'
                  // wrapperCol={{ offset: 8, span: 16 }}
                >
                  <Button
                    className='logining'
                    type="primary"
                    htmlType="submit"
                    onClick={ onLogin }
                  >
                      Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </Context.Provider>
  // 新增用户

  );
}