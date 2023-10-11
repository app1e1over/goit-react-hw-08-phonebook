import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';




export const store = configureStore({
  reducer:   combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  })
});

export const persistor = store;
