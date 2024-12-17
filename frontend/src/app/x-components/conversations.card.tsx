export interface ConversationCardProps {
  title: string;
  type: string;
  date: Date;
}

const ConversationCard = ({ title, type, date }: ConversationCardProps) => {
  return (
    <div>
      <p>{title}</p>
      <p>{type}</p>
      <p>{date.toDateString()}</p>
    </div>
  );
};

export default ConversationCard;
