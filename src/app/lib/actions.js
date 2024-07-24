"use server";

import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";

export const login = async (formData) => {
  await signIn("credentials", formData);
  redirect("/dashboard");
}

export const logout = async () => {
  await signOut();
  redirect("/login");
}
