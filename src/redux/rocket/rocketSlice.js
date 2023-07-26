import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: true,
  isError: false,
};
const rocketURL = 'https://api.spacexdata.com/v3/rockets/';
export const getRockets = createAsyncThunk('rockets/getRockets', async (thunkAPI) => {
  try {
    const response = await axios(rocketURL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    revRocket: (state, action) => {
      const rocketId = action.payload;
      const newRocket = state.rockets.map((rocket) => {
        if (rocket.id !== rocketId) return rocket;
        return { ...rocket, reserved: true };
      });
      state.rockets = newRocket;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.rockets = action.payload;
      })
      .addCase(getRockets.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { revRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
