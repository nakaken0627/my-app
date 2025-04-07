import { NextRequest, NextResponse } from "next/server";
import { readTodos, writeTodos } from "../../011_TodoListFile/utils/fileUtils";

export async function GET() {
  try {
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

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    // console.log(reqBody);
    const todos = await readTodos();
    todos.push(reqBody);
    await writeTodos(todos);
    return NextResponse.json(reqBody, { status: 201 });
  } catch (error) {
    console.log("API error during POST", error);
    return NextResponse.json({ error: "Failed to add todo" }, { status: 500 });
  }
}
