"use client";

import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user.email}</p>
    </div>
  );
}