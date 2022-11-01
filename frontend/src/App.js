import EventPage from './EventPage/EventPage';
// import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
// import Home from './Home/Home';
import './App.css'
function App() {
  return (
    <>
      <div className="bg-spin"></div>

        <Routes>
          <Route path='/' element={<EventPage />} />
        </Routes>
        <Navbar/>
    </>
  );
}

export default App;
