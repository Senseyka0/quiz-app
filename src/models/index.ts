export interface IQuiz {
  id: number;
  title: string;
  category: Category;
  questions: IQuestion[];
}

export type Category =
  | "Movies & Serials"
  | "Anime"
  | "TV Series"
  | "Cartoons"
  | "Documentaries"
  | "Music"
  | "Sport"
  | "Books"
  | "Games"
  | "Other";

export interface IQuestion {
  id: number;
  question: string;
  answer: string;
  options: IOption[];
}

export interface IOption {
  option: string;
}
