import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid  from '@material-ui/core/Grid';
import logo from '../../../Logo/logo.svg';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import theme from '../theme';
import { getUsersByEmail} from '../../../../api/users';


function CheckBoxFun() {
    const [checked, setChecked] = React.useState(false)
    // console.log('checked', checked)
    return (
        <div>
            <FormControlLabel 
            control= {
                <Checkbox checked={checked} 
                onChange={(e) =>setChecked(e.target.checked)} color={"primary"} />}
                label={"שמירת סיסמא"} style={{marginRight:-10}} labelPlacement={"end"} />
        </div>
    )
}

const SignIn = () => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(password)
        // console.log(email)
        const user = await getUsersByEmail(email, password)
        // console.log("user", user);
        // console.log("check",!user);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Grid container justify={'center'}>
                        <img src={logo} alt={'logo'} style={{width:53, height:45}} justify={'center'}/>
                    </Grid> 
                    <Grid container spacing={2} direction={"column"} style={{textAlign:"right"}}>
                        <Grid item xs={12} sm={6} xl={3}>
                            <Typography variant={"h6"} color={"secondary"}>
                                התחברות
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <TextField color={"secondary"} label={"מייל"} placeholder={"test@test.com"} 
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <TextField color={"secondary"} label={"סיסמא"} type="password" 
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={11} style={{fontSize: 14, display:'flex', alignItems:'baseline', justifyContent: 'space-between'}}>
                            <CheckBoxFun />
                            <Link>שכחתי סיסמא </Link>
                        </Grid>
                        <Button variant={"contained"} 
                            color={"primary"} 
                            style={{height: 56 ,width:260, fontSize:16, borderRadius: 18,  marginTop:130, marginBottom:12}}
                            type={"submit"} > לתרומות שלי </Button>
                        </Grid>
                    </form>
                    <Grid style={{display:'flex',justifyContent:'center', paddingTop:'10px'}}>

                    <Link href={'/signup'} variant={"body2"}>  עוד לא נרשמתי </Link>
                    </Grid>
            </Container>
        </ThemeProvider>
    )
}

//         this.setState({
//             [name] : value.toLowerCase(),
//         });
//     };

//     signupProcessDone = (e) =>{
//          setTimeout(() => {
//             this.props.history.push({
//                 pathname: './confirmation',
//                 state: {
//                     name: this.state.name
//                 }
//             })
//         }, 2000) 
//     };

//   const signInProcessDone =  async e => {
//    e.preventDefault();
//    const {email, password} = this.state;
//    console.log("singin component", email, password)
//    const user = await getUsersByEmail(email, password)
//    console.log("user", user);
//    console.log("check",!user);
//    if (user.name === 'Error'){
//        console.log("1", user.message);
//        this.setState({
//            valid: "invalid",
//            message: "User doesn't exist in the system!"
//        })
//    }else if(user.message === 'worng password') {
//        this.setState({
//            valid: "invalid",
//            message: "One of the inputs is invalid"  
//        })
//    }else {
//        this.setState({
//            user,
//            valid: "valid",
//            message: `${user.name} Wellcome back!`  
//        })
//        setTimeout(() => {
//            this.props.history.replace("/wellcome"); 
//        }, 3000)
//    }
//}


export default SignIn;
