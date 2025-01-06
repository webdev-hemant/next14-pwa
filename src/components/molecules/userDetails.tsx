"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const UserDetails = () => {
  const { user } = useUser();

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h4>Full name: {user?.fullName}</h4>
      <h5>Email: {user?.primaryEmailAddress?.emailAddress}</h5>
    </div>
  );
};

export default UserDetails;
