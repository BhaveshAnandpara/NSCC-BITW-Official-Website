import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import DetailedEventPage from './EventPage/DetailedEventPage/DetailedEventPage';
import EventPage from './EventPage/EventPage';
import Events from './Events/Events';
import Home from './Home/Home';
import DetailedTeam from './team/DetailedTeam/DetailedTeam';
import FormRsvp from './Rsvp/Form';


function App() {
  return (
    <>
      <BrowserRouter>
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
