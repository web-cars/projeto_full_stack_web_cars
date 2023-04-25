import { Route, Routes, Navigate } from "react-router-dom";
import { Homepage } from "../Pages/homepage";
import { SpecificAd } from "../Pages/specificAd";
import { Login } from "../Pages/Login";
import Register from "../Pages/register";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/adCar/:id" element={<SpecificAd />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
