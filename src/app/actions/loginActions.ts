"use server";
import { allRoutes } from "@/constants/allRoutes";
import { redirect } from "next/navigation";

export const handleLogin = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Email and Password are required");
  }

  // Simulate login logic
  if (email === "test@example.com" && password === "password123") {
    redirect(allRoutes.HOME);
  } else {
    throw new Error("Invalid credentials");
  }
};
