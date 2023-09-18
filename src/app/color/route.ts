'use server';

import { NextResponse } from "next/server";
import { Color } from "../state/color.state";

export async function GET() {
    const color = await Color();
    return new NextResponse(color);
}

