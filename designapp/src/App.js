import {Route, Router, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Templets from "./Pages/Templets";
import Tshirts from "./Pages/Tshirts";
import UseAI from "./Pages/UseAI";
import './App.css';


function App() {
  return (
      <div className="App">
          <Routes>
              <Route
                  exact
                  path="/"
                  element={<Home />}
              ></Route>
              <Route
                  exact
                  path="/Templets"
                  element={<Templets />}
              ></Route>
              <Route
                  exact
                  path="/Tshirts"
                  element={<Tshirts />}
              ></Route>
              <Route
                 exact
                  path="/UseAI"
                  element={<UseAI />}
              ></Route>
          </Routes>
        </div>
  );
}

export default App;
