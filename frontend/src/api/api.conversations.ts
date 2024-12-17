import { Conversation, ConversationQuestionBlock } from "@/types/types";
import axiosClient from "./api.axiosClient";

// POST conversation
export const apiPostConversation = async (
  toolType: string,
  questionBlocks: ConversationQuestionBlock[]
): Promise<void> => {
  const res = await axiosClient.request({
    method: "POST",
    url: "/conversations",
    data: {
      type: toolType,
      questionBlocks: questionBlocks,
    },
  });
  const data = res.data;
  console.log(data);
  return;
};

// GET conversations
export const apiGetConversations = async (): Promise<Conversation[]> => {
  const res = await axiosClient.request({
    method: "GET",
    url: "/conversations",
  });
  const data: Conversation[] = res.data;
  console.log(data);
  return data;
};
