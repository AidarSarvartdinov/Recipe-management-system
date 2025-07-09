import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const cookie = await cookies();
  cookie.delete('token');
}
