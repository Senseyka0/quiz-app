import { axios } from "./axios";

import { IQuiz } from "../models";

const quizzes = {
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
