import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import DetailedEventPage from './EventPage/DetailedEventPage/DetailedEventPage';
import EventPage from './EventPage/EventPage';
import Events from './Events/Events';
import Home from './Home/Home';
import DetailedTeam from './team/DetailedTeam/DetailedTeam';
import FormRsvp from './Rsvp/Form';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    const root = document.getElementById('bgVideo')
    root.playbackRate = 0.4
  }, [])

  return (
    <>
      <BrowserRouter>
        <video id='bgVideo' className='bgVideo' autoPlay muted loop playsInline  >
          <source src={bg} type='video/mp4' />
        </video>
        <div className="blackOverlay"></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<DetailedTeam />} />
          <Route path='/event' element={<Events />} />
          <Route path='/events' element={<DetailedEventPage />} />
          <Route path='/rsvp' element={<FormRsvp />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
