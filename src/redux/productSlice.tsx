// src/features/product/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  // id: number;
  quantity: string;
  name: string;
  rating: string;
  price: string;
  range: string;
  image: string;
}

interface ProductState {
  selectedProduct: Product[];
}

const initialState: ProductState = {
  selectedProduct: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct?.push(action.payload);
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
