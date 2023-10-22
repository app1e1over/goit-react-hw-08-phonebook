import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { userReducer } from './userSlice';




export const store = configureStore({
  reducer:   combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    user: userReducer
  })
});

export const persistor = store;
