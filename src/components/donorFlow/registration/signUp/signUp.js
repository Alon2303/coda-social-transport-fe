import React, { useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid  from '@material-ui/core/Grid';
import logo from '../../../Logo/logo.svg';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {  createMuiTheme , ThemeProvider} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import theme from '../theme';
import { addUserToDB } from '../../../../api/users';

function CheckBoxFun() {
    const [checked, setChecked] = React.useState(false)
    console.log('checked', checked)
    return (
        <div>
            <FormControlLabel control= {
                <Checkbox checked={checked} onChange={(e) =>setChecked(e.target.checked)} color={"primary"} />}
                label={"שמירת סיסמא"}
                style={{marginRight:-10}}
                labelPlacement={"end"} />
        </div>
    )
}

const SignUp = () => {
    const [email , setEmail] = useState({ email:''});
    const [name , setName] = useState({ name:''});
    const [password , setPassword] = useState({ password:''});
    const [password2 , setPassword2] = useState({password2:''});

    const addValues = (email, name, password) =>{
        setEmail({email});
        setName({name});
        setPassword({password});        
        setPassword2({password2});
    }

    useEffect(()=>{
        localStorage.setItem('name', JSON.stringify(name))
    }, [name]);

    useEffect(()=>{
        console.log(email);
        console.log(name);
        console.log(password);
        console.log('2', password2);
        setEmail('');
    })

    const signUp = async (name,email,password) =>{
        await addUserToDB(name, email, password);
    }

    //const [email, setInputForm] = useState('');
    // const [email, setEmailForm] = useState('');
    // const [name, setNameForm] = useState('');
    // const [password, setPasswordForm] = useState('');
    // const [password2, setPassword2Form] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        addValues(email, name, password, password2);
        // set values back to empty fileds
    }
    return(
    <Container>
        <form onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>
                <Grid container justify={'center'}>
                    <img src={logo} alt={'logo'} style={{width:53, height:45}} justify={'center'}/>
                </Grid> 
                <div dir="rtl">
                    {/* <TextField placeholder="Name" />
                    <input type="text" placeholder="Name" /> */}
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
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={11} >
                        <TextField  
                        color={"secondary"} 
                        label={"שם ומשפחה"} 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <TextField 
                        color={"secondary"} 
                        label={"סיסמא"} 
                        type={"password"} 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <TextField 
                        color={"secondary"} 
                        label={"אימות סיסמא"} 
                        type={"password"} 
                        value={password2}
                        onChange={(e) =>setPassword2(e.target.value)}
                        fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <CheckBoxFun/>
                    </Grid>
                    <Button variant={"contained"} 
                    color={"primary"} 
                    style={{height: 56 ,width:260, fontSize:16, borderRadius: 18, marginBottom:12}}
                    type={"submit"} 
                    //onClick={this.signInProcessDone}
                    >צרפו אותי
                    </Button>
                    <Link
                        component={"button"}
                        variant={"body2"}
                        onClick={() => {
                            console.info("link");
                        }}
                        > נרשמתי כבר 
                    </Link>
                </Grid>
                    </div>
            </ThemeProvider>
        </form>
    </Container>

    );
 }

export default SignUp;
