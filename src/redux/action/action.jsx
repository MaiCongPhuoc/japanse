import { ADD, SUBTRACT } from "../type/type";
import { createSlice } from "@reduxjs/toolkit";

// export function increment(payload) {
//     return {
//       type: ADD,
//       payload
//     }
//   }

// export function decrement(payload) {
//   return {
//     type: SUBTRACT,
//     payload
//   }
// }

// đoạn code trên tương tự với đoạn code dưới

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
