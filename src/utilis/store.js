import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import videosSlice from "./videosSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videosSlice,
    search: searchSlice,
    liveChat: chatSlice,
  },
});

export default store;
