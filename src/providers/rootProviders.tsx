"use client";
import BNavigationTwo from "@/components/atoms/bottomNavigation/bNavigationTwo";
import { useClientSession } from "@/hooks/useClientSession";
import { getCookie, setCookie } from "@/utils";
import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";

const SubRootProviders = ({ children }: { children: React.ReactNode }) => {
  const session = useClientSession();

  useEffect(() => {
    if (!getCookie("token")) {
      setCookie("token", session?.user?.token as string);
    }
  }, [session]);

  return children;
};

export default function RootProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SessionProvider>
        <SubRootProviders>{children}</SubRootProviders>
      </SessionProvider>
    </>
  );
}
