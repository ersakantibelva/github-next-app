"use client";
import { login } from "@/app/lib/actions";

export default function LoginForm() {
  return (
    <form
      action={(formData) => login(formData)}
      className="flex-col flex gap-2"
    >
      <input
        className="input-text-form"
        placeholder="Email"
        type="email"
        name="email"
      />
      <input
        className="input-text-form"
        placeholder="Password"
        type="password"
        name="password"
      />
      <button className="primary-action-button">Login</button>
    </form>
  );
}
