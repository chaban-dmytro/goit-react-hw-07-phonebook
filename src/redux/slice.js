import { createSlice } from '@reduxjs/toolkit';
import { getContactsList, addNewContact, deleteContact} from './operations';

export const newSlice = createSlice( {
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: ""
  },
  reducers: {
    addFilter( state, action ) {
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase( getContactsList.fulfilled, ( state, action ) => {
      state.contacts = action.payload;
    } ).addCase( addNewContact.fulfilled, ( state, action ) => {
      state.contacts.push( action.payload );
    } ).addCase( deleteContact.fulfilled, ( state, action ) => {
      state.contacts = state.contacts.filter( contact => contact.id !== action.payload.id );
    })
  }
} );

export const { add, remove, addFilter } = newSlice.actions;

