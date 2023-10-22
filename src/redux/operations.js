import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, killContact, login, logout, metamorphContacts, postContact, register } from 'js/Fetcher';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';



export const addContact = createAsyncThunk(
  'contacts/add',
  async (arg, thunkAPI) => {
    try {
      const response = await postContact(arg)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchContacts = createAsyncThunk(
    'contacts/get',
    async (arg, thunkAPI) => {
      try {  
        const response = await getContacts(arg);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
export const removeContact = createAsyncThunk(
  'contacts/delete',
  async (arg, thunkAPI) => {

    try {
      const response = await killContact(arg)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const changeContact = createAsyncThunk(
  'contacts/change',
  async (arg, thunkAPI) => {

    try {
      const response = await metamorphContacts(arg)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async(arg, thunkAPI)=>{
    try {
      const response = await register(arg);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const loginUser = createAsyncThunk(
  "user/login",
  async(arg, thunkAPI)=>{
    try {
      const response = await login(arg);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const logoutUser = createAsyncThunk(
  "user/logout",
  async(arg, thunkAPI)=>{
    try {
      console.log(arg);
      const response = await logout(arg);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async(arg, thunkAPI)=>{
    try {
      const response = await fetchUser(arg);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)