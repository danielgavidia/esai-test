"use client";

import { useConversations } from "@/hooks/hooks.conversations";
import ConversationCard from "../x-components/conversations.card";
import { assets } from "@/lib/data.assets";

const Page = () => {
  const { conversations } = useConversations();

  return (
    <div className="flex flex-col p-4 space-y-4">
      <p className="w-full text-center">History</p>
      <div className="flex flex-col space-y-4 bg-gray-100 p-4 rounded">
        {conversations &&
          conversations.map((conv, i) => (
            <ConversationCard
              key={i}
              id={conv.id}
              title={conv.type}
              type={conv.type}
              date={new Date(conv.createdAt)}
              image={assets.find((a) => a.type === conv.type)?.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Page;
