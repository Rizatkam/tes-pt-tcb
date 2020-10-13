import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Welcome from "./pages/welcome";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;
