import React, { useState, useRef } from 'react'
import { useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  const onAdd = () => {
    setCount(count + 1)
    // console.log(countRef.current)
  }
  useEffect(() => {
  //   数据更新后，DOM更新后执行
  //   mounted
    console.log(countRef.current)
  }, [])
  return(
      <div>
        {count}
        <button ref={countRef} onClick={() => onAdd()}>+</button>
      </div>
  )
}