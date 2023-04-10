
// 引入react
import React from 'react';
import {useState} from 'react'

export default function App() {
  // vue2 data
  // vue3 ref/ reactive
  // react hooks 语法 使用 useState
  const [counter, setCounter] = useState(0)
  console.log(counter)
  const addCounter = () => {
    setCounter(counter + 1)
  }
  return (
      <div>
        <p>{counter}</p>
        <button onClick={ addCounter }>+1</button>
      </div>
  );
}