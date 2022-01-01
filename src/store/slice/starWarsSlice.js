import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getFilms = async () => {
  const response = await axios
    .get("https://swapi.dev/api/films/")
    .then((res) => res.data.results)
    .catch((err) => err);

  return response;
};

// First, create the thunk
export const getAllFilms = createAsyncThunk("films/all", getFilms);

export const filmsSlice = createSlice({
  name: "films",
  initialState: {
    films: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: {
    [getAllFilms.pending]: (state) => {
      // console.log("loading");

      state.loading = "pending";
    },
    [getAllFilms.rejected]: (state) => {
      // console.log("rejected");

      state.loading = "rejected";
    },
    [getAllFilms.fulfilled]: (state, { payload }) => {
      // console.log("fulfilled", payload);

      state.loading = "fulfilled";
      state.films = payload;
    },
  },
});

export default filmsSlice.reducer;
