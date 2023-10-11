import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6526c4d6917d673fd76cfbd5.mockapi.io/';



export const addContact = createAsyncThunk(
  'contacts/add',
  async (arg, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: arg.name,
        phone: arg.phone,
        createdAt: Date.now(),
      });
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
        const response = await axios.get('/contacts');
        console.log("s");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
export const removeContact = createAsyncThunk(
  'contacts/delete',
  async (arg, thunkAPI) => {
    console.log(arg);
    try {
      const response = await axios.delete('/contacts/'+arg);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
