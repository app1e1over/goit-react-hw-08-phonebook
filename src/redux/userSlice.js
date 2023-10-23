import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, fetchUser } from './operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoading: false,
    error: null,
  },
  reducers:{
    set(state, action){
      state.user = action.payload;
    }
  },
  extraReducers: {
    [fetchUser.pending](state, action) {
      state.isLoading = true;
    },
    [fetchUser.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    [fetchUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [logoutUser.pending](state, action) {
      state.isLoading = true;
    },
    [logoutUser.fulfilled](state, action) {
      state.isLoading = false;
      state.user = {user:{}, token:""};
      state.error = null;
      localStorage.setItem('user', JSON.stringify({}))
    },
    [logoutUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [loginUser.pending](state, action) {
      state.isLoading = true;
    },
    [loginUser.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload))
    },
    [loginUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [registerUser.pending](state, action) {
      state.isLoading = true;
    },
    [registerUser.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload))

    },
    [registerUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const userReducer = userSlice.reducer;
export const {set} = userSlice.actions;