import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers:{
    add(state, action){
        state.contacts=[...state.contacts, action.payload]
    },
    remove(state, action){
        state.contacts=state.contacts.filter(c=>c.phone!==action.payload)
    }
  }
});
export const {add, remove} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;