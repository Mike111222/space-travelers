import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/rocket/rocketSlice';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { RocketsView } from './components/rocketView';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<RocketsView />} />
          <Route path="/rockets" element={<RocketsView />} />
          <Route exact path="/profile" element={<MyProfile />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
