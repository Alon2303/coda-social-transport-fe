import { createMuiTheme } from '@material-ui/core/styles';
import Rubik from './Fonts/Rubik/static/Rubik-Black.ttf';

const rubik = {
 fontFamily: 'Rubik',
 fontStyle: 'semi-bold',
 fontDisplay: 'swap',
 fontWeight: '600',
 src: `
   local('Rubik'),
   local('Rubik-Black'),
   url(${Rubik}) format('ttf')
 `,
 unicodeRange:
   'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};


const theme = createMuiTheme({
  typography: {
      fontFamily: ['"Open Sans"', 'Rubik', 'Roboto'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [rubik],
      },
    }
  }
})

export default theme;
