import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isAutoComplete: true,
    isSlideMenuOpen: false,
    screenWidth: "",
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleAutoComplete: (state, action) => {
      state.isAutoComplete = action.payload;
    },
    toggleSlideMenu: (state) => {
      state.isSlideMenuOpen = !state.isSlideMenuOpen;
    },
    updateScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
  },
});

export const {
  toggleMenu,
  toggleAutoComplete,
  toggleSlideMenu,
  updateScreenWidth,
} = appSlice.actions;
export default appSlice.reducer;
