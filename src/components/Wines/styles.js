import styled from "styled-components";

export const StyledWines = styled.div`
  color: ${(props) => props.theme.color.complementary};
  max-width: 1024px;
  margin: 95px auto 0;
  text-align: center;
  padding: 0 40px;
`;

export const StyledCard = styled.figure`
  background-color: ${({theme}) => theme.color.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 0 50px;
  width: 100%;
  img {
    width: 200px;
    height: 300px;
  }
  button {
    margin-top: 15px;
  }
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 18px;
    font-style: italic;
  }
  span {
    font-style: normal;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    max-width: 400px;
    button {
      width: 80%;
    }
  }
`;

export const Grid = styled.div`
  margin: 30px auto 0;
  display: grid;
  justify-items: center;
  gap: 50px;
  max-width: 800px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
