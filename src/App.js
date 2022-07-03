import {useState} from "react";
import {ThemeProvider} from "styled-components";

import useModalAge from "./hooks/use-modal-age";
import useModalCart from "./hooks/use-modal-cart";
import {theme} from "./theme/theme";
import {GlobalStyles} from "./global-styles";
import {CounterContext} from "./contexts/counter-context";
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
  const {modalCartHandler, modalCartOpen, selectedWine} = useModalCart();
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CounterContext.Provider value={{count, setCount}}>
        <NavBar />
        <Hero />
        <Wines modalHandler={modalCartHandler} />
        <Gallery />
        <Form />
        <Footer />
        {modalAgeOpen && <ModalAge onConfirm={modalAgeHandler} />}
        {modalCartOpen && <ModalCart selectedWine={selectedWine} />}
      </CounterContext.Provider>
    </ThemeProvider>
  );
}

export default App;
