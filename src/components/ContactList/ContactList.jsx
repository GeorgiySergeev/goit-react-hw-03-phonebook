import { List } from './ContactList.styled';
import { ListItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onDeliteContact, title }) => {
  return (
    <>
      <h4>{title}</h4>
      <List>
        {contacts.map(({ name, id, number }) => (
          <ListItem
            key={id}
            name={name}
            number={number}
            handlerClic={onDeliteContact}
            id={id}
          ></ListItem>
        ))}
      </List>
    </>
  );
};
