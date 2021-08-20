import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFDEA3'
  },
  heading: {
    color: '#DB7202',
  },
  image: {
    marginLeft: '0px',
    marginRight: '10px',
  },
}));