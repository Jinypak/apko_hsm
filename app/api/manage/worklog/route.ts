import { NextResponse, NextRequest } from 'next/server';
import { createClient } from 'redis';

export async function GET(request: NextRequest) {
  const req = request;

  const client = createClient({
    url: 'redis://localhost:6379',
  });

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();
  await client.set('c', 'd');

  const response = await client.get('c').then((r) => r);
  console.log(response);

  return NextResponse.json({ response: response }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    console.log('body contents : ', body);

    return new Response(JSON.stringify({ message: JSON.stringify(body) }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
