import React from 'react'
import ChildComponent from './子'
import FnComponent from './函数组件'
import Card from './卡片组件'
import Drawer from './抽屉组件'

// 组件的三宝  属性 方法 插槽
export default class ParentComponent extends React.Component {

  state = {
    visible: false,
    placement: 'left'
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  };

  onClose = () => {
    this.setState({
      visible: false,
    })
  };
  render() {
    return (
        <div>
          <FnComponent
              msg={ 'hello'}  // 属性
              a={ // 方法
                (x: string) => {
                  console.log(x)
                }
              }
              prefix={<div>我是前置插槽</div>}  // 前置插槽
          >
          {/*  默认插槽*/}
            <div>我是默认插槽</div>
            <div>我是默认插槽</div>
            <div>我是默认插槽</div>
            <div>我是默认插槽</div>
          </FnComponent>

          <Card
              title={'我是标题'}
              more={<div>More</div>}
          >
            <div>我是默认插槽</div>
            <div>我是默认插槽</div>
            <div>我是默认插槽</div>
          </Card>

          {/*抽屉组件*/}
          <button onClick={ () => this.showDrawer()}>
            Open
          </button>
          <Drawer
              title="Basic Drawer"
              placement="left"
              onClose={this.onClose}
              open={this.state.visible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
    )
  }
}