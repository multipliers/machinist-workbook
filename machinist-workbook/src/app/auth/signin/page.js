/*// app/auth/signin/page.js
'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn('email', { email, callbackUrl: '/' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Anmeldung</h2>
        <input
          type="email"
          placeholder="E-Mail-Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 input input-bordered"
          required
        />
        <button type="submit" className="w-full btn btn-primary">
          Anmelden
        </button>
      </form>
    </div>
  );
}
*/

// app/auth/signin/page.js
'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('email', { email, redirect: false });
    if (res?.error) {
      setMessage('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    } else {
      setMessage('Überprüfen Sie Ihre E-Mails für den Login-Link.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">Anmeldung</h2>
        {message && <p className="mb-4 text-center">{message}</p>}
        <input
          type="email"
          placeholder="E-Mail-Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 input input-bordered"
          required
        />
        <button type="submit" className="w-full btn btn-primary">
          Anmelden
        </button>
      </form>
    </div>
  );
}
