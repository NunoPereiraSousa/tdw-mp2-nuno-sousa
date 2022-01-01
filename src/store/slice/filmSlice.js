import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getFilms = async (id) => {
  const response = await axios
    .get(`https://swapi.dev/api/films/${id}`)
    .then((res) => res.data)
    .catch((err) => err);

  return response;
};

// First, create the thunk
export const getFilm = createAsyncThunk("film/all", getFilms);

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    film: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: {
    [getFilm.pending]: (state) => {
      // console.log("loading");

      state.loading = "pending";
    },
    [getFilm.rejected]: (state) => {
      // console.log("rejected");

      state.loading = "rejected";
    },
    [getFilm.fulfilled]: (state, { payload }) => {
      // console.log("fulfilled", payload);

      state.loading = "fulfilled";
      state.film = payload;
    },
  },
});

export default filmSlice.reducer;
