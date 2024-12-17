// GET AI response
export const getAIResponse = async (req: Request, res: Response) => {
  const { questionBlocks } = req.body;
  res.status(200).json(cards);
};
