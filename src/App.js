import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Signin from "./components/Auth/Signin";
import Home2 from "./components/logedIn/Home2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
