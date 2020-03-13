import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#0d47a1'
      }
    }
  })
);
