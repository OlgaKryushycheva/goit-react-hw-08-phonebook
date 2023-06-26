import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/thunks';

import { Btn, Item } from 'Styles/StyleForm.styled';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      {name}: {number}
      <Btn type="button" onClick={handleDelete}>
        Delite
      </Btn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};
