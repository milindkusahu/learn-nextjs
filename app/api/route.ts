import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    message: "Thanks for using Next.js route hanlder",
  });
}
