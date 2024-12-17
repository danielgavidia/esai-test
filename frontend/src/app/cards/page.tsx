"use client";

import { useCards } from "@/hooks/hooks.cards";
import OutputCard from "../x-components/tool.output-card";

const Page = () => {
  const { cards } = useCards();

  return (
    <div className="flex flex-col space-y-6">
      <p className="font-bold text-xl">Your Bookmarked ESAI Cards</p>
      <div className="flex flex-col space-y-2">
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
