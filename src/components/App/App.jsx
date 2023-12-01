import React from 'react';
import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Conatiner, Note } from './App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';

import {
  getContactsFromLocalStorage,
  setContactsToLocalStorage,
} from 'helpers';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deliteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(item => item.id !== id),
    }));
  };
  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filerContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  // !это  передаю пропсом в КонтактФорм
  formSubmitData = data => {
    this.state.contacts.some(element => element.name === data.name)
      ? Notify.info(`Contact with name ${data.name} already exists!`)
      : this.setState({
          contacts: [...this.state.contacts, data],
        });
  };

  componentDidMount() {
    const localStorageContacts = getContactsFromLocalStorage();
    this.setState({ contacts: localStorageContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      setContactsToLocalStorage(this.state.contacts);
    }
  }

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Conatiner>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitData} />

          {contacts.length === 0 ? (
            <>
              <Note>Your phonebook is empty! Add a contact</Note>
            </>
          ) : (
            <>
              <h2>Contacts</h2>
              <Filter
                value={filter}
                onFilterInputChange={this.handleChangeFilter}
              />

              <ContactList
                contacts={this.filerContact()}
                onDeliteContact={this.deliteContact}
              />
            </>
          )}
        </Conatiner>
      </>
    );
  }
}
