import {List} from './ContactList.styled';
import PropTypes from "prop-types";
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    name={name}
                    number={number}
                />
            ))}
        </List>
    )
   
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
}
