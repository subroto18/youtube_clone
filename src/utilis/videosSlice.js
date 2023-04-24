import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videoLoading: true, // true means showing shimmer
    videoData: [],
    error: {},
    scrollVideoLoading: false, // false means not showing shimmer
  },
  reducers: {
    addVideos: (state, action) => {
      return { ...state, videoData: action.payload };
    },
    addError: (state, action) => {
      state.error = action.payload;
    },

    showLoading: (state, action) => {
      state.videoLoading = action.payload;
    },
    showScrollLoading: (state, action) => {
      state.scrollVideoLoading = action.payload;
    },
  },
});

export const { addVideos, showLoading, showScrollLoading, addError } =
  videosSlice.actions;
export default videosSlice.reducer;
