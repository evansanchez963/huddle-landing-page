import SocialIcons from "./SocialIcons";
import { StyledFooter, FooterInfo, InfoLine } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <img src="./images/logo.svg" alt=""></img>
      </div>

      <FooterInfo>
        <ul>
          <InfoLine>
            <li>
              <p>
                <span>
                  <img src="./images/icon-location.svg" alt=""></img>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </li>
          </InfoLine>
          <InfoLine>
            <li>
              <p>
                <span>
                  <img src="./images/icon-phone.svg" alt=""></img>
                </span>
                +1-543-123-4567
              </p>
            </li>
          </InfoLine>
          <InfoLine>
            <li>
              <p>
                <span>
                  <img src="./images/icon-email.svg" alt=""></img>
                </span>
                example@huddle.com
              </p>
            </li>
          </InfoLine>
        </ul>

        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">What We Do</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <SocialIcons />
      </FooterInfo>

      <p>&copy; 2018 Huddle. All rights reserved.</p>
    </StyledFooter>
  );
}
