"use client";

import { apiPostCard } from "@/api/api.cards";
import { robotoMono } from "@/lib/fonts";
import { Bookmark } from "lucide-react";
import CopyToClipboardButton from "./misc.clipboard-button";

export interface OutputCardProps {
  content: string;
  saved: boolean;
  toolType: string;
  display: boolean;
  createdAt?: Date;
  setSaved?: (saved: boolean) => void;
}

const OutputCard = ({
  content,
  saved,
  toolType,
  display,
  createdAt,
  setSaved,
}: OutputCardProps) => {
  const handleSave = async () => {
    await apiPostCard(content, toolType);
    setSaved?.(true);
  };

  return (
    <div
      className={`p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-sm flex justify-between bg-white`}
    >
      <div className="flex-1 space-y-2">
        {display && (
          <div className="flex justify-between items-center pb-2 border-b border-gray-100 space-x-2">
            <p className={`flex-1 font-semibold ${robotoMono.className} text-gray-800`}>
              {toolType
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </p>
            <p className="text-xs text-gray-500">
              {createdAt?.toLocaleDateString()}{" "}
              {createdAt?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
            {display && <CopyToClipboardButton textToCopy={content} />}
          </div>
        )}
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
      {!display && (
        <button
          onClick={() => handleSave()}
          className={`ml-4 p-2 rounded-lg transition-colors duration-200 ${
            saved
              ? "bg-green-50 text-green-600"
              : "hover:bg-gray-50 text-gray-400 hover:text-gray-600"
          }`}
        >
          <Bookmark className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default OutputCard;
