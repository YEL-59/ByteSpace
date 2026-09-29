"use server";

import { redirect } from "next/navigation";

export async function loginAction(formData: FormData): Promise<void> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return;
  }

  // Authentication logic (e.g. NextAuth, database session)
  console.log("Authenticating user via Next.js Server Action:", email);

  redirect("/");
}

export async function registerAction(formData: FormData): Promise<void> {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!fullName || !email || !password) {
    return;
  }

  // User creation logic (e.g. database insertion, verification email)
  console.log("Registering user via Next.js Server Action:", { fullName, email });

  redirect("/");
}
