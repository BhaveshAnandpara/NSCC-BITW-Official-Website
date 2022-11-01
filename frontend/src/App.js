import EventPage from './EventPage/EventPage';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Social from './Social/Social';
import Team from './team/Team';
import AboutUs from './AboutUs/AboutUs';
import HeroSection from './HeroSection/HeroSection';
import './App.css'


function App() {
  return (
    <>
      <div className="page">
        <HeroSection />
      </div>
      <div className="page">
        <AboutUs />
      </div>
      <div className="page">
        <Team />
      </div>
      <div className="page">
        <EventPage />
      </div>
      <div className="page">
        <Social />
      </div>
        <Navbar />
    </>
  );
}

export default App;
