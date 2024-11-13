import { useSession } from "next-auth/react";

export function useClientSession() {
  const { data: session, status } = useSession();
  const user = session?.user;
  return { user, status };
}
