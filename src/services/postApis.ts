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

export const getAllPublicPosts = async (): Promise<IPostRes> => {
  try {
    const res = await axiosPublic.get(getAllPublicPostsEndpoint);
    return res.data;
  } catch (error) {
    console.log(error);
    return [] as unknown as IPostRes;
  }
};
