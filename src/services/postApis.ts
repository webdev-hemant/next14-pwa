import { axiosPublic } from "@/services/axiosInstance";
import { getAllPublicPostsEndpoint } from "./endpoints";

interface IPost {
  id: number;
  user_id: number | null;
  content: string;
  // img_url: string;
  media: {
    images: string[];
  };
  created_at: string;
  updated_at: string;
}

interface IPostRes {
  total: number;
  posts: IPost[];
}

type IgetAllPublicPosts = {
  isError: boolean;
  data: IPostRes;
};

export const getAllPublicPosts = async (): Promise<IgetAllPublicPosts> => {
  try {
    const res = await axiosPublic.get(getAllPublicPostsEndpoint);
    return { isError: false, data: res.data };
  } catch (error: any) {
    console.log({ homepagePostError: error.response.data });
    return { isError: true, data: error.response.data };
  }
};
