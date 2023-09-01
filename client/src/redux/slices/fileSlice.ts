import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
  name: "file",
  initialState: null,
  reducers: {
    setFile: (_state, action) => {
      return action.payload;
    },
    clearFile: () => null,
  },
});

export const { setFile, clearFile } = fileSlice.actions;
export default fileSlice.reducer;
