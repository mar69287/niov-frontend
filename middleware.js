import { NextResponse } from 'next/server';

export function middleware(request) {

  const user = true;

  const homeUrl = new URL('/', request.url);
  if (!user) {
    console.log('hello')
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

// Define which paths should run this middleware
export const config = {
  matcher: [
    '/dashboard/:path*', 
  ],
};
