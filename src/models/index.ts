export interface IQuiz {
  id: number;
  title: string;
  category: ICategory;
  questions: ICategory[];
}

export interface ICategory {
  id: number;
  question: string;
  answer: string;
  options: IOption[];
}

export interface IOption {
  option: string;
}
