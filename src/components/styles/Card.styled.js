import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || "row"};

  h2 {
    margin-bottom: 20px;
  }

  img {
    width: 80%;
    float: ${({ float }) => float || "right"};
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
    text-align: center;

    h2 {
      margin-top: 50px;
    }

    img {
      float: none;
    }

    div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
