import {myList} from "../Links";

import {StyledMenu} from "./styles";

const MenuSlider = (props) => {
  return (
    <StyledMenu open={props.open}>
      {myList.map((item, index) => (
        <a key={index} href={item.id}>
          {item.value}
        </a>
      ))}
    </StyledMenu>
  );
};

export default MenuSlider;
