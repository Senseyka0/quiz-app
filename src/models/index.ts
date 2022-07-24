export interface IQuiz {
  id: number;
  title: string;
  category: ICategory;
  questions: IQuestion[];
}

export type ICategory =
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
