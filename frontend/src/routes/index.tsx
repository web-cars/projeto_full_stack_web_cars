import { Route, Routes, Navigate } from "react-router-dom";
import { Homepage } from "../Pages/homepage";
import { SpecificAd } from "../Pages/specificAd";
import { Login } from "../Pages/Login";
import { ViewUser } from './../Pages/viewUser';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/adCar/:id" element={<SpecificAd />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/userInfo" element={<ViewUser/>} />
    </Routes>
  );
};
