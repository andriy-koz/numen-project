import {StyledButton} from "./styles";

const Button = ({red, children, onClick, href}) => {
  return (
    <StyledButton href={href} red={red} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
