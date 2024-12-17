import { Card } from "@/types/types";
import axiosClient from "./api.axiosClient";

// POST card
export const apiPostCard = async (cardContent: string, toolType: string): Promise<void> => {
  const res = await axiosClient.request({
    method: "POST",
    url: "/cards",
    data: {
      content: cardContent,
      type: toolType,
    },
  });
  const data = res.data;
  console.log(data);
  return;
};

// GET cards
export const apiGetCards = async (): Promise<Card[]> => {
  const res = await axiosClient.request({
    method: "GET",
    url: "/cards",
  });
  const data: Card[] = res.data;
  console.log(data);
  return data;
};
