import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRepos } from '../services/github';

export type StateType = {
  name: string;
  link: string;
}[];

const initialState: StateType = [];

export const fetchReposByName = createAsyncThunk(
  'repos/fetchByName',
  async (name: string) => {
    const res = await getRepos(name);
    return res.map(({ name, html_url }: { name: string, html_url: string }) => ({ name, html_url }));
  }
);

export default createSlice({
  name: 'thunkRepos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchReposByName.fulfilled, (_, { payload }) => payload)
  }
});
