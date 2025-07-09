import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token || token.length === 0) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

}

export const config = {
  matcher: ['/recipes/:path*']
}
