"use client";

import { QuestionBlock, Tool } from "@/types/types";
import { useState } from "react";
import QuestionBlockCard from "./tool.question-block";

export interface ToolMainProps {
  tool: Tool;
}

const ToolMain = ({ tool }: ToolMainProps) => {
  const [questionBlocks, setQuestionBlocks] = useState<QuestionBlock[]>(tool.questionBlocks);
  const [step, setStep] = useState<number>(0);
  const [textError, setTextError] = useState<boolean>(false);
  const [ratingError, setRatingError] = useState<boolean>(false);

  const stepMapping: Record<string, number[]> = {
    "0": [],
    "1": [0, 1],
    "2": [2, 3],
    "3": [4, 5],
    "4": [6, 7],
  };

  const stepMappingSubmit: Record<string, string> = {
    "0": "Let's go",
    "1": "Send",
    "2": "Send",
    "3": "Send",
    "4": "Submit",
  };

  const handleNext = () => {
    setTextError(false);
    setRatingError(false);

    const currentBlocks = questionBlocks.filter((_, i) => stepMapping[step].includes(i));
    const currentAnswers = currentBlocks.map((block) => block.answer);
    const currentRatings = currentBlocks.map((block) => block.rating);

    if (currentAnswers.includes("")) {
      setTextError(true);
      return;
    }

    if (currentRatings.includes(0)) {
      setRatingError(true);
      return;
    }

    setTextError(false);
    setRatingError(false);
    setStep((prev) => prev + 1);
  };

  console.log(questionBlocks);

  return (
    <div className="w-full h-full flex flex-col space-y-4 justify-center items-center">
      {/* Title */}
      <div className="text-3xl text-center font-bold">{tool.title}</div>

      {/* Tags */}
      <div className="flex space-x-2 justify-center">
        {tool.tags.map((tag, i) => (
          <div key={i} className="rounded-2xl p-1 text-xs bg-gray-100">
            #{tag}
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="text-center font-semibold">{tool.description}</div>

      {/* Step */}
      {step > 0 && <p className="text-xs">Step {step} of 4</p>}

      {/* Question blocks */}
      {step > 0 && (
        <form className="flex flex-col space-y-6 p-3 rounded-2xl border-[1px]">
          {questionBlocks.map((block, i) => {
            if (stepMapping[step.toString()].includes(i)) {
              return (
                <QuestionBlockCard
                  key={i}
                  questionBlock={block}
                  setRating={(rating) => {
                    const newBlocks = [...questionBlocks];
                    newBlocks[i].rating = rating;
                    setQuestionBlocks(newBlocks);
                  }}
                  setAnswer={(answer) => {
                    const newBlocks = [...questionBlocks];
                    newBlocks[i].answer = answer;
                    setQuestionBlocks(newBlocks);
                  }}
                />
              );
            }
            return null;
          })}
          {textError && <p className="text-red-500 text-sm">Please provide answers</p>}
          {ratingError && <p className="text-red-500 text-sm">Please provide ratings</p>}
        </form>
      )}

      {/* Submit button */}
      <button
        onClick={() => handleNext()}
        className="bg-yellow-200 w-24 text-center p-2 rounded-3xl border-2"
      >
        {stepMappingSubmit[step.toString()]}
      </button>
    </div>
  );
};

export default ToolMain;
