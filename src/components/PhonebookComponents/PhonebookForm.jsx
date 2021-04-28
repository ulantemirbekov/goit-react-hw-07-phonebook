import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const PhonebookForm = ({
  number = '',
  name = '',
  onFormSubmit,
  onInpuChangeName,
  onInpuChangeNumber,
}) => {
  const classes = useStyles();
  
  return (
    <Grid container component="main" className={classes.root}>
    <div className={classes.paper}>
 
      <form onSubmit={onFormSubmit}>
      <TextField
            
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={name}
            id="Name"
            label="Name"
            name="Name"
            autoComplete="Name"
            autoFocus
            onChange={onInpuChangeName} 
          />
          <TextField
          
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Number"
            label="Number"
            name="Number"
            autoComplete="Number"
            autoFocus
            onChange={onInpuChangeNumber} 
          />
 
          <Button
            type="submit"
            value={number}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           add contact
          </Button>
       
      </form>
    </div></Grid>
  );
};

export default PhonebookForm;

PhonebookForm.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  onFormSubmit: PropTypes.func.isRequired,
  onInpuChangeName: PropTypes.func.isRequired,
  onInpuChangeNumber: PropTypes.func.isRequired,
};
