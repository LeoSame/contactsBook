import { SET_CONTACTS, SET_CONTACTS_LOADING, SET_UPDATE_CONTACTS } from './types';

export const saveContactsAction = contacts => ({ type: SET_CONTACTS, payload: contacts });

export const contactsLoadingAction = isLoading => ({ type: SET_CONTACTS_LOADING, payload: isLoading });

export const saveUpdateContactsAction = updateData => ({ type: SET_UPDATE_CONTACTS, payload: updateData });
