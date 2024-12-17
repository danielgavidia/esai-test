import type { Request, Response } from "express";
import prisma from "../prisma/prisma";

// GET conversations
export const getConversations = async (req: Request, res: Response) => {
  const conversations = await prisma.conversation.findMany();
  res.status(200).json(conversations);
};

// POST conversation
export const postConversation = async (req: Request, res: Response) => {
  const { type, questionBlocks } = req.body;

  const conversation = await prisma.conversation.create({
    data: {
      type,
      questionBlocks: {
        create: questionBlocks.map(
          (block: { title: string; description: string; answer: string; rating: number }) => ({
            title: block.title,
            description: block.description,
            answer: block.answer,
            rating: block.rating,
          })
        ),
      },
    },
    include: {
      questionBlocks: true,
    },
  });

  res.status(200).json(conversation);
};
