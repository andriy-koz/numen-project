import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSize.titles};
  font-weight: 400;
  text-transform: uppercase;
  color: ${({inv}) => (inv ? ({theme}) => theme.color.complementary : "#7e1b22")};
  span {
    color: ${({inv}) => (!inv ? ({theme}) => theme.color.complementary : "#7e1b22")};
  }

  @media (max-width: 405px) {
    font-size: 24px;
  }
`;
