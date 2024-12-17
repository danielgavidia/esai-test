"use client";

import { useCards } from "@/hooks/hooks.cards";
import OutputCard from "../x-components/tool.output-card";

const Page = () => {
  const { cards } = useCards();

  if (cards) {
    console.log(cards);
  }

  return (
    <div>
      <p>Your Bookmarked ESAI Cards</p>
      <div>
        {cards &&
          cards.map((card, i) => (
            <OutputCard key={i} content={card.content} toolType={card.type} saved={true} />
          ))}
      </div>
    </div>
  );
};

export default Page;
