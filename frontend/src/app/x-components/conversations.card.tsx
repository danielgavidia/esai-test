"use client";

import { useRouter } from "next/navigation";

export interface ConversationCardProps {
  id: string;
  title: string;
  type: string;
  date: Date;
  image?: string;
}

const ConversationCard = ({ id, title, type, date, image }: ConversationCardProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`${type}/${id}`)}
      className="hover:shadow-lg transition-shadow duration-300 ease-in-out flex items-center border-[0.5px] rounded w-full space-x-4 p-2 bg-white"
    >
      <img src={image} alt="icon" className="rounded-full w-12 h-12 object-cover" />
      {/* <div className="ml-4"> */}
      <p className="font-semibold text-lg flex-1 text-left">{title}</p>
      <p className="text-sm text-gray-500">
        {date.toLocaleString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      {/* </div> */}
    </button>
  );
};

export default ConversationCard;
