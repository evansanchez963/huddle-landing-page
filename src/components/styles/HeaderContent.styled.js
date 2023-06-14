import styled from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    max-width: 800px;
  }

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
