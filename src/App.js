import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

//this is rendering index.js. Calling the Home folder it looks for index.js to render
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </div>
  </Router>
);

export default App;