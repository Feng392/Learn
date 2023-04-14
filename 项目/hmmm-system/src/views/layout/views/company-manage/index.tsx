import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CompanyState, todoListItem } from "@/store";

let counter = 0;

export default function CompanyManage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const count = useSelector<CompanyState, number>((state) => state.num);
  const list = useSelector<CompanyState, todoListItem[]>(
    (state) => state.todolist
  );
  const dispatch = useDispatch();

  function add() {
    dispatch({ type: "加", value: 100 });
  }

  function minus() {
    dispatch({ type: "减", value: 100 });
  }

  function addInput() {
    dispatch({
      type: "新增",
      inputValue: { id: counter++, value: inputRef.current!.value },
    });
  }

  function delInput(id: number) {
    dispatch({
      type: "删除",
      inputValue: { id, value: inputRef.current!.value },
    });
    console.log(inputRef.current);
    console.log(inputRef);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>加</button>
      <button onClick={minus}>减</button>
      <input type="text" ref={inputRef} />
      <button onClick={addInput}>新增</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => delInput(item.id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}