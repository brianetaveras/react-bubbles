import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RouteGuard from './routerGuard';

// Components
import Login from "../components/Login";
import BubblePage from "../components/BubblePage";

const RouterView = () => {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <RouteGuard exact path="/" component={BubblePage}/>
    </Router>
  );
};

export default RouterView;
