import { NextResponse, NextRequest } from 'next/server';

export function middleware(req) {
    const req = NextRequest;
  const auth = req.headers.get('authorization');
  const username = 'yourUsername';  // Change this to your desired username
  const password = 'yourPassword';  // Change this to your desired password
  const encoded = Buffer.from(`${username}:${password}`).toString('base64');

  if (auth !== `Basic ${encoded}`) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}
