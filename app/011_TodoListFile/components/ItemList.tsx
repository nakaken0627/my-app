import { Todo } from "../page";
import axios from "axios";

type ItemListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const ItemList: React.FC<ItemListProps> = ({ todos, setTodos }) => {
  const boxStateChange = async (id: number, currentChecked: boolean) => {
    const newChecked = !currentChecked;

    try {
      const response = await axios.put(`/api/todos/${id}`, {
        checked: newChecked,
      });
      if (response.status === 200) {
        setTodos((prevTodos) =>
          prevTodos.map((prevTodo) => {
            return prevTodo.id === id
              ? { ...prevTodo, checked: !prevTodo.checked }
              : prevTodo;
          })
        );
      } else {
        console.error("Todoの更新に失敗しました", response.status);
      }
    } catch (error) {
      console.error("Todoの更新中にエラーが発生しました", error);
    }
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
                onChange={() => boxStateChange(todo.id, todo.checked)}
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
                onChange={() => boxStateChange(todo.id, todo.checked)}
              />
              {todo.text}
            </li>
          ))}
      </ul>
    </>
  );
};
