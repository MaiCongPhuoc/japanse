// src/store/kanjiSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Kanji } from "../../data";

const initialState = {
  data: { Kanji },
  checkData: { Kanji: "" },
  previewData: { Kanji: "" },
};

const kanjiSlice = createSlice({
  name: "kanji",
  initialState,
  reducers: {
    setData(state, action) {
      state.checkData = action.payload;
    },
    setCheckData(state, action) {
      state.checkData = action.payload;
    },
    setPreviewData(state, action) {
      state.previewData = action.payload;
    },
  },
});

export const { setCheckData, setPreviewData } = kanjiSlice.actions;

export default kanjiSlice.reducer;
