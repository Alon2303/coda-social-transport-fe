import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid  from '@material-ui/core/Grid';
import logo from '../../../Logo/logo.svg';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider , createMuiTheme} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { addUserToDB } from '../../../../api/users';


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
    }
})

const SignUp = () => {
    const [values , setValues] = useState({
        email:'', 
        name:'', 
        password:'',
        showPassword: false
    });

    const handleChange = (prop) => (event) =>{
        setValues({ ...values, [prop]: event.target.value})
        console.log('values', values);
    };

    const handleClickShowPassword = () =>{
        setValues({ ...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <form >
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
                            <TextField color={"secondary"} label={"מייל"} placeholder={"test@test.com"} fullWidth required/>
                        </Grid>
                        {/* input email*/}
                        {/* <FormControl >
                            <InputLabel htmlFor="my-input" justify={"right"} required>מייל</InputLabel>
                            <Input  id="my-input" aria-describedby="my-helper-text" />
                        </FormControl> */}
                        {/* input password with showpassword*/}

                        {/* <FormControl>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input 
                            type={values.showPassword ? 'text' : 'password'}
                            value= {values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            }
                            />
                        </FormControl> */}
                        <Grid item xs={12} sm={11}>
                            <TextField color={"secondary"} label={"סיסמא"} type="password" fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <CheckBoxFun/>
                        </Grid>
                        <Button variant={"contained"}  color={"primary"} style={{height: 56 ,width:225, fontSize:16 }}>
                        לתרומות שלי
                        </Button>
                    </Grid>
                </form>
            </Container>
        </ThemeProvider>
    )
}


// class SignUp3 extends React.Component {
//     handleChange = (e) =>{
//         e.preventDefault();
//         let {name, value} = e.target;
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

//     signupProcess = async e => {
//         e.preventDefault();
//         const {name, email, password} = this.state;
//         const user = await addUserToDB(name, email, password);
//         //const user = {name: 'inna', email:'inna@gmail.com', password:'1234'};
//         console.log("user", user);
//         if(user === undefined){
//             this.setState({
//                 valid: "notValid",
//                 message: 'One or more of the inputs is invalid!'
//             })
//         }else if(user.data === "all fields are required"){
//             this.setState({
//                 valid: "notValid",
//                 message: 'All fields are required'
//             })
//         }else{
//             this.setState({
//                 valid: "valid",
//                 message: ` כל קשר מוצלח מתחיל בהיכרות,${name}`
//             },
//             this.signupProcessDone());
//         }
//     };

//     render(){
//         const {name, email, password} = this.state;
//         return (
//             <div>
//             </div>
//         )
//     }
// };

export default SignUp;
