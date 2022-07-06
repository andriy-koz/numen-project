import "lazysizes";
import {ThemeProvider} from "styled-components";

import useModalAge from "./hooks/use-modal-age";
import useModalCart from "./hooks/use-modal-cart";
import {theme} from "./theme/theme";
import {GlobalStyles} from "./global-styles";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Wines from "./components/Wines";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ModalAge from "./components/ModalAge";
import ModalCart from "./components/ModalCart";

function App() {
  const {modalAgeHandler, modalAgeOpen} = useModalAge();
  const {modalCartHandler, modalCartOpen, selectedWine, addHandler, cancelHandler, counter} =
    useModalCart();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar counter={counter} />
      <Hero />
      <Wines modalHandler={modalCartHandler} />
      <Gallery />
      <Form />
      <Footer />
      {modalAgeOpen && <ModalAge onConfirm={modalAgeHandler} />}
      {modalCartOpen && (
        <ModalCart
          addHandler={addHandler}
          cancelHandler={cancelHandler}
          selectedWine={selectedWine}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
