import styled from "styled-components";

const Category = (props: any) => {
  const goToCategory = () => {};
  return (
    <Box onClick={goToCategory}>
      <h2>{props.title}</h2>
      <Image src={props.src} alt="Image" />
    </Box>
  );
};

const Box = styled.div`
  cursor: pointer;
`;
const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border: 4px solid #181532;
  border-radius: 15px;
`;
export default Category;
