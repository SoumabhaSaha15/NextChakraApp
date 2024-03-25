import { NextResponse } from "next/server";
export async function GET() {
  // Handle GET requests here (e.g., fetching data)
  return NextResponse.json({ message: 'GET request successful' });
}

export async function POST() {
  // Handle POST requests here (e.g., creating data)
  return NextResponse.json({ message: 'POST request successful' });
}
