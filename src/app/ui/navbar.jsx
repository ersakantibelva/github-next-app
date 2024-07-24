"use client"

import Link from "next/link";
import { logout } from "../lib/actions";

export default function Navbar() {
  return (
    <header>
      <ul className="flex bg-slate-950 text-white p-5 justify-center gap-3">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <form action={() => logout()}>
            <button>Logout</button>
          </form>
        </li>
      </ul>
    </header>
  );
}
