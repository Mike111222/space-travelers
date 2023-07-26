/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import Profile from './components/Profile';
// import RocketList from './components/Rockets';
// import { getRockets } from './redux/rocket/rocketSlice';
// import ProfileRocketView from './components/DisplayRocket';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-undef
    dispatch(getRockets());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        // eslint-disable-next-line react/jsx-no-undef
        <Route index element={<ProfileRocketView />} />
        <Route path="/rockets" element={<RocketList />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
