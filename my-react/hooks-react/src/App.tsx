import { useState } from 'react'
import './App.css'
import Counter from './components/counter'
import TodoList from './components/todo-list'
import Validation from './components/验证销毁'
function App() {
  const [visibel, setVisibel] = useState(true)

  return (
    <div className="App">
        <Counter />
        <TodoList />
      {visibel && <Validation />}
        <button onClick={() => setVisibel(!visibel)}>销毁</button>
    </div>
  )
}

export default App