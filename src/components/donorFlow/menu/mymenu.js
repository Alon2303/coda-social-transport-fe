import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {  createMuiTheme , ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme ({
    direction: 'rtl',
    typography: {
        fontFamily: 'Rubik',
        fontSize: 14,
        //textAlign : 'right'
    },
    palette:{
        primary:{
            main: '#3A4F40',
        }, 
        secondary: {
            main: '#44919B',
        }
    },
  
});


const MyMenu = () =>{
    return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar style={{backgroundColor:'white'}}>
          <IconButton edge="end"  color={"secondary"} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography  color={"secondary"}>
            תרומה חדשה מאינה
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default MyMenu;