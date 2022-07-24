import { useEffect, useState } from "react";
import styled from "styled-components";
import quizzes from "../../api/quizzes";
import { ICategory } from "../../models";

import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    quizzes.getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <Container>
      <h1>Categories</h1>

      <Wrapper>
        {categories.map((category) => (
          <Category title={category.title} src={category.img} />
        ))}
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 1250px;
  & > h1 {
    text-align: center;
    margin: 25px 0;
  }
`;

export default Categories;
