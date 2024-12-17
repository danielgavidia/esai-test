import { QuestionBlock } from "@/types/types";

interface QuestionBlockNonInputProps {
  questionBlock: QuestionBlock;
}

const QuestionBlockNonInput = ({ questionBlock }: QuestionBlockNonInputProps) => {
  return (
    <div className="w-full flex flex-col space-y-2">
      {/* Title */}
      <div className="font-semibold">{questionBlock.title}</div>

      {/* Description */}
      <div className="text-xs">{questionBlock.description}</div>

      {/* Answer input */}
      <div className="border-[1px] rounded-xl text-xs w-full p-2 resize-none">
        {questionBlock.answer}
      </div>

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
                starValue <= questionBlock.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionBlockNonInput;
