import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import DetailedEventPage from './EventPage/DetailedEventPage/DetailedEventPage';
import EventPage from './EventPage/EventPage';
import Events from './Events/Events';
import Home from './Home/Home';
import DetailedTeam from './team/DetailedTeam/DetailedTeam';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<DetailedTeam />} />
          <Route path='/event' element={<Events />} />
          <Route path='/events' element={<DetailedEventPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
