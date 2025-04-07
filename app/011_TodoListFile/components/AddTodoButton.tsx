import type { Todo } from "../page";
import axios from "axios";

type AddTodoButtonProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export const AddTodoButton: React.FC<AddTodoButtonProps> = ({
  todos,
  setTodos,
  inputText,
  setInputText,
}) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputText,
        checked: false,
      };

      try {
        const response = await axios.post("/api/todos", newTodo);
        if ((response.status = 201)) {
          setTodos([...todos, response.data]);
          setInputText("");
        }
      } catch {}
    }
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          type="text"
          value={inputText}
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          // onClick={addTodo}
        >
          追加
        </button>
      </form>
    </div>
  );
};
