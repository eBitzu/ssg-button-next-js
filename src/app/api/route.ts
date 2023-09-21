import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = "be-data-" + new Date().getTime();

  const res = await request.text();
  if (res.includes("btn-color")) {
    const newState = res.replace("btn-color=", "") === "blue" ? "red" : "blue";

    return new NextResponse(`
    <button class="p-2 bg-${newState}-500 rounded-md text-white"
        name="btn-color"
        value="${newState}"
        hx-post="/api"
        hx-swap="outerHTML">with htmx - ${data}</button>
  `);
  }
}
export async function GET() {
  const data = "be-data-" + new Date().getTime();

  return new NextResponse(data);
}
