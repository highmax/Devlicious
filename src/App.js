import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Header />
          <Categories />
          <Pages />
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
