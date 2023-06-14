import styled from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
  }

  button {
    align-self: flex-start;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;

    button {
      align-self: center;
    }
  }
`;
