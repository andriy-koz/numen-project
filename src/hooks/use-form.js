import {useReducer, useCallback} from "react";

const reducerFunction = (state, action) => {
  if (action.type === "ON_CHANGE") {
    let newState = {...state};

    newState[action.id].val = action.val;

    return newState;
  }
  if (action.type === "ON_BLUR") {
    let newState = {...state};

    newState[action.id].touched = true;

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

const useForm = (inputIds) => {
  // Sería mover mejor esta funcion fuera del custom hook
  const initialState = useCallback((ids) => {
    const myState = {};

    ids.forEach((id) => {
      myState[id] = {
        val: "",
        touched: false,
        hasError: false,
      };
    });

    return myState;
  }, []);

  const [state, dispatch] = useReducer(reducerFunction, initialState(inputIds));

  const onInputChange = (value, id) => {
    dispatch({type: "ON_CHANGE", val: value, id: id});
  };

  const onInputBlur = (id) => {
    dispatch({type: "ON_BLUR", id: id});
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!validForm) return;
    dispatch({type: "RESET"});
  };

  // ¿Por qué usaron un for?
  for (const key in state) {
    if (!state[key].val && state[key].touched) {
      let newState = {...state};

      newState[key].hasError = true;
    }
    if (state[key].val) {
      let newState = {...state};

      newState[key].hasError = false;
    }
  }

  // ¿Por qué una constante y no un estado?
  const validForm = formValidate(state);

  // Un objeto suele ser mejor que un array
  return [state, onInputChange, onInputBlur, onFormSubmit, validForm];
};

export default useForm;
