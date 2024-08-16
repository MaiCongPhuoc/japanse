// import { createStore } from 'redux';
// import { ADD, SUBTRACT } from '../type/type'

// export const counter = (state = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return state + action.payload;
//     case SUBTRACT:
//       return state - action.payload;
//     default:
//       return state;
//   }
// }

// const store = createStore(counter);

// export default store;

// đoạn code trên tương tự với đoạn code dưới

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../action/action";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
