import {useContext} from "react";

import {CounterContext} from "../../contexts/counter-context";
import useIsMobile from "../../hooks/use-is-mobile";
import useNavbarHandlers from "../../hooks/use-navbar-handlers";

import {StyledNavBar, IconsContainer, StyledImg, NavContainer} from "./styles";
import Links from "./Links";
import SearchInput from "./SearchInput";
import UserSlider from "./sliders/UserSlider";
import MenuSlider from "./sliders/MenuSlider";
import CartSlider from "./sliders/CartSlider";
import Button from "./Button";

const NavBar = () => {
  const {
    openMenu,
    openUser,
    openSearch,
    openCart,
    menuHandler,
    userHandler,
    searchHandler,
    cartHandler,
  } = useNavbarHandlers();
  const isMobile = useIsMobile();

  const {count} = useContext(CounterContext);

  return (
    <StyledNavBar>
      <NavContainer>
        <StyledImg href="#" />
        {!isMobile && <Links counter={count} onClick={cartHandler} />}
        {isMobile && (
          <IconsContainer>
            <SearchInput open={openSearch} />
            <Button open={openSearch} type="search" onClick={searchHandler} />
            <Button open={openUser} type="user" onClick={userHandler} />
            <Button counter={count} type="cart" onClick={cartHandler} />
            <Button open={openMenu} type="menu" onClick={menuHandler} />
          </IconsContainer>
        )}
        <MenuSlider open={openMenu} />
        <UserSlider open={openUser} />
        <CartSlider counter={count} open={openCart} />
      </NavContainer>
    </StyledNavBar>
  );
};

export default NavBar;
