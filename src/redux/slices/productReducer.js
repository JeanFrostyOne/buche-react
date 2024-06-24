import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../utils/constants";

const initialState = { loading: false, products: [], error: "" };

const fetchProducts = createAsyncThunk("products/fetchProducts", (data) => {
  const params = new URLSearchParams();
  if (data.categoryId) {
    params.append("categoryid", data.categoryId);
  }
  if (data.sort.sortBy && data.sort.order) {
    params.append("sortBy", data.sort.sortBy);
    params.append("order", data.sort.order);
  }

  console.log(params);
  return fetch(`${baseUrl}/products?${params}`)
    .then((res) => res.json())
    .then((data) => data);
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = "произошла ошибка на сервере";
      state.products = [];
    });
  },
});

export { fetchProducts };
export default productSlice.reducer;
