import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<MyProfile />} /> */}
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
