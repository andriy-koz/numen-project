import {useState} from "react";

const useModalCart = () => {
  const [modalCartOpen, setModalCartOpen] = useState(false);
  const [selectedWine, setSelectedWine] = useState({name: "", price: ""});

  const modalCartHandler = (wineObj) => {
    setSelectedWine(wineObj);
    setModalCartOpen(!modalCartOpen);
  };

  return {modalCartOpen, modalCartHandler, selectedWine};
};

export default useModalCart;
