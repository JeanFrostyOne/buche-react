import { createSlice } from "@reduxjs/toolkit";
import { sorting } from "../../utils/constants";

const initialState = { categoryId: null, search: "", sort: sorting[0], tags: []};

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
    setTag: (state,action) => {
    let tag = action.payload
     let currentTag = state.tags.find((item) => item.id === tag.id);
     if (currentTag) {
      state.tags = state.tags.filter((item) => item.id !== currentTag.id)
     } else {
      state.tags.push(tag)
     }
    }
  },
});


export const { setCategoryId, setSearch, setSort, setTag } = filterSlice.actions;
export default filterSlice.reducer;
