import EventPage from './EventPage/EventPage';
// import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar/Navbar';
// import Home from './Home/Home';
import './App.css'
function App() {
  return (
    <>
      <div className="bg-spin"></div>

        <Routes>
          <Route path='/' element={<EventPage />} />
          {/* <Route path='/aboutus' element={<EventPage/>} />
<Route path='/theteam' element={<EventPage/>} />
  <Route path='/eventpage' element={<EventPage/>} />
<Route path='/contactus' element={<EventPage/>} /> */}
        </Routes>

    </>
  );
}

export default App;
