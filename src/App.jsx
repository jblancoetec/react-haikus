import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Home from "./home/Home";

const App = () => (
  <>
    <Header />
    <Main>
      <Home />
    </Main>
    <Footer />
  </>
);

export default App;
