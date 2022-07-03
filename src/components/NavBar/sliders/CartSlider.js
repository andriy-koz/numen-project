import {StyledCart} from "./styles";

const CartSlider = (props) => {
  return (
    <StyledCart open={props.open}>
      <p>{props.counter} vinos agregados</p>
    </StyledCart>
  );
};

export default CartSlider;
