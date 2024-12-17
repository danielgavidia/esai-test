import axiosClient from "./api.axiosClient";

// POST card
export const apiPostCard = async (cardContent: string, cardType: string): Promise<void> => {
  const res = await axiosClient.request({
    method: "POST",
    url: "/cards",
    data: {
      content: cardContent,
      type: cardType,
    },
  });
  const data = res.data;
  console.log(data);
  return;
};

// GET cards
export const apiGetCards = async (): Promise<void> => {
  const res = await axiosClient.request({
    method: "GET",
    url: "/cards",
  });
  const data = res.data;
  console.log(data);
  return;
};
