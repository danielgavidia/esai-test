"use client";

import { useRouter } from "next/navigation";
import { robotoMono } from "@/lib/fonts";

export interface ToolCardProps {
  title: string;
  image?: string;
  tags: string[];
  description: string;
  isFree: boolean;
  route?: string;
}

const ToolCard = ({ title, image, tags, description, isFree, route }: ToolCardProps) => {
  const router = useRouter();

  return (
    <button
      onClick={route ? () => router.push(route) : undefined}
      className="border-[0.5px] rounded-2xl p-5 flex flex-col space-y-3 bg-white max-h-48 
        hover:shadow-lg transition-all duration-200 hover:scale-[1.02] hover:border-gray-300"
    >
      <div className="flex space-x-3 w-full">
        <img src={image} alt="tool-icon" className="h-14 bg-gray-50 p-2 rounded-xl shadow-sm" />
        <p className={`text-left font-semibold flex-1 leading-tight ${robotoMono.className}`}>
          {title}
        </p>
        {isFree && (
          <div
            className="rounded-full bg-yellow-100 px-3 text-xs h-6 p-1 flex items-center 
            border-[0.5px] border-yellow-200 ml-auto text-yellow-700"
          >
            <p>Free</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="rounded-full px-2 py-1 text-xs bg-gray-50 text-gray-600 
            border-[0.5px] border-gray-100"
          >
            #{tag}
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-600 text-start line-clamp-2">{description}</div>
    </button>
  );
};

export default ToolCard;
