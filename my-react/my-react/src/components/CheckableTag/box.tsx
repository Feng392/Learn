import React from 'react'
import './index.scss'
interface BoxProps {
  content: string,
  currentIndex: number,
  onChecked: (index: number) => void
  checked: boolean
}
function Box(props: BoxProps) {
  return (
      <div
          className={`box ${props.checked && 'checked'}`}
          onClick={() => props.onChecked(props.currentIndex)}
      >
        {props.content}
      </div>
  )
}

export default Box