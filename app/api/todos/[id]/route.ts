import { NextRequest, NextResponse } from "next/server";
import {
  Todo,
  readTodos,
  writeTodos,
} from "../../../011_TodoListFile/utils/fileUtils";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  console.log("PUT request received for id:", id);
  const todoId = parseInt(id, 10);
  if (isNaN(todoId)) {
    return NextResponse.json({ error: "Invalid Todo ID" }, { status: 400 });
  }

  try {
    const reqBody = await request.json();
    const updatedData = reqBody as { checked?: boolean };

    const todos = await readTodos();
    const updatedTodos = todos.map((todo: Todo) =>
      todo.id === todoId ? { ...todo, ...updatedData } : todo
    );
    await writeTodos(updatedTodos);

    const updatedTodo = updatedTodos.find((todo: Todo) => todo.id === todoId);
    if (updatedTodo) {
      return NextResponse.json(updatedTodo);
    } else {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("API error during PUT", error);
    return NextResponse.json({ error: "Failed to put todo" }, { status: 500 });
  }
}
