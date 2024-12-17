"use client";

import QuestionBlockNonInput from "@/app/x-components/tool.question-block-noninput";
import { useConversations } from "@/hooks/hooks.conversations";
import { robotoMono } from "@/lib/fonts";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const { conversations } = useConversations();
  const conversation = conversations ? conversations.find((conv) => conv.id === id) : null;

  if (conversation) {
    console.log(conversation);
  }

  return (
    <div className="p-6 flex flex-col space-y-4 flex flex-col items-center justify-center">
      {conversation && (
        <div className="max-w-[54rem]">
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className={`font-bold text-2xl ${robotoMono.className}`}>
              {conversation.type
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </p>
            <p className="text-gray-500 text-sm">
              {new Date(conversation.createdAt).toLocaleString([], {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            {conversation.questionBlocks.map((block, i) => (
              <QuestionBlockNonInput key={i} questionBlock={block} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
