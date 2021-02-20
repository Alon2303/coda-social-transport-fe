import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme ({
    //direction: 'rtl',
    typography: {
        h6:{
            fontFamily: 'Rubik',
            fontSize: 22,
            maginTop: 140,
            //textAlign : 'right'
        }, 
    },
    palette:{
        primary:{
            main: '#3A4F40',
        }, 
        secondary: {
            main: '#44919B',
        }
    },
    overrides: {
        MuiFormControlLabel: {
            label: {
                fontSize: '0.875rem',
            }
        }
    },
    //     overrides: {
//         MuiSelect:{
//             root:{
//                 textAlign:'right'
//             }
//         }
//    }
});

export default theme;