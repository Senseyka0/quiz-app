export interface IQuiz {
  id: number;
  title: string;
  category: ICategory;
  questions: IQuestion[];
}

export interface IQuestion {
  id: number;
  question: string;
  answer: string;
  options: IOption[];
}

export interface ICategory {
  id: number;
  title: string;
  img: string;
}

export interface IOption {
  option: string;
}
