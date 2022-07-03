import {StyledButton} from "./styles";

const Button = ({red, children, onClick}) => {
  return (
    <StyledButton red={red} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
