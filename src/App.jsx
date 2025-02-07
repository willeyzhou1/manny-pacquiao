import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import NavBar from './pages/NavBar/NavBar.jsx';
import Fight from './pages/Fights/Fight.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fight' element={<Fight />} />
      </Routes>
    </div>
  );
}

export default App
