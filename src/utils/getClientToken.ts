
import { getSession } from "next-auth/react";

export async function getClientToken() {
  const session = await getSession();
  return session?.user?.token || null;
}
