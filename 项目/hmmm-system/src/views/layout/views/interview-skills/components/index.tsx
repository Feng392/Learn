import React from 'react';
import { observer } from 'mobx-react';

import { Button, Form, Input, Modal, Space } from 'antd';

// 文档格式
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


interface Props {
  title: string;
  open: boolean;
  onCancel: () => void;
  onFinish: (values: any) => void;
  initialValues?: any;
}

export default observer((props: Props) => {
  const [ form ] = Form.useForm();
  // 导入文档组件
  const [ reactQuillValue, setReactQuillValue ] = React.useState('');

  return (
    <div>
      <Modal
        forceRender
        footer={ null }
        title={ props.title }
        open={ props.open }
        onCancel={ props.onCancel }
        destroyOnClose
      >
        <Form
          labelCol={ {span: 5} }
          onFinish={ props.onFinish }
          form={ form }
          initialValues={ props.initialValues }
        >
          <Form.Item
            label="文章标题"
            name="title"
            rules={ [ {required: true, message: 'Please input your username!'} ] }
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="文章内容"
            name="articleBody"
            rules={ [ {required: true, message: 'Please input your content!'} ] }
          >
            <ReactQuill
              style={ {
                height: '120px',
                width: '100%',
                marginBottom: '40px'
              } }
              theme="snow"
              value={ reactQuillValue }
              onChange={ setReactQuillValue }
            />
          </Form.Item>
          <Form.Item
            label="视频地址"
            name="videoURL"
            rules={ [ {message: 'Please input your username!'} ] }
          >
            <Input/>
          </Form.Item>
          <Form.Item className='formBtns'>
            <Space size={ 10 }>
              <Button
                type="dashed"
                htmlType="reset"
                onClick={ props.onCancel }
              >
                  取消
              </Button>
              <Button type="primary" htmlType="submit">
                  确认
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
});