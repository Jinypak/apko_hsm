import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const req = request;
  return NextResponse.json({ response: 'RESPONSE TEXT' }, { status: 200 });
}

// NEXTJS API 테스트
// 스프링부트와 통합 테스트 예정
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    console.log('Received username:', username);
    console.log('Received password:', password);

    return new Response(
      JSON.stringify({ message: `You sent: ${username}, ${password}` }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
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
