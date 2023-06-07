import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <div>
            Get Started For Free Grow Together Generate meaningful discussions
            with your audience and build a strong, loyal community. Think of the
            insightful conversations you miss out on with a feedback form.
            Flowing Conversations You wouldn't paginate a conversation in real
            life, so why do it online? Our threads have just-in-time loading for
            a more natural flow. Your Users It takes no time at all to integrate
            Huddle with your app's authentication solution. This means, once
            signed in to your app, your users can start chatting immediately.
            Ready To Build Your Community? Get Started For Free Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua +1-543-123-4567
            example@huddle.com About Us What We Do FAQ Career Blog Contact Us
            &copy; Copyright 2018 Huddle. All rights reserved.
          </div>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
