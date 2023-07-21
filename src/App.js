import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Signin from "./components/Auth/Signin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/signin"}>Signin</Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
