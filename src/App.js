import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/rockets.css';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
// import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<MyProfile />} /> */}
          <Route exact path="missions" element={<Missions />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
