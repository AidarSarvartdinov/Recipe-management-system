import { cookies } from 'next/headers';

export async function POST() {
  const cookie = await cookies();
  cookie.delete('token');
}
