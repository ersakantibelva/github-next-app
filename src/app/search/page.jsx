"use client";

import React, { useState } from "react";
import ListSection from "./ListSection";

export default function Page() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target[0].value);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-3 bg-slate-200">
      <h1 className="text-3xl font-bold text-center">Cari User Github</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input className="border-solid rounded-md border-2 border-sky-500 py-2 px-2" placeholder="Cari akun" />
        <button className="border-solid rounded-md border-2 bg-sky-500 px-2 py-2 text-white">Cari</button>
      </form>
      {input && <ListSection query={input} />}
    </div>
  );
}
