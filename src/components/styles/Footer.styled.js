import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 80px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    filter: brightness(0) invert(1);
  }

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: left;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      float: left;
    }

    ul {
      padding: 0;
    }

    p {
      text-align: center;
    }
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

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

export const InfoLine = styled.div`
  span {
    flex-shrink: 0;
    margin-right: 20px;
  }

  span img {
    max-width: 100%;
    height: auto;
  }

  p {
    opacity: 1;
    text-align: left !important;
    display: flex;
  }
`;
