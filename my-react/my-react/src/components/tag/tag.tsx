import React from 'react'
import './tag.scss'
export interface ChildComponentProps {
  children: React.ReactNode;
  closeable?: boolean;
  borderType?: 'solid' | 'dashed' | 'dotted';
  onClose?: () => void;
  onClick?: () => void;
}

export default function ChildComponent(Props: ChildComponentProps) {
  // 解构赋值，如果没有传入borderType，就默认为solid
  const { borderType = 'solid' } = Props;
  return (
      <div
          className='tag'
          style={{
            border: `1px ${borderType} #aaa`,
          }}
          onClick={Props.onClick}
      >
        {Props.children}
        {Props.closeable && <span className='close' onClick={Props.onClose}>x</span>}
      </div>
  )
}