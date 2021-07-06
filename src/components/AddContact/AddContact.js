import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { addContactOperation } from '../../store/contacts/operations';
import { getContactsSelector } from '../../store/contacts/selectors';

const AddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [pager, setPager] = useState('');

  const addContactFunc = () => {
    dispatch(addContactOperation({ firstName, lastName, age, pager }, contacts));
    setFirstName('');
    setLastName('');
    setAge(0);
    setPager('');
  };

  return (
    <div>
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
          <Form.Control value={lastName} onChange={e => setLastName(e.target.value)} placeholder={'Enter Last Name'} />
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

      <Button variant='outline-success' onClick={addContactFunc}>
        Добавить
      </Button>
    </div>
  );
};

export default AddContact;
