"use client";

import { useState } from "react";
import { ItemList } from "./components/ItemList";
import { AddTodoButton } from "./components/AddTodoButton";

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

export const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Todo1", checked: false },
    { id: 2, text: "Todo2", checked: false },
  ]);

  return (
    <>
      <h1>Todoリスト</h1>
      <AddTodoButton
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <ItemList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoList;
