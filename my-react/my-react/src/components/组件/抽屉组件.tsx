import React from 'react'
import './抽屉组件.scss'
export interface NodeProps {
  title: React.ReactNode
  children?: React.ReactNode
  open: boolean
  onClose: () => void
  placement: 'left' | 'right' | 'top' | 'bottom'
}

const Drawer: React.FC<NodeProps> = (props) => {
  return (
      <div
          className={props.open ? 'mask': 'mask hide'}
            onClick={props.onClose}
      >
        <div
            className={`popup ${props.placement} ${props.open ? 'active': ''}`}
            onClick={e => e.stopPropagation()}
        >
          <div className={'title'}>
            <span onClick={props.onClose}>x</span>
            <span>{props.title}</span>
          </div>
          <div className={'content'}>
            {props.children}
          </div>
        </div>
      </div>
  )
}
export default Drawer