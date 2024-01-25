import './App.css'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import SinglePlayer from './components/SinglePlayer';
import Login from './components/Login';
import PlayerInfo from './components/PlayerInfo';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="singleplayer" element={<SinglePlayer />} />      
        <Route path="Login" element={< Login/>} />
        <Route path="/profile" element={<PlayerInfo/>} />
      </Routes>
    </>
  )
}

export default App
