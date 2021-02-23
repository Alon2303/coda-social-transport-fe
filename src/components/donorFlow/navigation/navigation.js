import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  createMuiTheme , ThemeProvider} from '@material-ui/core/styles';
import MyMenu from '../menu/mymenu';

const theme = createMuiTheme ({
    direction: 'rtl',
    typography: {
        fontFamily: 'Rubik',
        fontSize: 14
    },
});


const Navigation = () =>{
  return (
  <div>
      <ThemeProvider theme={theme}>
      <Toolbar style={{position:'absolute', top:'56px'}}>
            <Typography style={{position:'absolute', zIndex:'9999', backgroundColor:'#56959D', borderRadius:'30px 0 0 30px',padding:'14px 30px'}}> פריטים</Typography>
            <Typography style={{ position:'relative',left:'-85px',  backgroundColor:'#88AD3F', borderRadius:'30px 0 0 30px',padding:'14px 30px', color:"white"}} > הובלה</Typography>
            <Typography style={{position:'relative', left:'-74px',borderLeft:"1px solid lightgray",borderRadius:'30px 0 0 30px',padding:'14px 30px'}}> פריטים</Typography>
            <Typography style={{position:'relative', left:'-74px',padding:'14px 30px'}}> הובלה</Typography>
        </Toolbar>
        </ThemeProvider>

        <MyMenu/>
    </div>
  );
}

export default Navigation;