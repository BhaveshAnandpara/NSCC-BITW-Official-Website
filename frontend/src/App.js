import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home/Home';
import DetailedTeam from './team/DetailedTeam/DetailedTeam';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team' element={<DetailedTeam/>} />
      </Routes>
    </>
  );
}

export default App;
