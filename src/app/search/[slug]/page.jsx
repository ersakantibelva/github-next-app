import Link from "next/link";
import React from "react";

const getData = async (data) => {
  const response = await fetch(`https://api.github.com/users/${data}/repos`);

  return response.json();
};

export default async function Page({ params }) {
  const response = await getData(params.slug);

  return (
    <div className="bg-slate-100 p-4 h-full">
      <button className="text-white bg-slate-700 py-2 px-4 rounded-md"><Link href="/search">Kembali</Link></button>
      <p className="text-3xl font-bold mb-2 text-center">{params.slug}</p>
      <p className="text-xl font-bold my-4">Repo</p>
      <ul className="flex flex-col gap-2">
        {response.map((item) => {
          return (
            <li
              key={item.id}
              className="bg-gray-700 p-3 flex justify-between items-center rounded-lg h-32"
            >
              <div className="h-full">
                <h1 className="text-white text-lg font-bold">{item.name}</h1>
                <div className="text-white">{item.description}</div>
              </div>
              <button className="h-fit bg-slate-100 text-sky-950 py-2 px-4 rounded-md shrink-0">
                <a
                  target="_blank"
                  href={item.html_url}
                  rel="noopener noreferrer"
                >
                  Buka Repo di Github
                </a>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
