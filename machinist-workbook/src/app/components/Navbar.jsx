'use client';
import { Bars3Icon } from '@heroicons/react/24/outline'; // Heroicons v2 Icon
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="drawer">
      {/* Drawer Toggle */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Seiteninhalt */}
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-base-100">
          {/* Linke Seite - Drawer-Button */}
          <div className="navbar-start">
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
              <Bars3Icon className="h-6 w-6" />
            </label>
          </div>

          {/* Mittig zentriert - UYAR Personalmanagements */}
          <div className="navbar-center">
            <span className="text-xl font-semibold">UYAR Personalmanagement</span>
          </div>

          {/* Rechte Seite - Avatar */}
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Benutzeravatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profil
                    <span className="badge">Neu</span>
                  </a>
                </li>
                <li>
                  <a>Einstellungen</a>
                </li>
                <li>
                <a onClick={() => signOut()}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hier kannst du den restlichen Seiteninhalt hinzufügen */}
      </div>

      {/* Drawer-Seite */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar-Inhalt hier */}
          <li>
            <Link href="/personalstammdaten">Personalstammdaten</Link>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
