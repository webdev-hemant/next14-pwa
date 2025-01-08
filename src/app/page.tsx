import UserDetails from "../components/molecules/userDetails";
import ClerkAuthHandler from "./hooks/clerkAuthHandler";
import PostCard from "../components/molecules/cards/postCard/postCard";
import BottomNavigation from "@/components/molecules/bottomNavigation/bottomNavigation";
import SecondPostCard from "@/components/molecules/cards/secondPostCard/secondPostCard";

export default function Home() {
  return (
    <div className="">
      {/* <UserDetails /> */}
      <main className="flex gap-2 items-center justify-center flex-wrap">
        <ClerkAuthHandler />
        {/* <PostCard
          {...{
            img_url: "/public/next.svg",
            desc: "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
            title:
              "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",
          }}
        /> */}
        {Array(10)
          .fill(null)
          .map((_, key) => {
            return <SecondPostCard key={key} />;
          })}
      </main>
      {/* <BottomNavigation /> */}
    </div>
  );
}
