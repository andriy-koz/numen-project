import Title from "../Title";
import faceIcon from "../../images/icons/facebook.png";
import instaIcon from "../../images/icons/instagram.png";
import twIcon from "../../images/icons/twitter.png";
import whatsIcon from "../../images/icons/whatsapp.png";

import {Icon, IconsContainer, StyledFooter, Underline} from "./styles";

const icons = [
  {path: faceIcon, id: "facebook"},
  {path: instaIcon, id: "instagram"},
  {path: twIcon, id: "twitter"},
  {path: whatsIcon, id: "whatsapp"},
];

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <div>
        <Title invert text1="Contacto" text2="" />
        <Underline />
      </div>
      <IconsContainer>
        {icons.map((item, index) => (
          <Icon key={index} alt={item.id} className="lazyload" data-src={item.path} id={item.id} />
        ))}
      </IconsContainer>
      <a href="#">@ Numen 2022</a>
    </StyledFooter>
  );
};

export default Footer;
