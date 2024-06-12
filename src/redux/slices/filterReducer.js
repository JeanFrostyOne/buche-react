import { createSlice } from "@reduxjs/toolkit";

const initialState = { categoryId: null };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      let id = action.payload;
      state.categoryId = id;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
