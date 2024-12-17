import { apiGetConversations } from "@/api/api.conversations";
import { Conversation } from "@/types/types";
import { useEffect, useState } from "react";

export const useConversations = () => {
  const [conversations, setConversations] = useState<Conversation[] | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      const res: Conversation[] = await apiGetConversations();
      setConversations(res);
    };
    fetchConversations();
  }, []);

  return { conversations };
};
