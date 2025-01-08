"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
// import axios from "axios";

const ClerkAuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    const storeUserInDb = async () => {
      // if (isSignedIn && user) {
      //   try {
      //     await axios.post("/api/store-user", {
      //       userId: user.id,
      //       email: user.emailAddresses[0].emailAddress,
      //       name: user.fullName,
      //     });
      //     console.log("User stored successfully");
      //   } catch (err) {
      //     console.error("Error storing user:", err);
      //   }
      // }
    };

    storeUserInDb();
  }, [isSignedIn, user]);

  return null;
};

export default ClerkAuthHandler;
