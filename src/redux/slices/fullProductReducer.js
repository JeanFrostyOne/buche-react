import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

const initialState = {
  product: { name: "", text: "", foodvalue: [], composition: "", img: [] },
  loading: false,
  error: "",
};

const fetchProduct = createAsyncThunk("fullProduct/fetchProduct", (id) => {
  return axiosInstance.get(`/products/${id}`)
    .then((res) => res.data)
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
      state.error = action.error.message;
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
