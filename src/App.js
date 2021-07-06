import React from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';
import ContactsList from './components/ContactsList/ContactsList';
import AddContact from './components/AddContact/AddContact';
import UpdateContact from './components/UpdateContact/UpdateContact';
import { useSelector } from 'react-redux';
import { getUpdateContactSelector } from './store/contacts/selectors';
import './App.css';

const App = () => {
  const { openModal } = useSelector(getUpdateContactSelector);

  return (
    <div className='App'>
      <Container>
        <h2 className='app__title'>This table is a test task from the company «Telecard-Device»</h2>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                Add contact
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                <AddContact />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <ContactsList />
      </Container>
      {openModal && <UpdateContact />}
    </div>
  );
};

export default App;
