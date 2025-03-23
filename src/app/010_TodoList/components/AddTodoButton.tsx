import type { Todo } from "../page";

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

  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length + 1, text: inputText, checked: false },
    ]);
    setInputText("");
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
