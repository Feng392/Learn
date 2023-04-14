import { legacy_createStore } from "redux";
import type { Action } from "redux";

export interface todoListItem {
  id: number;
  value: string;
}

export interface CompanyState {
  num: number;
  todolist: todoListItem[];
}

interface InputValueType {
  id: number;
  value: string;
}

interface CompanyAction extends Action {
  type: "加" | "减" | "新增" | "删除";
  value: number;
  inputValue: InputValueType;
}

const initState: CompanyState = {
  num: 0,
  todolist: [],
};

// reducer: 用来处理state的 (通过描述，返回新的 state)
// state: 旧的state
// action: 描述, 用来描述要做什么
function reducer(state = initState, action: CompanyAction): CompanyState {
  // 不同的情况下，返回不同的state
  switch (action.type) {
  case "加":
    return { ...state, num: state.num + action.value };
  case "减":
    return { ...state, num: state.num - action.value };
  case "新增":
    return {
      ...state,
      todolist: [...state.todolist, action.inputValue],
    };
  case "删除":
    return {
      ...state,
      todolist: state.todolist.filter(
        (item) => item.id !== action.inputValue.id
      ),
    };
  default:
    return state;
  }
}

export default legacy_createStore(reducer);