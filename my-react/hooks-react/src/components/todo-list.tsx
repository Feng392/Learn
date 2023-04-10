import React from 'react'
import { useState, useRef } from 'react'

export  interface listItem {
    id: number,
    label: string
}
export default function TodoList () {
  const [list, setList] = useState<listItem[]>([])
  const inpValue = useRef<HTMLInputElement>(null)
    const onAdd = () => {
      setList(list.concat({
        id: Date.now(),
        label: inpValue.current!.value
      }))
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInpValue(e.target.value)
    }

  return (
      <div>
        <input type="text" ref={inpValue} onChange={onChange}/>
        <button onClick={ onAdd }>添加</button>
        <br/>
        <ul>
          { list.map((item, index) => {
            return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
  )
}