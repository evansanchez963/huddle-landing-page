import {
  StyledHeader,
  Nav,
  Logo,
  HeaderContent,
  Image,
} from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.svg" alt="" />
        <Button>Try it Free</Button>
      </Nav>

      <HeaderContent>
        <div>
          <h1>Build The Community Your Fans Will Love</h1>

          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <Button bg="#ff0099" color="#fff">
            Get Started For Free
          </Button>
        </div>

        <Image src="./images/illustration-mockups.svg" alt="" />
      </HeaderContent>
    </StyledHeader>
  );
}
