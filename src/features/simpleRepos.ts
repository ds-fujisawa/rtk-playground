import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type StateType = {
  name: string;
  link: string;
}[];

const initialState: StateType = [];

export default createSlice({
  name: 'simpleRepos',
  initialState,
  reducers: {
    setRepos: (_, action: PayloadAction<StateType> ) => action.payload
  }
});
