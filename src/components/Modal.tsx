import { ReactNode } from "react";
import styled from "styled-components";

const Modal = ({ title, content, bottom, isActive, handleClose }: Props) => {
  return (
    <Wrapper isActive={isActive} onClick={handleClose}>
      <Content isActive={isActive} onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>

        {content}

        <Bottom>{bottom}</Bottom>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<IsActiveProps>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  pointer-events: ${({ isActive }) => (isActive ? "all" : "none")};
`;

const Title = styled.h3`
  padding-bottom: 24px;
  margin-bottom: 24px;
  text-align: center;
  border-bottom: 1px solid #000;
`;

const Content = styled.div<IsActiveProps>`
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  width: 50vw;
  transition: 0.4s all;
  transform: ${({ isActive }) => (isActive ? "scale(1)" : "scale(0.5)")};
`;

const Bottom = styled.div`
  padding-top: 24px;
  margin-top: 24px;
  text-align: center;
  border-top: 1px solid #000;
`;

interface Props {
  title: string;
  content: ReactNode;
  bottom: ReactNode;
  isActive: boolean;
  handleClose: () => void;
}

interface IsActiveProps {
  isActive: boolean;
}

export default Modal;
