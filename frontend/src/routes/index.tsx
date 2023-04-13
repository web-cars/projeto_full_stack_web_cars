import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../pages/homepage';
import { SpecificAd } from '../pages/specificAd';


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/adCar/:id' element={<SpecificAd />} />
    </Routes>
  );
};
""