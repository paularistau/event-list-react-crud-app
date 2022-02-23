import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

export const LoadingContent = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  display: flex;
  padding-left: 5px;
  background: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
