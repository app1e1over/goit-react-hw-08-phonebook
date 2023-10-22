import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, removeContact, addContact, changeContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [removeContact.pending](state, action) {
      state.isLoading = true;
    },
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      console.log(state.contacts);
      state.contacts = state.contacts.filter(s=>s.id!==action.payload.id);
      state.error = null;
    },
    [removeContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = [...state.contacts,action.payload]
      state.error = null;
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [changeContact.pending](state, action) {
      state.isLoading = true;
    },
    [changeContact.fulfilled](state, action) {
      state.isLoading = false;
      let cl = [...state.contacts].filter(c=>c.id!==action.payload.id);
      cl.push(action.payload);
      state.contacts = cl;
      state.error = null;
    },
    [changeContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
