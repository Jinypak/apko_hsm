import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const req = request;
  console.log('================================');
  console.dir(req);
  console.log('================================');
  console.dir(NextResponse.json);
  console.log('================================');
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}
