import {createSlice} from '@reduxjs/toolkit';

export const signatureSlice = createSlice({
  name: 'signature',
  initialState: {
    paths: [],
  },
  reducers: {
    addPath: (state, action) => {
      state.paths.push(action.payload);
    },
    clearPaths: state => {
      state.paths = [];
    },
  },
});

export const {addPath, clearPaths} = signatureSlice.actions;

export default signatureSlice.reducer;
