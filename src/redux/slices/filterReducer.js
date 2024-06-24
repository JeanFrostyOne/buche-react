import { createSlice } from "@reduxjs/toolkit";
import { sorting } from "../../utils/constants";

const initialState = { categoryId: null, search: "", sort: sorting[0] };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      let id = action.payload;
      state.categoryId = id;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSearch, setSort } = filterSlice.actions;
export default filterSlice.reducer;
