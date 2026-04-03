"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const res = await fetch("http://localhost:8081/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    return { error: data.message };
  }

  const cookieStore = await cookies();
  cookieStore.set("JWT_token", data.result.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return { data: data };
}

export async function signupAction(formData: FormData) {
  const email = formData.get("email");
  const fullName = formData.get("fullName");
  const password = formData.get("password");
  const res = await fetch("http://localhost:8081/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, fullName }),
  });

  const data = await res.json();

  if (!res.ok) {
    return { error: data.message };
  }

  return { data: data };
}
