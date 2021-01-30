import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid  from '@material-ui/core/Grid';
import logo from '../../../Logo/logo.svg';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {  createMuiTheme} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';


function CheckBoxFun() {
    const [checked, setChecked] = React.useState(false)
    console.log('checked', checked)
    return (
        <div>
            <FormControlLabel control= {
                <Checkbox checked={checked} onChange={(e) =>setChecked(e.target.checked)} color={"primary"} />}
                label={"שמירת סיסמא"}
                labelPlacement={"start"} />
        </div>
    )
}

const theme = createMuiTheme ({
    typography: {
        h6:{
            fontFamily: 'Rubik',
            fontSize: 22,
            maginTop: 140,
            textAlign : 'right'
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
        MuiSelect:{
            root:{
                textAlign:'right'
            }
        }
   }
})


 const SignUpForm = ({addValues}) => {
    //const [email, setInputForm] = useState('');
    const [email, setEmailForm] = useState('');
    const [name, setNameForm] = useState('');
    const [password, setPasswordForm] = useState('');
    const [password2, setPassword2Form] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        addValues(email, name, password, password2);
        // set values back to empty fileds
    }
    return(
        <Container>
        <form onSubmit={handleSubmit}>
            <Grid container justify={'center'}>
                <img src={logo} alt={'logo'} style={{width:53, height:45}} justify={'center'}/>
            </Grid> 
            <Grid container spacing={2} direction={"column"} style={{textAlign:"right"}}>
                <Grid item xs={12} sm={6} xl={3} >
                    <Typography variant={"h6"} color={"secondary"}>
                        הרשמה
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={11} >
                    <TextField color={"secondary"} 
                    label={"מייל"} 
                    placeholder={"test@test.com"} 
                    inputProps={{ style: {textAlign: 'right'} }} 
                    value={email}
                    onChange={(e)=>setEmailForm(e.target.value)}
                    fullWidth required/>
                </Grid>
                <Grid item xs={12} sm={11} >
                    <TextField  
                    color={"secondary"} 
                    label={"שם ומשפחה"} 
                    inputProps={{ style: {textAlign: 'right'} }} 
                    value={name}
                    onChange={(e)=>setNameForm(e.target.value)}
                    fullWidth required/>
                </Grid>
                <Grid item xs={12} sm={11}>
                    <TextField 
                    color={"secondary"} 
                    label={"סיסמא"} 
                    type={"password"} 
                    inputProps={{ style: {textAlign: 'right'} }}
                    value={password}
                    onChange={(e)=>setPasswordForm(e.target.value)}
                    fullWidth required/>
                </Grid>
                <Grid item xs={12} sm={11}>
                    <TextField 
                    color={"secondary"} 
                    label={"אימות סיסמא"} 
                    type={"password"} 
                    inputProps={{ style: {textAlign: 'right'} }} 
                    value={password2}
                    onChange={(e) =>setPassword2Form(e.target.value)}
                    fullWidth required/>
                </Grid>
                <Grid item xs={12} sm={11}>
                    <CheckBoxFun/>
                </Grid>
                <Button variant={"contained"} 
                color={"primary"} 
                style={{height: 56 ,width:225, fontSize:16 }}
                type={"submit"} 
                //onClick={this.signInProcessDone}
                >
                    צרפו אותי
                </Button>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        console.info("link");
                    }}
                    > נרשמתי כבר 
                </Link>
            </Grid>
        </form>
    </Container>
    );
 }

 export default SignUpForm;