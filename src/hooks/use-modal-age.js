import {useState} from "react";

const modalAgeInitialState = () => {
  const localStorageItem = JSON.parse(localStorage.getItem("modalAge"));

  if (localStorageItem === null) return true;
  else return localStorageItem;
};

const useModalAge = () => {
  const [modalAgeOpen, setModalAgeOpen] = useState(modalAgeInitialState());
  const modalAgeHandler = () => {
    localStorage.setItem("modalAge", !modalAgeOpen);
    setModalAgeOpen(!modalAgeOpen);
  };

  return {modalAgeHandler, modalAgeOpen};
};

export default useModalAge;
