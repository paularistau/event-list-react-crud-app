import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
};
