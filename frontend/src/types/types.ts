export interface Tool {
  type: "story-strategist" | "school-match-maker";
  title: string;
  tags: string[];
  description: string;
  questionBlocks: QuestionBlock[];
}

export interface QuestionBlock {
  title: string;
  description: string;
  placeholder: string;
  answer: string;
  rating: number;
}
