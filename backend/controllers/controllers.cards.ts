import type { Request, Response } from "express";
import prisma from "../prisma/prisma";

// GET cards
export const getCards = async (req: Request, res: Response) => {
  const cards = await prisma.card.findMany();
  res.status(200).json(cards);
};

// POST card
export const postCard = async (req: Request, res: Response) => {
  const { content, type } = req.body;

  const card = await prisma.card.create({
    data: {
      content,
      type,
    },
  });

  res.status(200).json(card);
};
