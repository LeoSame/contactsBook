import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUpdateContactsAction } from '../../store/contacts/actions';
import { deleteContactOperation } from '../../store/contacts/operations';
import { getContactsSelector } from '../../store/contacts/selectors';
import './ContactsItem.css';

const ContactsItem = ({ item, contact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);

  const { firstName, lastName, age, pager } = contact;
  const openUpdateModal = () => {
    dispatch(saveUpdateContactsAction({ openModal: true, contact, item }));
  };

  const deleteContact = () => {
    dispatch(deleteContactOperation(pager, contacts));
  };

  return (
    <>
      <td>{item + 1}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>{pager}</td>
      <td className='contact__item-buttons' style={{ border: 'none', padding: '0' }}>
        <button type='button' className='btn btn-primary mr-3' onClick={openUpdateModal}>
          Update
        </button>
        <button type='button' className='btn btn-danger' onClick={deleteContact}>
          &#10006;
        </button>
      </td>
    </>
  );
};

export default ContactsItem;
