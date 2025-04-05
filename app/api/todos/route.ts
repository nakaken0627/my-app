// import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { readTodos } from "../../011_TodoListFile/utils/fileUtils";

export async function GET(request: NextRequest) {
  try {
    console.log(request);
    const todos = await readTodos();
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    console.error("API error(GET)", error);
    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   //GET
//   if (req.method === "GET") {
//     try {
//       const todos = await readTodos();
//       res.status(200).json(todos);
//     } catch (error) {
//       console.error("API error", error);
//       res.status(500).json({ error: "internal server Error" });
//     }

//     //POST
//   } else if (req.method === "POST") {
//     const newTodo = req.body;
//     const todos = await readTodos();
//     todos.push(newTodo);
//     await writeTodos(todos);
//     res.status(201).json(newTodo);

//     //PUT
//   } else if (req.method === "PUT") {
//     const updateTodo = req.body;
//     const todos = await readTodos();
//     const updatedTodos = todos.map((todo: { id: number }) =>
//       todo.id === updateTodo.id ? updateTodo : todo
//     );
//     await writeTodos(updatedTodos);
//     res.status(200).json(updateTodo);

//     //DELETE
//   } else if (req.method === "DELETE") {
//     const deleteTodo = req.body;
//     const todos = await readTodos();
//     const filteredTodos = todos.filter(
//       (todo: { id: number }) => todo.id !== deleteTodo.id
//     );
//     await writeTodos(filteredTodos);
//     res.status(200).json(deleteTodo);
//   } else {
//     res.status(405).end(); // Method Not Allowed
//   }
// }

////////////////////////////////////

// import type { NextApiRequest, NextApiResponse } from "next";
// import {
//   readTodos,
//   writeTodos,
// } from "../../app/011_TodoListFile/utils/fileUtils";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   //GET
//   if (req.method === "GET") {
//     try {
//       const todos = await readTodos();
//       res.status(200).json(todos);
//     } catch (error) {
//       console.error("API error", error);
//       res.status(500).json({ error: "internal server Error" });
//     }

//     //POST
//   } else if (req.method === "POST") {
//     const newTodo = req.body;
//     const todos = await readTodos();
//     todos.push(newTodo);
//     await writeTodos(todos);
//     res.status(201).json(newTodo);

//     //PUT
//   } else if (req.method === "PUT") {
//     const updateTodo = req.body;
//     const todos = await readTodos();
//     const updatedTodos = todos.map((todo: { id: number }) =>
//       todo.id === updateTodo.id ? updateTodo : todo
//     );
//     await writeTodos(updatedTodos);
//     res.status(200).json(updateTodo);

//     //DELETE
//   } else if (req.method === "DELETE") {
//     const deleteTodo = req.body;
//     const todos = await readTodos();
//     const filteredTodos = todos.filter(
//       (todo: { id: number }) => todo.id !== deleteTodo.id
//     );
//     await writeTodos(filteredTodos);
//     res.status(200).json(deleteTodo);
//   } else {
//     res.status(405).end(); // Method Not Allowed
//   }
// }
