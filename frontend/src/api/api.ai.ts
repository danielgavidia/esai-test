import { QuestionBlock } from "@/types/types";
import axiosClient from "./api.axiosClient";

export const apiGetAIResponse = async (questionBlocks: QuestionBlock[]): Promise<void> => {
  const res = await axiosClient.request({
    method: "POST",
    url: "/ai",
    data: {
      questionBlocks: questionBlocks,
    },
  });
  const data = res.data;
  console.log(data);
  return;
};
