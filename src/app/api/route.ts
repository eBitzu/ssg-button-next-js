import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.text();
  const newState = res.replace('btn-color=', '') === 'blue' ? 'red': 'blue';

  return new NextResponse(`
    <button class="p-2 bg-${newState}-500 rounded-md text-white"
        name="btn-color"
        value="${newState}"
        hx-post="/api"
        hx-swap="outerHTML">with htmx</button>
  `);
}
