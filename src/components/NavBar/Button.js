import closeIcon from "../../images/close.svg";
import searchIcon from "../../images/search.svg";
import userIcon from "../../images/user.svg";
import menuIcon from "../../images/menu.svg";
import cartIcon from "../../images/cart.svg";

import {StyledOpenMenu, StyledCloseMenu, StyledCounterDisplay} from "./styles";
import {Container} from "./styles";

const getIcon = (type) => {
  if (type === "search") return searchIcon;
  if (type === "user") return userIcon;
  if (type === "menu") return menuIcon;
  if (type === "cart") return cartIcon;
};

const Button = (props) => {
  return (
    <Container menu={props.type === "menu"} onClick={props.onClick}>
      <StyledOpenMenu alt="" open={props.open} src={getIcon(props.type)} />
      <StyledCloseMenu alt="" open={props.open} src={closeIcon} />
      {props.type === "cart" && (
        <StyledCounterDisplay>
          <p>{props.counter}</p>
        </StyledCounterDisplay>
      )}
    </Container>
  );
};

export default Button;
