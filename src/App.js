import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import Profile from './components/Profile';
import RocketList from './components/Rockets';
import { getRockets } from './redux/rocket/rocketSlice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Navbar />
      <Route>
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/rockets" element={<RocketList />} />
      </Route>

    </>,
  ),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
