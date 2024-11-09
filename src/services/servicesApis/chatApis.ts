import { axiosPublic, axiosInternal } from "@/services/axiosInstance";
import { getAllConversationsEndpoint } from "../endpoints";

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

type IGetAllConversations = {
  isError: boolean;
  data: IPostRes;
};

export const getAllConversations = async (): Promise<IGetAllConversations> => {
  try {
    const res = await axiosInternal.get(getAllConversationsEndpoint);
    return { isError: false, data: res.data };
  } catch (error: any) {
    console.log({ getAllConversationsError: error?.response?.data, error });
    return { isError: true, data: error?.response?.data };
  }
};
