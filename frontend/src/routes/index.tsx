import { Route, Routes, Navigate } from "react-router-dom";
import { Homepage } from "../Pages/homepage";
import { SpecificAd } from "../Pages/specificAd";
import { Login } from "../Pages/Login";
import { ViewUser } from './../Pages/viewUser';
import Register from "../Pages/Register";
import { SendEmail } from "../Pages/SendEmail";
import { ResetPassword } from "../Pages/ResetPassword";
import ViewUserAd from "../Pages/viewUserAd";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/adCar/:id" element={<SpecificAd />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetPassword" element={<SendEmail />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/userInfo" element={<ViewUser />} />
      <Route path="/userAdInfo" element={<ViewUserAd />} />
    </Routes>
  );
};
