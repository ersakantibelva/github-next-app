import Link from "next/link";
import React from "react";

export default function UserList({item, key}) {
  return (
    <li
      key={key}
      className="bg-gray-700 text-white p-3 rounded-lg flex justify-between"
    >
      <div className="text-xl font-bold">{item.login}</div>
      <div className="flex gap-2">
        <button className="bg-slate-100 text-sky-950 py-2 px-4 rounded-md">
          <Link href={`/search/${item.login}`}>Lihat List Repo</Link>
        </button>
        <button className="bg-slate-100 text-sky-950 py-2 px-4 rounded-md">
          <a target="_blank" href={item.html_url} rel="noopener noreferrer">
            Github
          </a>
        </button>
      </div>
    </li>
  );
}
