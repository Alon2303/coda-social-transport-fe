import React, {useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid  from '@material-ui/core/Grid';
import logo from '../../../Logo/logo.svg';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider} from '@material-ui/core/styles';
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
                label={"שמירת סיסמא"} style={{marginRight:-10}} labelPlacement={"end"} />
        </div>
    )
}

const SignUp = () => {
    const [email , setEmail] = useState('');
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');
    const [password2 , setPassword2] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(email);
        // console.log(name);
        // console.log(password);
        // console.log(password2);
        // console.log(password === password2);
        if(password === password2){
            console.log('yes')
            const user = addUserToDB(name, email, password);
            setTimeout(() => {
                this.props.history.push({
                    pathname: './wellcome'
                })
            }, 2000)
        }
    }

  

    return(
    <ThemeProvider theme={theme}>
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
                        <TextField color={"secondary"} label={"מייל"} placeholder={"test@test.com"} 
                        value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={11} >
                        <TextField color={"secondary"} label={"שם ומשפחה"} 
                        value={name} onChange={(e)=>setName(e.target.value)} fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <TextField color={"secondary"} label={"סיסמא"} type={"password"} 
                        value={password} onChange={(e)=>setPassword(e.target.value)} fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <TextField color={"secondary"} label={"אימות סיסמא"} type={"password"} 
                        value={password2} onChange={(e) =>setPassword2(e.target.value)} fullWidth required/>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <CheckBoxFun/>
                    </Grid> 
                    <Button variant={"contained"} color={"primary"} 
                        style={{height: 56 ,width:260, fontSize:16, borderRadius: 18, marginBottom:12}}
                        type={"submit"} >צרפו אותי </Button>
                    </Grid>
                </form>
            <Grid style={{display:'flex',justifyContent:'center', paddingTop:'10px'}}>
                <Link href={'/signin'} variant={"body2"} > נרשמתי כבר</Link>
            </Grid>
        </Container>
    </ThemeProvider>

    );
 }

export default SignUp;
