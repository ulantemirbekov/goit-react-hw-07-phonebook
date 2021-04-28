import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


const Filter = ({ filter, onChengeFilter }) => {
  return (
    <div>
      <h3> Find contacts by name </h3>
      <TextField type="text" value={filter} onChange={onChengeFilter} />
    </div>
  );
};

export default Filter;
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChengeFilter: PropTypes.func.isRequired,
};
