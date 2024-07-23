"use client";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <ul className="flex bg-slate-950 text-white p-5 justify-center gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
            <li>Logout</li>
          </ul>
        </header>
        <div className="w-full h-full">{children}</div>
      </body>
    </html>
  );
}
