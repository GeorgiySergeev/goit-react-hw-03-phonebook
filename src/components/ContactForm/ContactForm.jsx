import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Button, Input } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const newId = nanoid();
    const newContact = { id: newId, name, number };

    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(newContact);
    }

    this.setState({ name: '', number: '' });
  };

  handleChangeInput = e => {
    const { value, name } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChangeInput}
          placeholder="Name"
        />
        <Input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChangeInput}
          placeholder="Phone"
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
