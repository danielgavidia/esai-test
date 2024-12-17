import { robotoMono } from "@/lib/fonts";
import { QuestionBlock } from "@/types/types";

interface QuestionBlockNonInputProps {
  questionBlock: QuestionBlock;
}

const QuestionBlockNonInput = ({ questionBlock }: QuestionBlockNonInputProps) => {
  return (
    <div className="w-full flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg">
      <div className={`font-semibold text-lg text-gray-800 ${robotoMono.className}`}>
        {questionBlock.title}
      </div>

      <div className="text-sm text-gray-600">{questionBlock.description}</div>

      <div className="border border-gray-300 rounded-lg text-sm w-full p-3 bg-gray-50">
        {questionBlock.answer}
      </div>

      <p className="text-sm text-gray-700">How important is this to your story?</p>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              type="button"
              key={index}
              className={`text-2xl transition-colors duration-200 ${
                starValue <= questionBlock.rating ? "text-yellow-500" : "text-gray-300"
              } hover:text-yellow-400`}
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
