import Logout from "@/components/molecules/Logout";
import Card from "@/components/atoms/card/card";
import { getAllPublicPosts } from "@/services/postApis";
import BNavigationTwo from "@/components/atoms/bottomNavigation/bNavigationTwo";

const HomePage = async () => {
  const cards = await getAllPublicPosts();

  return (
    <div className="flex flex-col items-center gap-5 m-4 ">
      {cards?.posts?.map(({ media: { images }, content }) => {
        return (
          <Card
            key={images[0]}
            img_url={images[0]}
            desc={content}
            title={content}
          />
        );
      })}
      <Logout />
      <BNavigationTwo />
    </div>
  );
};

export default HomePage;
