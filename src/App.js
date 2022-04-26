import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // const [User, setUser] = useState(false);
  const user = false;
  return (
    <>
      <Topbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={user ? <Home /> : <Register />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
