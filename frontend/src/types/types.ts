export interface Tool {
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
