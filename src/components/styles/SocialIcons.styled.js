import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
  }
`;
