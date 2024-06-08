import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
  ocassion: string;
  giftType: string;
  maximumSpend: string;
  countryName: string;
}

const initialState: FormData = {
  ocassion: '',
  giftType: '',
  maximumSpend: '',
  countryName: ''
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormData>) {
      return { ...state, ...action.payload };
    }
  }
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
