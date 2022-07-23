import { useEffect } from "react";
import { useParams } from "react-router-dom";

import quizzes from "../../api/quizzes";

const Quiz = () => {
  // @ts-ignore
  const { quizId }: UrlProps = useParams();

  useEffect(() => {
    quizzes.getQuiz(quizId).then((quiz) => {});
  }, [quizId]);

  return <></>;
};

interface Props {}

interface UrlProps {
  quizId: string;
}

export default Quiz;
