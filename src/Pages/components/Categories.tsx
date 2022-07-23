import styled from "styled-components";

import Category from "./Category";

const Categories = () => {
  return (
    <>
      <h1>Categories</h1>
      <Wrapper>
        <Category />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
`;

export default Categories;
