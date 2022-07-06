import {useReducer, useState} from "react";

const reducerFunction = (state, action) => {
  if (action.type === "ON_CHANGE") {
    let newState = {...state};

    if (action.val) newState[action.id].hasError = false;

    newState[action.id].val = action.val;

    return newState;
  }
  if (action.type === "ON_BLUR") {
    let newState = {...state};

    newState[action.id].touched = true;

    if (newState[action.id].val) newState[action.id].hasError = false;
    else newState[action.id].hasError = true;

    return newState;
  }
  if (action.type === "RESET") {
    let newState = {...state};

    for (const key in newState) {
      state[key].val = "";
      state[key].touched = false;
    }

    return newState;
  }
};

const formValidate = (state) => {
  for (const key in state) {
    if (!state[key].val) return false;
  }

  return true;
};

const initialState = (ids) => {
  const myState = {};

  ids.forEach((id) => {
    myState[id] = {
      val: "",
      touched: false,
      hasError: false,
    };
  });

  return myState;
};

const useForm = (inputIds) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState(inputIds));
  const [validForm, setValidForm] = useState(false);

  const onInputChange = (value, id) => {
    dispatch({type: "ON_CHANGE", val: value, id: id});
  };

  const onInputBlur = (id) => {
    dispatch({type: "ON_BLUR", id: id});
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await setValidForm(formValidate(state));
    if (!validForm) return;
    dispatch({type: "RESET"});
  };

  return {state, onInputChange, onInputBlur, onFormSubmit};
};

export default useForm;
