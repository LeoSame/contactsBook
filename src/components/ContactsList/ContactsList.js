import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { contactsLoadingSelector, getContactsSelector } from '../../store/contacts/selectors';
import { getContactsOperation } from '../../store/contacts/operations';
import ContactsItem from '../ContactsItem/ContactsItem';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);
  const contactsLoading = useSelector(contactsLoadingSelector);

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  if (contactsLoading) {
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  }

  let contactsList = contacts.map((contact, item) => {
    return (
      <tr key={contact.pager} className='contact__item'>
        <ContactsItem key={contact.pager} item={item} contact={contact} />
      </tr>
    );
  });

  if (contacts.length === 0) {
    contactsList = (
      <tr className='contact__item'>
        <td colSpan='6'>There are no entries in the contacts</td>
      </tr>
    );
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>№</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Pager</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{contactsList}</tbody>
    </Table>
  );
};

export default ContactsList;
