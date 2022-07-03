import {StyledInput} from "./styles";

const Input = (props) => {
  let errorMsg =
    props.id === "name"
      ? "Ingrese un nombre válido."
      : props.id === "lastName"
      ? "Ingrese un apellido válido."
      : props.id === "email"
      ? "Ingrese un e-mail válido."
      : null;

  return (
    <StyledInput hasError={props.hasError}>
      <input
        name={props.id}
        placeholder={props.label}
        type={props.type}
        value={props.val}
        onBlur={() => props.onBlur(props.id)}
        onChange={(e) => {
          props.onChange(e.target.value, props.id);
        }}
      />
      <p>{errorMsg}</p>
    </StyledInput>
  );
};

export default Input;
