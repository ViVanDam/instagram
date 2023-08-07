import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Signin from "./components/Auth/Signin";
import Home2 from "./components/logedIn/Home2";
import Explore from "./components/logedIn/Explore/Explore";
import Reels from "./components/logedIn/Reels";
import Profile from "./components/logedIn/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/adam_gfb" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
