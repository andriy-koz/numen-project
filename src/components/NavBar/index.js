import React, {useState, useEffect, useContext} from "react";

import logo from "../../images/numen.png";
import {ContadorContext} from "../../App";

import {StyledNavBar, IconsContainer, StyledImg} from "./NavBar.styled";
import Links from "./Links";
import SearchInput from "./SearchInput";
import UserSlider from "./sliders/UserSlider";
import MenuSlider from "./sliders/MenuSlider";
import CartSlider from "./sliders/CartSlider";
import Button from "./Button";

// No dejar espacios vacíos, aquí habia 3 renglones vacios

const NavBar = () => {
  // open es mejor que opened
  const [openedMenu, setOpenedMenu] = useState(false);
  const [openedUser, setOpenedUser] = useState(false);
  const [openedSearch, setOpenedSearch] = useState(false);
  const [openedCart, setOpenedCart] = useState(false);

  const {cont} = useContext(ContadorContext);

  // En lugar del useEffect, podrían agregar esta lógica a los handlers, es más performante
  useEffect(() => {
    if (openedUser) {
      setOpenedMenu(false);
      setOpenedSearch(false);
      setOpenedCart(false);
    }
    if (openedSearch) {
      setOpenedUser(false);
      setOpenedMenu(false);
      setOpenedCart(false);
    }
    if (openedCart) {
      setOpenedMenu(false);
      setOpenedSearch(false);
      setOpenedUser(false);
    }
  }, [openedUser, openedSearch]);

  const menuHandler = () => {
    setOpenedMenu((prevState) => !prevState);
    setOpenedSearch(false);
    setOpenedUser(false);
    setOpenedCart(false);
  };
  const userHandler = () => setOpenedUser((prevState) => !prevState);
  const searchHandler = () => setOpenedSearch((prevState) => !prevState);
  const cartHandler = () => setOpenedCart((prevState) => !prevState);

  return (
    <StyledNavBar>
      <StyledImg alt="Numen logo" src={logo} />
      <Links counter={cont} onClick={cartHandler} />
      {/* En lugar de ocultarlo con media queries, pueden renderizarlos condicionalmente
        en base a ciertos parámetros. Por ejemplo, podrían crear un hook useIsMobile, o useWidth */}
      <IconsContainer>
        <SearchInput opened={openedSearch} />
        <Button opened={openedSearch} type="search" onClick={searchHandler} />
        <Button opened={openedUser} type="user" onClick={userHandler} />
        <Button counter={cont} type="cart" onClick={cartHandler} />
        <Button opened={openedMenu} type="menu" onClick={menuHandler} />
      </IconsContainer>
      <MenuSlider opened={openedMenu} />
      <UserSlider opened={openedUser} />
      <CartSlider counter={cont} opened={openedCart} />
    </StyledNavBar>
  );
};

export default NavBar;
