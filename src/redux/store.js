import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';
import rocketsReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
  },
});

export default store;
