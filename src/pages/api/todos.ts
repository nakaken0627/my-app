import type { NextApiRequest, NextApiResponse } from "next";
import { readTodos, writeTodos } from "../../app/011_TodoListFile/utils/fileUtils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const todos = await readTodos();
      res.status(200).json(todos);
    } catch (error) {
      console.error("API error", error);
      res.status(500).json({ error: "internal server Error" });
    }
  } else if (req.method === "POST") {
    const newTodo = req.body;
    const todos = await readTodos();
    todos.push(newTodo);
    await writeTodos(todos);
    res.status(201).json(newTodo);
  } else if (req.method === "PUT") {
    const updateTodo = req.body;
    const todos = await readTodos();
    const updatedTodos = todos.map((todo: { id: number }) =>
      todo.id === updateTodo.id ? updateTodo : todo
    );
    await writeTodos(updatedTodos);
    res.status(200).json(updateTodo);
  } else if (req.method === "DELETE") {
    const deleteTodo = req.body;
    const todos = await readTodos();
    const filteredTodos = todos.filter(
      (todo: { id: number }) => todo.id !== deleteTodo.id
    );
    await writeTodos(filteredTodos);
    res.status(200).json(deleteTodo);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
