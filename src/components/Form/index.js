import useForm from "../../hooks/use-form";
import Button from "../Button";
import Title from "../Title";

import {InputLayoutDiv, LayoutDiv, StyledForm, FormContainer} from "./styles";
import Input from "./Input";

const Form = () => {
  const [state, onInputChange, onInputBlur, onFormSubmit] = useForm(["name", "lastName", "email"]);

  return (
    <StyledForm id="form">
      <FormContainer>
        <LayoutDiv>
          <Title invert text1="Únete a nuestra lista" text2="vip" />
          <p>Recibe novedades, ofertas e invitaciones exclusivas!</p>
        </LayoutDiv>
        <form
          onSubmit={(e) => {
            onFormSubmit(e);
          }}
        >
          <InputLayoutDiv>
            <Input
              hasError={state.name.hasError}
              id="name"
              label="Nombre"
              type="text"
              val={state.name.val}
              onBlur={onInputBlur}
              onChange={onInputChange}
            />
            <Input
              hasError={state.lastName.hasError}
              id="lastName"
              label="Apellido"
              type="text"
              val={state.lastName.val}
              onBlur={onInputBlur}
              onChange={onInputChange}
            />
          </InputLayoutDiv>
          <Input
            hasError={state.email.hasError}
            id="email"
            label="Email"
            type="email"
            val={state.email.val}
            onBlur={onInputBlur}
            onChange={onInputChange}
          />
          <Button red>ENVIAR</Button>
        </form>
      </FormContainer>
    </StyledForm>
  );
};

export default Form;
