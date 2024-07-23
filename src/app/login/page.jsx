import React from "react";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-slate-200 h-screen">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="flex-col flex gap-2">
        <input
          placeholder="Email"
          className="border-solid rounded-md border-2 border-sky-500 py-2 px-2"
        />
        <input
          placeholder="Password"
          type="password"
          className="border-solid rounded-md border-2 border-sky-500 py-2 px-2"
        />
        <button className="border-solid rounded-md border-2 bg-sky-500 px-2 py-2 text-white">
          Login
        </button>
      </form>
    </div>
  );
}
