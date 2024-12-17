import type { Request, Response } from "express";
import { openaiChatCompletions } from "../utils/openai";

// GET AI response
export const getAIResponse = async (req: Request, res: Response) => {
  const { questionBlocks } = req.body;

  const systemPrompt = `
You are a helpful assistant tasked with helping students get into college.
You will be provided with a data structure called questionBlock.
A questionBlock has the following schema: {question: string, answer: string, rating: number}.
Ratings are on a scale of 1 to 5.
Each question block corresponds.
You are tasked with taking this data and generating bespoke advice for the student to strengthen their college application.
You will return each advice as a string.
Each 'advice string' will correspond a given question block.
This array will be used in a Typescript application, so only return the TS array.
  `;

  const userPrompt = `Here are the questionBlocks: ${JSON.stringify(questionBlocks)}`;

  const openaiRes = await openaiChatCompletions("gpt-4o-mini", systemPrompt, userPrompt);

  res.status(200).json(openaiRes);
};
