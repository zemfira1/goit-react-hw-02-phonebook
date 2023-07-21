import { Contact } from './ContactItem.styled';
import PropTypes from "prop-types";

export const ContactItem = ({ id, name, number }) => {
    return (
        <Contact key={id}>
            <p>{name}: {number}</p>
        </Contact>
    )
};

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}
