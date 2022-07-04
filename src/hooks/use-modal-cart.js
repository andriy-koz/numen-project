import {useState} from "react";

const selectedWineInitialState = {name: "", price: "", img: ""};

const useModalCart = () => {
  const [modalCartOpen, setModalCartOpen] = useState(false);
  const [selectedWine, setSelectedWine] = useState(selectedWineInitialState);

  const modalCartHandler = (wineObj) => {
    setSelectedWine(wineObj);
    setModalCartOpen(!modalCartOpen);
  };

  const addWineHandler = () => {
    // TODO: sum up the context counter
    setSelectedWine(selectedWineInitialState);
    setModalCartOpen(!modalCartOpen);
  };

  const cancelHandler = () => {
    setSelectedWine(selectedWineInitialState);
    setModalCartOpen(!modalCartOpen);
  };

  return {modalCartOpen, modalCartHandler, selectedWine, addWineHandler, cancelHandler};
};

export default useModalCart;
