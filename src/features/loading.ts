import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export default createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    setLoading: (_, action: PayloadAction<boolean>) => action.payload
  }
});
