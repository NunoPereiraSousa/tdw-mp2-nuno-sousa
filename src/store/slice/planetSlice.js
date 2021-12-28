import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getPlanetsInfo = async _ => {
  const response = await axios
    .get("https://swapi.dev/api/planets/")
    .then(res => res.data.results)
    .catch(err => err);

  return response;
};

// First, create the thunk
export const getPlanets = createAsyncThunk("planets/all", getPlanetsInfo);

export const planetsSlice = createSlice({
  name: "planets",
  initialState: {
    planets: [],
    loading: "idle"
  },
  reducers: {},
  extraReducers: {
    [getPlanets.pending]: state => {
      // console.log("loading");

      state.loading = "pending";
    },
    [getPlanets.rejected]: state => {
      // console.log("rejected");

      state.loading = "rejected";
    },
    [getPlanets.fulfilled]: (state, { payload }) => {
      // console.log("fulfilled", payload);

      state.loading = "fulfilled";
      state.planets = payload;
    }
  }
});

export default planetsSlice.reducer;
