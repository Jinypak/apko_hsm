import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const req = request;
  return NextResponse.json({ response: 'RESPONSE TEXT' }, { status: 200 });
}
