import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import DetailedEventPage from './EventPage/DetailedEventPage/DetailedEventPage';
import EventPage from './EventPage/EventPage';
import Events from './Events/Events';
import Home from './Home/Home';
import DetailedTeam from './team/DetailedTeam/DetailedTeam';
import FormRsvp from './Rsvp/Form';
import { useEffect } from 'react';
import bg from './assets/Images/bg.jpg'
import ClosedForm from './Rsvp/ClosedForm';

function App() {

//   useEffect(() => {

//     const root = document.getElementById('bgVideo')
//     root.playbackRate = 0.4
//   }, [])

  return (
    <>
      <BrowserRouter>
        <img src={bg} className='bgVideo' />
        <div className="blackOverlay"></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<DetailedTeam />} />
          <Route path='/event' element={<Events />} />
          <Route path='/events' element={<DetailedEventPage />} />
          <Route path='/rsvp/:title' element={<FormRsvp />} />
          <Route path='/rsvp/:title/formClosed' element={<ClosedForm />} />

        </Routes>
      </BrowserRouter>
    </>
  );
  }

export default App;
