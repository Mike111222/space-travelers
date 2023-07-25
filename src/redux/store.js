import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
