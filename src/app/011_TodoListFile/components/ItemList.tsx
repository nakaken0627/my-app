import { Todo } from "../page";

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
