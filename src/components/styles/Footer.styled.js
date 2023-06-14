import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 60px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    filter: brightness(0) invert(1);
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    ul {
      padding: 0;
    }

    p {
      text-align: center;
    }
  }
`;
