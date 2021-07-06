import { contactsLoadingAction, saveContactsAction } from './actions';

export const getContactsOperation = () => dispatch => {
  dispatch(contactsLoadingAction(true));

  const contacts = JSON.parse(localStorage.getItem('contacts'));
  if (contacts) {
    dispatch(saveContactsAction(contacts));
  }
  dispatch(contactsLoadingAction(false));
};

export const addContactOperation = (values, contacts) => dispatch => {
  const newContacts = [...contacts, values];

  dispatch(saveContactsAction(newContacts));
  localStorage.setItem('contacts', JSON.stringify(newContacts));
};

export const updateContactOperation = (updateContact, contacts, item) => dispatch => {
  contacts[item] = updateContact;

  dispatch(saveContactsAction(contacts));
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export const deleteContactOperation = (pager, contacts) => dispatch => {
  const newContacts = contacts.filter(contact => contact.pager !== pager);

  dispatch(saveContactsAction(newContacts));
  localStorage.setItem('contacts', JSON.stringify(newContacts));
};
