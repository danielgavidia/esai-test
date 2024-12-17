import { apiGetCards } from "@/api/api.cards";
import { Card } from "@/types/types";
import { useEffect, useState } from "react";

export const useCards = () => {
  const [cards, setCards] = useState<Card[] | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      const fetchedCards = await apiGetCards();
      setCards(fetchedCards);
    };
    fetchCards();
  }, []);

  return { cards };
};
