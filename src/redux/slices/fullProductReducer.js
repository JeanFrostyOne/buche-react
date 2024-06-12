import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../utils/constants";

const initialState = {
  product: { name: "", text: "", foodvalue: [], composition: "", img: [] },
  loading: false,
  error: "",
};

const fetchProduct = createAsyncThunk("fullProduct/fetchProduct", (id) => {
  return fetch(`${baseUrl}/products/${id}`)
    .then((res) => res.json())
    .then((data) => data);
});

export const fullProductSlice = createSlice({
  name: "fullProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = "произошла ошибка на сервере";
      state.product = {
        name: "",
        text: "",
        foodvalue: [],
        composition: "",
        img: [],
      };
    });
  },
});

export { fetchProduct };
export default fullProductSlice.reducer;
