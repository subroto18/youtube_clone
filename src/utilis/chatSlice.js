import { createSlice } from "@reduxjs/toolkit";
import { MESSAGE_DELETE_LIMIT, MESSAGE_LIMIT } from "./helpers";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    data: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.data.splice(MESSAGE_LIMIT, MESSAGE_DELETE_LIMIT);
      state.data.push(action.payload);
    },
  },
});
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
