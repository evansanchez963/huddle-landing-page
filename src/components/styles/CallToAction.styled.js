import styled from "styled-components";

export const StyledCTA = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 40px;

  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 50px;
  max-width: 600px;

  top: 80px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 620px) {
    & {
      max-width: calc(100% - 20px);
    }
  }
`;
