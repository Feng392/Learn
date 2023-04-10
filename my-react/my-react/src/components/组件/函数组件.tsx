import React from 'react'
interface ChildComponentProps {
  msg: string
  a: (x: string) => void
  //   默认插槽 ReactNode 任何类型的节点 命名必须是children
  children?: React.ReactNode
  //   前置插槽 ReactNode 任何类型的节点 命名随便
  prefix?: React.ReactNode
}

export default function FnComponent(props: ChildComponentProps) {
  return(
      <div>
        {/*前置插槽*/}
        { props.prefix }
        我是函数组件
        <br/>
        {/*默认插槽*/}
        {props.children}
        <br/>
        {props.msg || 'xxx'}  // 默认值 'xxx'
      </div>
  )
}