// Tool
export interface Tool {
  type: "story-strategist" | "school-match-maker";
  title: string;
  tags: string[];
  description: string;
  questionBlocks: QuestionBlock[];
}

// Question Block
export interface QuestionBlock {
  title: string;
  description: string;
  placeholder: string;
  answer: string;
  rating: number;
}

// Card
export interface Card {
  id: string;
  createdAt: string;
  content: string;
  type: string;
}

// Conversation
export interface Conversation {
  id: string;
  createdAt: string;
  type: string;
  questionBlocks: QuestionBlock[];
}
