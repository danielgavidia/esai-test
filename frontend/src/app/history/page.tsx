"use client";

import { useConversations } from "@/hooks/hooks.conversations";
import ConversationCard from "../x-components/conversations.card";

const Page = () => {
  const { conversations } = useConversations();

  return (
    <div>
      <div>
        {conversations &&
          conversations.map((conv, i) => (
            <ConversationCard
              key={i}
              id={conv.id}
              title={conv.type}
              type={conv.type}
              date={new Date(conv.createdAt)}
            />
          ))}
      </div>
    </div>
  );
};

export default Page;
