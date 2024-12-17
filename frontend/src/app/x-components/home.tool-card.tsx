import React from "react";

export interface ToolCardProps {
  title: string;
  image: string;
  tags: string[];
  description: string;
  isFree: boolean;
}

const ToolCard = ({ title, image, tags, description, isFree }: ToolCardProps) => {
  return (
    <div className="border-[0.5px] rounded-lg p-2">
      <div className="flex space-x-2">
        <img src={image} alt="tool-icon" className="h-10" />
        <p>{title}</p>
        {isFree && <div>Free</div>}
      </div>
      <div>
        {tags.map((tag, i) => (
          <div key={i}>{tag}</div>
        ))}
      </div>
      <div>{description}</div>
    </div>
  );
};

export default ToolCard;
