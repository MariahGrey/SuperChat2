import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Auth from "./Auth";

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path={"/"} component={Auth} />
      <Route exact path={"/:channel"} component={App} />
    </div>
  </BrowserRouter>
);

export default Router;
