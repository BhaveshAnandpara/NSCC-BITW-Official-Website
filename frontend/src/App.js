import EventPage from './EventPage/EventPage';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Social from './Social/Social';
import Team from './team/Team';
import AboutUs from './AboutUs/AboutUs';
import HeroSection from './HeroSection/HeroSection';
import './App.css'
import HomePage from './HomePage/HomePage';


function App() {
  return (
    <>
        <HeroSection />
        <AboutUs />
        <Team />
        <EventPage />
        <Social />
        <Navbar />
    </>
  );
}

export default App;
