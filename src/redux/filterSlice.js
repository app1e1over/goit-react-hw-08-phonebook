import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    set(state, action) {
      state.filter = action.payload;
    },
  },

});
export const {set} = filterSlice.actions;
export const filterReducer=filterSlice.reducer