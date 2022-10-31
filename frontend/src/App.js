import EventPage from './EventPage/EventPage';
// import Navbar from './Navbar/Navbar';
import {Route,Routes} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
function App() {
  return (
   <>
   <Navbar/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/aboutus' element={<EventPage/>} />
<Route path='/theteam' element={<EventPage/>} />
  <Route path='/eventpage' element={<EventPage/>} />
<Route path='/contactus' element={<EventPage/>} />
</Routes>

   
   </>
  );
}

export default App;
