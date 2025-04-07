import fs from "fs/promises";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "app/011_TodoListFile/public/todos.json"
);

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

export async function readTodos() {
  try {
    // throw new Error("Intentional error for testing");
    console.log("Reading todos from:", filePath);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading todos:", error);
    throw error;
  }
}

export async function writeTodos(todos: Todo[]) {
  try {
    // throw new Error("Intentional error for testing");
    await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error("Error writing todos:", error);
    throw error;
  }
}
