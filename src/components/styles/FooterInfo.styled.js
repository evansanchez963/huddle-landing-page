import styled from "styled-components";

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 0;

    ul {
      text-align: left;
    }

    ul:nth-child(1) {
      margin-bottom: 40px;
    }
  }
`;
