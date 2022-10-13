import "./App.css";
import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Home from "./home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contactanos from "./contactanos/Contactanos";

const App = () => (
  <>
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contactanos" component={Contactanos} />
        </Switch>
      </Main>
      <Footer />
    </Router>
  </>
);

export default App;
