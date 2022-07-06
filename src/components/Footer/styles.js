import styled from "styled-components";

import instaHover from "../../images/icons/instagramHover.webp";
import instaIcon from "../../images/icons/instagram.png";

const faceFilter =
  "invert(37%) sepia(9%) saturate(6256%) hue-rotate(190deg) brightness(92%) contrast(76%)";
const twFilter =
  "invert(47%) sepia(82%) saturate(1256%) hue-rotate(176deg) brightness(97%) contrast(96%)";
const instaFilter = "saturate(120%) brightness(93%) contrast(92%)";
const whatsFilter =
  "invert(63%) sepia(70%) saturate(464%) hue-rotate(89deg) brightness(90%) contrast(99%)";

const getFilter = (id) => {
  if (id === "facebook") return faceFilter;
  if (id === "twitter") return twFilter;
  if (id === "instagram") return instaFilter;
  if (id === "whatsapp") return whatsFilter;
};

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  max-width: 1024px;
  margin: 55px auto 20px;
  li {
    list-style: none;
  }
  a {
    color: ${({theme}) => theme.color.complementary};
    text-decoration: none;
    opacity: 0.5;
    align-self: flex-end;
  }
`;

export const Underline = styled.div`
  margin: 0 auto;
  width: 120px;
  height: 4px;
  background-color: #7e1b22;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  filter: invert(63%) sepia(3%) saturate(274%) hue-rotate(169deg) brightness(94%) contrast(87%);
  content: ${({id}) => id === "instagram" && `url(${instaIcon})`};

  &:hover {
    content: ${({id}) => id === "instagram" && `url(${instaHover})`};
    cursor: pointer;
    filter: ${({id}) => getFilter(id)};
  }
`;
