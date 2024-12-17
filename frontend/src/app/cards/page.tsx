"use client";

import { useCards } from "@/hooks/hooks.cards";
import OutputCard from "../x-components/tool.output-card";
import { robotoMono } from "@/lib/fonts";

const Page = () => {
  const { cards } = useCards();

  return (
    <div className="flex flex-col space-y-6 p-6 items-center w-full">
      <p className={`w-full text-center font-bold text-2xl ${robotoMono.className}`}>
        Your Bookmarked ESAI Cards
      </p>
      <div className="flex flex-col space-y-4 max-w-[54rem] p-2 rounded border-[1px]">
        {cards &&
          cards.map((card, i) => (
            <OutputCard
              key={i}
              content={card.content}
              toolType={card.type}
              saved={true}
              display={true}
              createdAt={new Date(card.createdAt)}
            />
          ))}
      </div>
    </div>
  );
};

export default Page;
