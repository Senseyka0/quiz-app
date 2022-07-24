import styled from "styled-components";

const Content = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 20px;
`;

interface Props {
  children: React.ReactNode;
}

export default Content;
