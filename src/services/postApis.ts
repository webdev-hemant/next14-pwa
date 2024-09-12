import { axiosPublic } from "@/services/axiosInstance";
import { getAllPublicPostsEndpoint } from "./endpoints";

interface IPost {
  id: number;
  user_id: number | null;
  content: string;
  img_url: string;
  created_at: string;
  updated_at: string;
}

export const getAllPublicPosts = async (): Promise<IPost[]> => {
  const res = await axiosPublic.get(getAllPublicPostsEndpoint);
  return res.data;
};
