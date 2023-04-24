import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: [],
    cache: {},
    searchKeyword: "", // store the search keyword
  },
  reducers: {
    addSearchData: (state, action) => {
      state.data = action.payload;
    },
    addSearchCache: (state, action) => {
      state = Object.assign(state.cache, action.payload);
    },
    addSearchKeyWord: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const { addSearchData, addSearchCache, addSearchKeyWord } =
  searchSlice.actions;
export default searchSlice.reducer;
