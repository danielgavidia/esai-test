"use client";

import { useRouter } from "next/navigation";

export interface ToolCardProps {
  title: string;
  image: string;
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
      className="border-[0.5px] rounded-2xl p-4 flex flex-col space-y-2"
    >
      <div className="flex space-x-2">
        <img src={image} alt="tool-icon" className="h-14 bg-gray-100 p-1 rounded" />
        <p className="font-semibold flex-1">{title}</p>
        {isFree && (
          <div className="rounded bg-yellow-200 rounded-xl text-xs h-6 p-1 flex items-center border-[0.5px]">
            <p>Free</p>
          </div>
        )}
      </div>
      <div className="flex space-x-2">
        {tags.map((tag, i) => (
          <div key={i} className="rounded-2xl p-1 text-xs bg-gray-100">
            #{tag}
          </div>
        ))}
      </div>
      <div className="text-xs text-start">{description}</div>
    </button>
  );
};

export default ToolCard;
