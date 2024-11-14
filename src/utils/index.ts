"use client";

export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts?.pop()?.split(";")?.shift();
  return null;
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const setCookie = (
  name: string,
  value: string,
  days = 7,
  path = "/"
) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString(); // 864e5 is 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=${path}`;
};
