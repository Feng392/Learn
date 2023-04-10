// 引入react
import React from 'react';
import Counter from './components/counter';
import Hello  from './components/hello'
import Switch from './components/switch'
import Ref from './components/ref'
import Vif from './components/Vif'
import Vfor from './components/Vfor'
import Dialog from './components/对话框'
import Card from './components/列表渲染'
import InputElement from './components/input'
import TodoList from './components/todoList'
import Lifecycle from './components/生命周期'
import Component from './components/计算属性'
import ParentComponent from './components/组件/父'
import Tag from './components/tag'
import CheckableTag from './components/CheckableTag'
import Index from './index'
export default function App() {  // 导出是因为在 main.tsx中要引入
  return (
      <div>
        <Index />
        <Tag />
        {/*<CheckableTag flag={2}/>*/}
        {/*<ParentComponent />*/}
        {/*<Component />*/}
        {/*<Lifecycle />*/}
        {/*<TodoList />*/}
        {/*<InputElement />*/}
        {/*<Dialog />*/}
        {/*<Card />*/}
        {/*<Vfor />*/}
        {/*<Vif />*/}
        {/*<Counter />*/}
        {/*<Hello />*/}
        {/*<Switch />*/}
        {/*<Ref />*/}
      </div>
  );
}