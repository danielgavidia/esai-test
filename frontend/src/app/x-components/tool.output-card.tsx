"use client";

import { apiPostCard } from "@/api/api.cards";
import { Bookmark } from "lucide-react";

export interface OutputCardProps {
  content: string;
  saved: boolean;
  toolType: string;
  display: boolean;
  createdAt?: Date;
}

const OutputCard = ({ content, saved, toolType, display, createdAt }: OutputCardProps) => {
  const handleSave = async () => {
    await apiPostCard(content, toolType);
  };

  return (
    <div
      className={`p-2 border-[0.5px] rounded-lg text-sm flex justify-between ${
        saved ? "bg-sky-100" : "bg-white"
      }`}
    >
      <div className="flex-1">
        <div>
          {display && (
            <div className="flex space-x-2 items-center">
              <p className="font-semibold">
                {toolType
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </p>
              <p className="text-xs italic">{createdAt?.toLocaleDateString()}</p>
            </div>
          )}
        </div>
        <p>{content}</p>
      </div>
      {!display && (
        <button onClick={() => handleSave()} className="flex justify-end w-full max-w-10">
          <Bookmark className="h-6" />
        </button>
      )}
      <div>{saved}</div>
    </div>
  );
};

export default OutputCard;
