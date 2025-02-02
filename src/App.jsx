/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Login from "./Components/Login";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "cookietriste",
  title: "Web Designer & Content Creator",
  email: "alex@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <Router>
      <div id="main">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home name={siteProps.name} title={siteProps.title} />
            <About />
            <Portfolio />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
    </Router>
  );
};

export default App;
