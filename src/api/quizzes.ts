import { axios } from "./axios";

import { IQuiz, ICategory } from "../models";

const quizzes = {
  getCategories: async () => {
    const { data } = await axios.request<Promise<ICategory[]>>({
      method: "GET",
      url: "/categories",
    });
    return data;
  },
  getQuizzes: async () => {
    const { data } = await axios.request<Promise<IQuiz[]>>({
      method: "GET",
      url: "/quizzes",
    });

    return data;
  },

  getQuiz: async (quizId: string) => {
    const { data } = await axios.request<Promise<IQuiz>>({
      method: "GET",
      url: `/quizzes/${quizId}`,
    });

    return data;
  },
};

export default quizzes;
