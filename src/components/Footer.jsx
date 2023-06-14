import SocialIcons from "./SocialIcons";
import { FooterInfo } from "./styles/FooterInfo.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <img src="./images/logo.svg" alt=""></img>
      </div>

      <FooterInfo>
        <ul>
          <li>
            <img src="./images/icon-location.svg" alt=""></img>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li>
            <img src="./images/icon-phone.svg" alt=""></img>
            +1-543-123-4567
          </li>
          <li>
            <img src="./images/icon-email.svg" alt=""></img>
            example@huddle.com
          </li>
        </ul>

        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>

        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>

        <SocialIcons />
      </FooterInfo>

      <p>&copy; 2018 Huddle. All rights reserved.</p>
    </StyledFooter>
  );
}
