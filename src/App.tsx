import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./helpers/ProtectedRoute";
import { Events } from "./pages/Events";
import { MyEvents } from "./pages/Events/components/MyEvents/MyEvents";
import { Login } from "./pages/Login";
import { Users } from "./pages/Users";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path={"/"} element={<Events />}></Route>
            <Route path={"/login/*"} element={<Login />}></Route>

            <Route
              path={"/my-events"}
              element={
                <ProtectedRoute>
                  <MyEvents />
                </ProtectedRoute>
              }
            ></Route>

            <Route
              path={"/users"}
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
