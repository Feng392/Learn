import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
// 引入组件
import ArticleFrom from './components/index';
import {
  Button,
  Card,
  Input,
  Popconfirm,
  Space,
  Table,
  message,
  Modal,
} from 'antd';
import type { PaginationProps } from 'antd';
import * as Icon from '@ant-design/icons';
import store from '@/store/interview';
import * as api from '@/api/interview';

import 'react-quill/dist/quill.snow.css';

import { GET_TABLE_COLUMNS } from '@/views/layout/views/interview-skills/constants';
import { flowResult } from 'mobx';
//
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
// 当前ID
let currentId = -1;

// 面试技巧
function interview() {
  // loading
  const [ loading, setLoading ] = React.useState(true);
  // 文章请求参数
  const [ articlesQuery, setArticlesQuery ] = React.useState({
    page: 1,
    pagesize: 10,
  });

  useEffect(() => {
    flowResult(store.setArticlesList(articlesQuery)).then(() => {
      setLoading(false);
    });
  }, []);

  // 切换分页器
  const onChangePage: PaginationProps['onChange'] = (page, pageSize) => {
    console.log(page, pageSize);
    if (page !== 1 || pageSize !== 10) {
      //   清空 dataSource
      store.tabArticlesList = [];
    }
    setLoading(true);
    console.log(page, pageSize);
    setArticlesQuery({page, pagesize: pageSize});
    flowResult(store.setArticlesList(articlesQuery)).then(() => {
      setLoading(false);
    });
  };
  // 新增技巧
  const [ addSkillVisible, setaddSkillVisible ] = React.useState(false);
  // 修改技巧
  const [ editSkillVisible, setEditSkillVisible ] = React.useState(false);

  function addSkill() {
    setaddSkillVisible(true);
  }

  function editSkill(id: number) {
    setEditSkillVisible(true);
    currentId = id;
  }

  // 关闭弹窗
  function addSkillCancel() {
    setaddSkillVisible(false);
  }

  function editSkillCancel() {
    setEditSkillVisible(false);
  }

  // 验证新增技巧
  function onAddSkillFinish(value: Interview.addArticlesData) {
    value.id = null;
    api.addArticlesList(value).then(() => {
      message.success('新增成功');
      setaddSkillVisible(false);
      flowResult(store.setArticlesList(articlesQuery)).then(() => {
        setLoading(false);
      }).catch(() => {
        message.error('新增失败');
      });
    });
  }

  // 验证修改技巧
  function onEditSkillFinish(value: Interview.addArticlesData) {
    value.id = currentId;
    setLoading(true);
    api.editArticles(value, currentId).then(() => {
      message.success('修改成功');
      setEditSkillVisible(false);
      flowResult(store.setArticlesList(articlesQuery)).then(() => {
        setLoading(false);
      }).catch(() => {
        message.error('修改失败');
      });
    });
  }

  // 改变文章操作状态
  function changeArticlesState(id: number, state: number | boolean) {
    api.changeArticlesState(id, Number(!state)).then(() => {
      message.success('操作成功');
      flowResult(store.setArticlesList(articlesQuery)).then(() => {
        setLoading(false);
      });
    });
  }

  // 播放视频
  const [ videoVisible, setVideoVisible ] = React.useState(false);

  function playVideo() {
    setVideoVisible(true);
  }

  return (
    <div className='interview'>
      <Card
        bodyStyle={ {
          padding: '18px',
          width: '100%',
        } }
      >
        <div>
          <div className='top'>
            <Space
              size={ 14 }
            >
              <Input
                aria-label="关键字"
                placeholder="根据文章标题搜索"
                // onChange={ (e) => inputValueChange(e.target.value) }
              />
              <Input
                aria-label="状态"
                placeholder="请选择"
                // onChange={ (e) => inputValueChange(e.target.value) }
              />
              <Button
                // onClick={ clearInput }
              >清空
              </Button>
              <Button
                type="primary"
                // onClick={ searchUser }
              >搜索
              </Button>
              <Button
                className='add-skill'
                type="primary"
                icon={ <Icon.SearchOutlined/> }
                onClick={ () => addSkill() }
              >
                  新增技巧
              </Button>
            </Space>
          </div>
          <div className='record'>
            <Space size={ 8 }>
              <Icon.InfoCircleOutlined/>
              <span>共 { store.ArticlesList?.items.length } 条记录</span>
            </Space>
          </div>
          {/*/ 表格数据放在了store里面，表头放在了constants里面 */ }
          <Table
            pagination={ {
              total: store.ArticlesList?.counts,
              showQuickJumper: true,
              showSizeChanger: true,
              pageSizeOptions: [ '5', '10', '20', '30' ],
              onChange: () => onChangePage,
            } }
            loading={ loading }
            dataSource={ store.tabArticlesList }
            columns={ GET_TABLE_COLUMNS(
              ((text, record) => {
                if (record.videoURL) {
                  return (
                    <>
                      <div
                        onClick={ () => playVideo() }
                      >
                        { text }
                        <Icon.VideoCameraOutlined/>

                      </div>
                      <Modal
                        destroyOnClose
                        open={ videoVisible }
                        onCancel={ () => {
                          setVideoVisible(false);
                          console.log(videoVisible);
                        } }
                      >
                        <Player>
                          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                        </Player>
                      </Modal>
                    </>

                  );
                }
                if (!record.videoURL) {
                  return (
                    <div>
                      { text }
                    </div>
                  );
                }
              }),
              (_, record) => {
                return (
                  <>
                    {/* 预览 */ }
                    <Button
                      type="text"
                    >
                              预览
                    </Button>
                    <Button
                      type="text"
                      onClick={ () => changeArticlesState(record.id, record.state) }
                    >
                      { record.state ? '禁用' : '启用' }
                    </Button>
                    <Button
                      type="text"
                      disabled={ record.state === 0 }
                      onClick={ () => editSkill(record.id) }
                    >
                              修改
                    </Button>
                    {/* 删除 */ }
                    <Popconfirm
                      title="提示"
                      description="此操作将永久删除用户，是否继续?"
                      okText="确定"
                      cancelText="取消"
                    >
                      <Button
                        disabled={ record.state === 0 }
                        type="text"
                      >
                                删除
                      </Button>
                    </Popconfirm>

                  </>
                );
              }
            ) }
          />
        </div>
      </Card>
      {/* 新增文章弹出层组件 */ }
      {
        addSkillVisible &&
            <ArticleFrom
              title='新增文章'
              open={ addSkillVisible }
              onCancel={ addSkillCancel }
              onFinish={ (values) => onAddSkillFinish(values) }
            />
      }

      {/* 修改文章弹出层组件 */ }
      {
        editSkillVisible &&
            <ArticleFrom
              title='修改文章'
              open={ editSkillVisible }
              onCancel={ editSkillCancel }
              onFinish={ (values) => onEditSkillFinish(values) }
              initialValues={ store.tabArticlesList
                .map((item) => ({
                  title: item.title,
                  articleBody: item.articleBody,
                  id: item.id,
                  videoURL: item.videoURL,
                })).find((item) => item.id === currentId)
              }
            />
      }
    </div>
  );
}

export default observer(interview);