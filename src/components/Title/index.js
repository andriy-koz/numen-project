import {StyledTitle} from "./styles";

const Title = ({text1, text2, invert}) => {
  return (
    <StyledTitle inv={invert}>
      {text1} <span>{text2}</span>
    </StyledTitle>
  );
};

export default Title;
