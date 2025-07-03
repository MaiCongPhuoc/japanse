// src/store/index.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import hiraganaReducer from "./action/AlphabetStore";
import kanjiReducer from "./action/KanjiStore";
import TypeOfDegreeReducer from "./action/TypeOfDegree"

// sử dụng combineReducers để kết hợp các reducer
const rootReducer = combineReducers({
  hiragana: hiraganaReducer,
  kanji: kanjiReducer,
  typeOfDegree: TypeOfDegreeReducer,
});

// tạo store từ rootReducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
