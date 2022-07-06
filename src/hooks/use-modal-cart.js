import {useState} from "react";

const selectedWineInitialState = {name: "", price: "", img: ""};

const useModalCart = () => {
  const [modalCartOpen, setModalCartOpen] = useState(false);
  const [selectedWine, setSelectedWine] = useState(selectedWineInitialState);
  const [counter, setCounter] = useState(0);

  const modalCartHandler = (wineObj) => {
    setSelectedWine(wineObj);
    setModalCartOpen(!modalCartOpen);
  };

  const addHandler = () => {
    setCounter((prev) => prev + 1);
    setSelectedWine(selectedWineInitialState);
    setModalCartOpen(!modalCartOpen);
  };

  const cancelHandler = () => {
    setSelectedWine(selectedWineInitialState);
    setModalCartOpen(!modalCartOpen);
  };

  return {modalCartOpen, modalCartHandler, selectedWine, addHandler, cancelHandler, counter};
};

export default useModalCart;
