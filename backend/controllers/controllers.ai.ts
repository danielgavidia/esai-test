import type { Request, Response } from "express";
import { openaiChatCompletions } from "../utils/openai";

// POST AI prompt
export const getAIPrompt = async (req: Request, res: Response) => {
  const { questionBlocks } = req.body;

  const systemPrompt = `
You are an expert college admissions consultant with years of experience helping students strengthen their applications.
Analyze the provided student responses and generate strategic advice to enhance their college application.

Input format: Array of questionBlocks, each containing:
- question: The prompt given to the student
- answer: Student's response
- rating: Self-assessment score (1-5)

Your task:
1. Generate 3 specific, actionable pieces of advice
2. Consider both content improvement and strategic positioning
3. Keep advice practical and implementable

Return format: Array of exactly 3 strings containing your advice, formatted for TypeScript.
Do not include any additional formatting, variable names, or backticks.`;

  const userPrompt = `Based on these student responses, provide 3 strategic pieces of advice to strengthen their college application: ${JSON.stringify(
    questionBlocks
  )}`;

  const openaiRes = await openaiChatCompletions("gpt-4o-mini", systemPrompt, userPrompt);
  const openaiResParsed = JSON.parse(openaiRes);

  res.status(200).json(openaiResParsed);
};

// POST AI reprompt
export const getAIReprompt = async (req: Request, res: Response) => {
  const { reprompt, priorAdviceBlocks, questionBlocks } = req.body;

  const systemPrompt = `
You are an expert college admissions consultant refining previous advice based on student feedback.

Context provided:
1. Original student responses (questionBlocks with ratings)
2. Your previous 3 recommendations
3. Student's specific feedback for improvements

Requirements:
1. Maintain the strategic value while incorporating requested changes
2. Ensure advice is specific, actionable, and measurable
3. Focus on practical steps that strengthen college applications
4. Consider both the original context and new feedback
5. Preserve successful elements from prior advice

Return format: Array of exactly 3 refined advice strings, formatted for TypeScript.
Exclude any additional formatting, variable names, or backticks.`;

  const userPrompt = `
Context:
- Original Student Data: ${JSON.stringify(questionBlocks)}
- Previous Recommendations: ${JSON.stringify(priorAdviceBlocks)}

Refine the advice based on this feedback: ${reprompt}`;

  const openaiRes = await openaiChatCompletions("gpt-4o-mini", systemPrompt, userPrompt);
  const openaiResParsed = JSON.parse(openaiRes);

  res.status(200).json(openaiResParsed);
};
