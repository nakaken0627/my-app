import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "src/app/011_TodoListFile/public/todos.json");

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

export async function readTodos() {
  try {
    console.log("Reading todos from:", filePath);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading todos:", error);
    return [];
  }
}

export async function writeTodos(todos: Todo) {
  try {
    await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error("Error writing todos:", error);
  }
}
