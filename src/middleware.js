import { NextResponse } from 'next/server'
 
export function middleware(request) {
  return NextResponse.redirect(new URL('/login', request.url))
}
 
// matcher allows you to filter Middleware to run on specific paths.
export const config = {
  matcher: '/about/:path*',
}