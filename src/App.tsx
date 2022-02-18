import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/Login/SignIn";
import { SignUp } from "./pages/Login/SignUp";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/sign-in"} element={<SignIn />}></Route>
          <Route path={"/sign-up"} element={<SignUp />}></Route>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
