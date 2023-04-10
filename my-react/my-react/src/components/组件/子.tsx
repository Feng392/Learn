import React from 'react'
interface ChildComponentProps {
  msg: string
  a: (x: string) => void
  //   默认插槽 ReactNode 任何类型的节点 命名必须是children
  children?: React.ReactNode
  //   前置插槽 ReactNode 任何类型的节点 命名随便
  prefix?: React.ReactNode
}
export default class ChildComponent extends React.Component<ChildComponentProps> {

// {this.props.msg} 是 constructor帮我们做的事情
  constructor(props: ChildComponentProps) {
    super(props) // 调用父类的构造函数  React.Component.constructor
  }

  // 组件挂载完成后调用传过来的方法
  componentDidMount() {
    this.props.a('heihei')
  }

  render() {
    return (
        <div>
          {/*前置插槽*/}
          { this.props.prefix }
          我是子组件
          <br/>
          {/*默认插槽*/}
            {this.props.children}
          <br/>
            {this.props.msg || 'xxx'}  // 默认值 'xxx'
        </div>
    )
  }
}