"use client";

import { QuestionBlock } from "@/types/types";
import { useState } from "react";

export interface QuestionBlockCardProps {
  questionBlock: QuestionBlock;
  setRating: (rating: number) => void;
  setAnswer: (answer: string) => void;
}

const QuestionBlockCard = ({ questionBlock, setRating, setAnswer }: QuestionBlockCardProps) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="w-full flex flex-col space-y-2">
      {/* Title */}
      <div className="font-semibold">{questionBlock.title}</div>

      {/* Description */}
      <div className="text-xs">{questionBlock.description}</div>

      {/* Answer input */}
      <textarea
        value={questionBlock.answer}
        placeholder={questionBlock.placeholder}
        className="border-[1px] rounded-xl text-xs w-full p-2 resize-none"
        onChange={(e) => setAnswer(e.target.value)}
      />

      {/* Star rating */}
      <p className="text-xs">How important is this to your story?</p>
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              type="button"
              key={index}
              className={`text-2xl ${
                starValue <= (hover || questionBlock.rating) ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(questionBlock.rating)}
            >
              ★
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionBlockCard;
