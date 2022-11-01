import EventPage from './EventPage/EventPage';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Social from './Social/Social';
import Team from './team/Team';
import AboutUs from './AboutUs/AboutUs';

import './App.css'
function App() {
  return (
    <>
      <div className="bg-spin"></div>

        <Routes>
          <Route path='/' element={<AboutUs />} />
        </Routes>
        <Navbar/>
    </>
  );
}

export default App;
