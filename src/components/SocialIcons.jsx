import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <a href="https://facebook.com">
        <FaFacebook />
      </a>
      <a href="https://twitter.com">
        <FaTwitter />
      </a>
      <a href="https://instagram.com">
        <FaInstagram />
      </a>
    </StyledSocialIcons>
  );
}
