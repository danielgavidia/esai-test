"use client";

import { useRouter } from "next/navigation";

export interface ConversationCardProps {
  id: string;
  title: string;
  type: string;
  date: Date;
}

const ConversationCard = ({ id, title, type, date }: ConversationCardProps) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`${type}/${id}`)}>
      <p>{title}</p>
      <p>{type}</p>
      <p>{date.toDateString()}</p>
    </button>
  );
};

export default ConversationCard;
