// src/store/index.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import hiraganaReducer from "./action/AlphabetStore";
import kanjiReducer from "./action/KanjiStore";

// sử dụng combineReducers để kết hợp các reducer
const rootReducer = combineReducers({
  hiragana: hiraganaReducer,
  kanji: kanjiReducer,
});

// tạo store từ rootReducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
