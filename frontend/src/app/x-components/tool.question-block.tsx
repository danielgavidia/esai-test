"use client";

import { QuestionBlock } from "@/types/types";
import { useState } from "react";
import { robotoMono } from "@/lib/fonts";

export interface QuestionBlockCardProps {
  questionBlock: QuestionBlock;
  setRating: (rating: number) => void;
  setAnswer: (answer: string) => void;
}

const QuestionBlockCard = ({ questionBlock, setRating, setAnswer }: QuestionBlockCardProps) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="w-full flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg">
      {/* Title */}
      <div className={`font-semibold text-lg text-gray-800 ${robotoMono.className}`}>
        {questionBlock.title}
      </div>

      {/* Description */}
      <div className="text-sm text-gray-600">{questionBlock.description}</div>

      {/* Answer input */}
      <textarea
        value={questionBlock.answer}
        placeholder={questionBlock.placeholder}
        className="border border-gray-300 rounded-lg text-sm w-full p-3 bg-gray-50 resize-none"
        onChange={(e) => setAnswer(e.target.value)}
      />

      {/* Star rating */}
      <p className="text-sm text-gray-700">How important is this to your story?</p>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              type="button"
              key={index}
              className={`text-2xl transition-colors duration-200 ${
                starValue <= (hover || questionBlock.rating) ? "text-yellow-500" : "text-gray-300"
              } hover:text-yellow-400`}
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
