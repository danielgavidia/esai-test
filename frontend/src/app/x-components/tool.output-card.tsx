"use client";

import { apiPostCard } from "@/api/api.cards";
import { Bookmark } from "lucide-react";

export interface OutputCardProps {
  content: string;
  saved: boolean;
  toolType: string;
}

const OutputCard = ({ content, saved, toolType }: OutputCardProps) => {
  const handleSave = async () => {
    console.log("started");
    const res = await apiPostCard(content, toolType);
    console.log(res);
  };

  return (
    <div
      className={`p-2 border-[0.5px] rounded-lg text-sm flex justify-between ${
        saved ? "bg-sky-100" : "bg-white"
      }`}
    >
      <div>{content}</div>
      <button onClick={() => handleSave()} className="flex justify-end">
        <Bookmark className="h-6" />
      </button>
      <div>{saved}</div>
    </div>
  );
};

export default OutputCard;
