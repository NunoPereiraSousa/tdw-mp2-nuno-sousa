import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getPlanetInfo = async url => {
  const response = await axios
    .get(url)
    .then(res => res.data)
    .catch(err => err);

  return response;
};

// First, create the thunk
export const getPlanet = createAsyncThunk("planets/all", getPlanetInfo);

export const planetSlice = createSlice({
  name: "planet",
  initialState: {
    planet: [],
    loading: "idle"
  },
  reducers: {},
  extraReducers: {
    [getPlanet.pending]: state => {
      // console.log("loading");

      state.loading = "pending";
    },
    [getPlanet.rejected]: state => {
      // console.log("rejected");

      state.loading = "rejected";
    },
    [getPlanet.fulfilled]: (state, { payload }) => {
      // console.log("fulfilled", payload);

      state.loading = "fulfilled";
      state.planet = payload;
    }
  }
});

export default planetSlice.reducer;
