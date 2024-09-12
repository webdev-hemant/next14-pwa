import Logout from "@/components/molecules/Logout";
import Card from "@/components/atoms/card/card";
import { getAllPublicPosts } from "@/services/postApis";

const HomePage = async () => {
  const cards = await getAllPublicPosts();

  return (
    <div className="flex flex-col items-center gap-5 m-4 ">
      {cards?.map(({ img_url, content }) => {
        return (
          <Card
            key={img_url}
            img_url={img_url}
            desc={content}
            title={content}
          />
        );
      })}
      <Logout />
    </div>
  );
};

export default HomePage;
