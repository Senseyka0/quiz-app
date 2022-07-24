import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import quizzes from "../../api/quizzes";
import Modal from "../../components/Modal";
import { IQuiz } from "../../models";

const Quiz = () => {
  // @ts-ignore
  const { quizId }: UrlProps = useParams();

  const [quiz, setQuiz] = useState<IQuiz>({} as IQuiz);

  const [isLoading, setIsLoading] = useState(false);
  const [isActiveQuiz, setIsActiveQuiz] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    quizzes.getQuiz("2").then((quiz) => {
      setQuiz(quiz);
      setIsLoading(false);
    });
  }, [quizId]);

  if (isLoading) return <Loading>Loading...</Loading>;

  return (
    <>
      <button onClick={() => setIsActiveQuiz(true)}>Click</button>

      <Modal
        isActive={isActiveQuiz}
        handleClose={() => setIsActiveQuiz(false)}
        title={quiz.title}
        content={
          <div>
            <h2>Title: {quiz.title}</h2>
            <h3>Category: {quiz.category}</h3>
          </div>
        }
        bottom={<Button>Start</Button>}
      />
    </>
  );
};

const Button = styled.button`
  padding: 14px;
  color: white;
  background-color: orange;
  border: 1px solid white;
  width: 120px;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: #ffc107;
  }
`;

const Loading = styled.h2`
  text-align: center;
`;

interface Props {}

interface UrlProps {
  quizId: string;
}

export default Quiz;
