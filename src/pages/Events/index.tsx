import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { AllEvents } from "./components/AllEvents/AllEvents";
import { MyEvents } from "./components/MyEvents/MyEvents";

export const Events = () => {
  const { data } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<AllEvents user={data} />} />
        <Route path="/my-events" element={<MyEvents user={data} />} />
      </Routes>
    </>
  );
};
