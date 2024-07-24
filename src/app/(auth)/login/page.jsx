import React from "react";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-slate-200 h-full">
      <h1 className="text-3xl font-bold">Login</h1>
      <form className="flex-col flex gap-2">
        <input className="input-text-form" placeholder="Email" />
        <input className="input-text-form" placeholder="Password" type="password" />
        <button className="primary-action-button">Login</button>
      </form>
    </div>
  );
}
