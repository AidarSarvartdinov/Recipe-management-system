import { getAuth } from 'firebase-admin/auth';
import { cookies } from 'next/headers';

export async function getServerAuthUser() {
  const token = (await cookies()).get('token')?.value;
  if (!token) return null;

  try {
    const adminAuth = getAuth();
    const decodedToken = await adminAuth.verifyIdToken(token);
    return decodedToken;
  } catch {
    return null;
  }
}
