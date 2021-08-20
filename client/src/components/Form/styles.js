import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  formTitle: {
    color: '#E47500'
  },
  paper: {
    padding: theme.spacing(2),
    background: '#FFDEA3'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    background: '#FFC55B '
  },
  buttonClear: {
    marginBottom: 10,
    background: '#DB7202'
  },
}));