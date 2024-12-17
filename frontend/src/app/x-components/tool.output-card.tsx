export interface OutputCardProps {
  content: string;
  saved: boolean;
}

const OutputCard = ({ content, saved }: OutputCardProps) => {
  return (
    <div className="p-2 border-[0.5px] rounded-lg text-sm">
      <div>{content}</div>
      <div>{saved}</div>
    </div>
  );
};

export default OutputCard;
