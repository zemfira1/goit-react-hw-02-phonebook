
import { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
//import { Filter } from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSubmit = data => {
    console.log(data);

    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    console.log(newContact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
  }

  render() {
    const contacts = this.state.contacts;

    return(
      <Container>
        <Section title="Phonebook"/>
          <ContactForm formSubmit={ this.formSubmit} />

        <Section title="Contacts"/>
          {/* <Filter ... /> */}
          <ContactList contacts={contacts} />
    </Container>
  );} 
};
