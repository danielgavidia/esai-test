"use client";

import { useConversations } from "@/hooks/hooks.conversations";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const { conversations } = useConversations();
  const conversation = conversations ? conversations.find((conv) => conv.id === id) : null;

  return <div>{conversation && <div>{conversation.id}</div>}</div>;
};

export default Page;
