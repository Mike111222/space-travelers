import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  Data: [],
  loading: false,
  error: '',
};

export const fetchData = createAsyncThunk(
  'rockets/fetchData',
  async () => {
    const request = await axios.get('https://api.spacexdata.com/v3/rockets');
    return request.data;
  },
);

const processData = (arrayofObjects) => {
  const preciseData = arrayofObjects.map((obj) => ({
    id: obj.id,
    name: obj.rocket_name,
    type: obj.rocket_type,
    description: obj.description,
    image: obj.flickr_images[0],
    wikipedia: obj.wikipedia,
    reserved: false,
  }));
  return preciseData;
};

const RocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const newArray = state.Data.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return { ...state, Data: newArray };
    },
    cancel: (state, action) => {
      const newArray = state.Data.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return { ...state, Data: newArray };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      const processedData = processData(action.payload);
      state.Data = processedData;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { reserve, cancel } = RocketSlice.actions;
export default RocketSlice.reducer;
