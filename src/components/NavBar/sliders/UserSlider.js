import userIcon from "../../../images/user.svg";

import {StyledUser} from "./styles";

const UserSlider = (props) => {
  return (
    <StyledUser open={props.open}>
      <img alt="" src={userIcon} />
      <p>Perfil</p>
    </StyledUser>
  );
};

export default UserSlider;
