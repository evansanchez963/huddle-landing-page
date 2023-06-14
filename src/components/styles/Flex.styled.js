import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    max-width: 800px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  img {
    filter: none;
    margin: 0;
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
