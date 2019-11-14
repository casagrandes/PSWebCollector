import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: black,
    dark: colors.grey[500],
    main: colors.blueGrey[300],
    light: colors.grey[200],
  },
  secondary: {
    contrastText: black,
    dark: colors.blueGrey[800],
    main: colors.blueGrey[400],
    light: colors.blueGrey[100]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.blue[400]
  },
  text: {
    primary: colors.grey[900],
    secondary: colors.grey[800],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: colors.blueGrey[900],
  divider: colors.grey[200]
};