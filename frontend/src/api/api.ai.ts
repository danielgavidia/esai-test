import { QuestionBlock } from "@/types/types";
import axiosClient from "./api.axiosClient";

// POST AI response
export const apiPostAIPrompt = async (questionBlocks: QuestionBlock[]): Promise<string[]> => {
  console.log("started");
  const res = await axiosClient.request({
    method: "POST",
    url: "/ai",
    data: {
      questionBlocks: questionBlocks,
    },
  });
  const data = res.data;
  console.log(data);
  return data;
};

// POST AI reprompt
export const apiPostAIReprompt = async (
  reprompt: string,
  priorAdviceBlocks: string[],
  questionBlocks: QuestionBlock[]
): Promise<string[]> => {
  console.log("started");
  const res = await axiosClient.request({
    method: "POST",
    url: "/ai/reprompt",
    data: {
      reprompt: reprompt,
      priorAdviceBlocks: priorAdviceBlocks,
      questionBlocks: questionBlocks,
    },
  });
  const data = res.data;
  console.log(data);
  return data;
};
