// src/store/hiraganaSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Hiragana, Katakana } from "../../data";

const initialState = {
  data: { Hiragana, Katakana },
  checkData: { Hiragana: "", Katakana: "" },
  previewData: { Hiragana: "", Katakana: "" },
};

const hiraganaSlice = createSlice({
  name: "hiragana",
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

export const { setCheckData, setPreviewData } = hiraganaSlice.actions;

export default hiraganaSlice.reducer;
