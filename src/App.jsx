import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
// import Home from "./home/Home";
import Contactanos from "./contactanos/Contactanos";

const App = () => (
  <>
    <Header />
    <Main>
      {/* <Home /> */}
      <Contactanos />
    </Main>
    <Footer />
  </>
);

export default App;
