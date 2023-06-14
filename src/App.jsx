import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "./content";

const theme = {
  colors: {
    font: "hsl(192, 100%, 9%)",
    header: "hsl(193, 100%, 96%)",
    body: "#fff",
    footer: "hsl(192, 100%, 9%)",
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
          {content.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
