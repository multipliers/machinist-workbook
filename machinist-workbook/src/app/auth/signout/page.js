//Hier sollte der Login button aus der Navbar verwendet werden!

'use client';

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button onClick={() => signOut()}>
      Logout
    </button>
  );
}