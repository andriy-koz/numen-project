import {useState} from "react";

const useNavbarHandlers = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const menuHandler = () => {
    setOpenMenu((prevState) => !prevState);
    setOpenUser(false);
    setOpenSearch(false);
    setOpenCart(false);
  };
  const userHandler = () => {
    setOpenUser((prevState) => !prevState);
    setOpenMenu(false);
    setOpenSearch(false);
    setOpenCart(false);
  };
  const searchHandler = () => {
    setOpenSearch((prevState) => !prevState);
    setOpenMenu(false);
    setOpenUser(false);
    setOpenCart(false);
  };
  const cartHandler = () => {
    setOpenCart((prevState) => !prevState);
    setOpenMenu(false);
    setOpenUser(false);
    setOpenSearch(false);
  };

  return {
    openMenu,
    openUser,
    openSearch,
    openCart,
    menuHandler,
    userHandler,
    searchHandler,
    cartHandler,
  };
};

export default useNavbarHandlers;
