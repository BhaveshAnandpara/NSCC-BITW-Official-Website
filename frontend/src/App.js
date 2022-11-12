import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import DetailedEventPage from './EventPage/DetailedEventPage/DetailedEventPage';
import Home from './Home/Home';
import DetailedTeam from './team/DetailedTeam/DetailedTeam';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team' element={<DetailedTeam/>} />
        <Route path='/events' element={<DetailedEventPage/>} />
      </Routes>
    </>
  );
}

export default App;
