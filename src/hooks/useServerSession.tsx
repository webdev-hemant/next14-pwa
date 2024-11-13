"use server";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export const useServerSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
