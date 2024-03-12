import {Route , Routes } from "react-router-dom";
import Home from './Pages/Home';
import Templets from "./Pages/Templets";
import Tshirts from "./Pages/Tshirts";
import UseAI from "./Pages/UseAI";
import './App.css';
import Signup from "./Pages/Auth/Signup";
import Signin from "./Pages/Auth/Signin";
import Main from "./Pages/Main";


function App() {
  return (
      <div className="App">
          <Routes>
                <Route
                  exact
                  path="/Home"
                  element={<Main />}
              ></Route>
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
              <Route
                  exact
                  path="/Signin"
                  element={<Signin />}
              ></Route>
              <Route
                  exact
                  path="/Signup"
                  element={<Signup />}
              ></Route>
          </Routes>
        </div>
  );
}

export default App;
