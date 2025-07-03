import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeOfDegree: 1,
};

const TypeOfDegreeSlice = createSlice({
  name: "typeOfDegree",
  initialState,
  reducers: {
    setType(state, action) {
      state.typeOfDegree = action.payload;
    },
  },
});

export const { setType } = TypeOfDegreeSlice.actions;

export default TypeOfDegreeSlice.reducer;
