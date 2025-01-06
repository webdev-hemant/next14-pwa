import UserDetails from "../components/molecules/userDetails";
import ClerkAuthHandler from "./hooks/clerkAuthHandler";
import PostCard from "../components/molecules/cards/postCard/postCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <UserDetails />
        <ClerkAuthHandler />
        <PostCard
          {...{
            img_url: "/public/next.svg",
            desc: "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
            title:
              "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
          }}
        />
      </main>
    </div>
  );
}
