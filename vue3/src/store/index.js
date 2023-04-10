
import { createStore } from 'vuex';

const Store = createStore({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    // 返回done为真的todos
    doneTodos: (state) => {
      return state.todos.filter(item => item.done)
    },
    // 返回done为真的todosd的数量
    doneTodosCount: (state, getters) => { 
      return getters.doneTodos.length
    }
  }
})

export default Store;


// import { createStore } from 'vuex'
// /**
//  * 创建仓库和导出
//  */
// export default createStore({
//     state: {
//         num: 111
//     }
// })