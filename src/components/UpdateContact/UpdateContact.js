import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import { updateContactOperation } from '../../store/contacts/operations';
import { getContactsSelector, getUpdateContactSelector } from '../../store/contacts/selectors';
import { saveUpdateContactsAction } from '../../store/contacts/actions';

const UpdateContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);
  const { openModal, contact, item } = useSelector(getUpdateContactSelector);

  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [age, setAge] = useState(contact.age);
  const [pager, setPager] = useState(contact.pager);

  const onHide = () => {
    dispatch(saveUpdateContactsAction({ openModal: false, contact }));
  };

  const updateContactFunc = () => {
    dispatch(updateContactOperation({ firstName, lastName, age, pager }, contacts, item));
    onHide();
  };

  return (
    <Modal show={openModal} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Update contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder={'Enter First Name'}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder={'Enter Last Name'}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control value={age} onChange={e => setAge(e.target.value)} placeholder={'Enter Age'} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Pager</Form.Label>
            <Form.Control value={pager} onChange={e => setPager(e.target.value)} placeholder={'Enter Pager'} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>
          Close
        </Button>
        <Button variant='outline-success' onClick={updateContactFunc}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateContact;
