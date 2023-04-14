import { Route, Routes, Navigate } from 'react-router-dom';
import { Homepage } from '../Pages/homepage';
import { SpecificAd } from '../Pages/specificAd';


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/adCar/:id" element={<SpecificAd />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};