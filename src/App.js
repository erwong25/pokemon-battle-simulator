// @flow strict
// @format

import "./App.css";
import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  // Link,
  // useParams,
} from "react-router-dom";
import Home from "./home";
import About from "./about";

function App(): React$MixedElement {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about/:id" element={<About />}></Route>
          </Routes>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          {/* <li>
            <Link to="/about">About Us</Link>
          </li> */}
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
