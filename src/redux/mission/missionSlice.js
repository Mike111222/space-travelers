import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = { missions: [], isLoading: false }; // Fixed the typo

// Asynchronous thunk
export const getMissionFromAPI = createAsyncThunk(
  'missions/getMissionFromAPI',
  async (thunkAPI) => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/missions');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something goes wrong.');
    }
  },
);

const missionSlice = createSlice({
  initialState,
  name: 'missions',
  reducers: {
    joinedMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return { ...state, missions: newState };
    },

    leavedMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.id === action.payload) { // Fixed typo from playload to payload
          return { ...mission, joined: false };
        }
        return mission;
      });
      return { ...state, missions: newState };
    },
  },
  extraReducers: {
    [getMissionFromAPI.fulfilled]: (state, action) => {
      const missions = action.payload.map(({
        mission_id: id,
        mission_name: missionName,
        description,
      }) => ({
        id,
        missionName,
        description,
      }));
      return { ...state, missions };
    },
    [getMissionFromAPI.rejected]: (state) => ({ ...state, isLoading: false }),
  },
});

// Expose the state
export const allMissions = (state) => state.missions.missions;
export const isLoading = (state) => state.missions.isLoading;
// Export the actions
export const { joinedMission, leavedMission } = missionSlice.actions;
// Export the reducer
export default missionSlice.reducer;
