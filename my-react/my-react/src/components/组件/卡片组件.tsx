import React from 'react'
import './卡片组件.scss'
interface CardComponentProps {
  title?: string
    // 默认插槽 ReactNode 任何类型的节点 命名必须是children
    children?: React.ReactNode
    //   具名插槽 ReactNode 任何类型的节点 命名随便
  more?: React.ReactNode
}

export default function Card(props: CardComponentProps) {
    return (
        <div className={'card'}>
          <div className={'header'}>
            <h2>
              {props.title}
            </h2>
            {/*具名插槽*/}
            {props.more}
          </div>
          <div className={'content'}>
            {/*默认插槽*/}
            {props.children}
          </div>
        </div>
    )
}