import { Todo } from "../page";
// import { useMemo } from "react";

type ItemListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const ItemList: React.FC<ItemListProps> = ({ todos, setTodos }) => {
  const boxStateChange = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        return prevTodo.id === id
          ? { ...prevTodo, checked: !prevTodo.checked }
          : prevTodo;
      })
    );
  };

  return (
    <>
      <ul>
        <h2>未実行一覧</h2>
        {todos
          .filter((todo) => !todo.checked)
          .map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => boxStateChange(todo.id)}
              />
              {todo.text}
            </li>
          ))}
      </ul>
      <button
        onClick={() => {
          // setTodos((preTodos) => preTodos.filter((todo) => !todo.checked));
          setTodos((preTodos) => preTodos.filter((todo) => !todo.checked));
        }}
      >
        まとめて削除
      </button>
      <ul>
        <h2>実行済一覧</h2>

        {todos
          .filter((todo) => todo.checked)
          .map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => boxStateChange(todo.id)}
              />
              {todo.text}
            </li>
          ))}
      </ul>
    </>
  );
};

// const incompleteList = todos.filter((todo) => !todo.checked);
// const completeList = todos.filter((todo) => todo.checked);

// const incompleteList = useMemo(
//   () => todos.filter((todo) => !todo.checked),
//   [todos]
// );
// const completeList = useMemo(
//   () => todos.filter((todo) => todo.checked),
//   [todos]
// );

//   return (
//     <>
//       <ul>
//         <h2>未実行一覧</h2>
//         {incompleteList.map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.checked}
//               onChange={() => boxStateChange(todo.id)}
//             />
//             {todo.text}
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={() => {
//           // setTodos((preTodos) => preTodos.filter((todo) => !todo.checked));
//           setTodos((preTodos) => preTodos.filter((todo) => !todo.checked));
//         }}
//       >
//         まとめて削除
//       </button>
//       <h2>実行済一覧</h2>
//       {completeList.map((todo) => {
//         <li key={todo.id}>
//           <input
//             type="checkbox"
//             checked={todo.checked}
//             onChange={() => boxStateChange(todo.id)}
//           />
//           {todo.text}
//         </li>;
//       })}
//     </>
//   );
// };
