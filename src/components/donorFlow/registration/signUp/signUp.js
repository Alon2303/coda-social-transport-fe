import React, { useState } from 'react';
import { getUsersByEmail} from '../../../../api/users';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid  from '@material-ui/core/Grid';
import logo from '../../../Logo/logo.svg';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider , createMuiTheme} from '@material-ui/core/styles';
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

const SignUp = () => {
    const [values , setValues] = useState({
        email:'', 
        name:'', 
        password:'',
        showPassword: false
    });

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <form >
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
                            <TextField color={"secondary"} label={"מייל"} placeholder={"test@test.com"} inputProps={{ style: {textAlign: 'right'} }} fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={11} >
                            <TextField  color={"secondary"} label={"שם ומשפחה"} inputProps={{ style: {textAlign: 'right'} }} fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <TextField color={"secondary"} label={"סיסמא"} type={"password"} inputProps={{ style: {textAlign: 'right'} }}fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <TextField color={"secondary"} label={"אימות סיסמא"} type={"password"} inputProps={{ style: {textAlign: 'right'} }} fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <CheckBoxFun/>
                        </Grid>
                        <Button variant={"contained"} color={"primary"} style={{height: 56 ,width:225, fontSize:16 }}>
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
        </ThemeProvider>
    )
}

// class SignIn extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             email:'',
//             password: '',
//             user: '',
//             valid: '',
//             message:''
//         }
//     }

//     handleChange = (e) =>{
//         e.preventDefault();
//         let {name, value} = e.target;
//         this.setState({
//             [name] : value.toLowerCase(),
//         });
//     }

//     signInProcessDone =  async e => {
//         e.preventDefault();
//         const {email, password} = this.state;
//         console.log("singin component", email, password)
//         const user = await getUsersByEmail(email, password)
//         console.log("user", user);
//         console.log("check",!user);
//         if (user.name === 'Error'){
//             console.log("1", user.message);
//             this.setState({
//                 valid: "invalid",
//                 message: "User doesn't exist in the system!"
//             })
//         }else if(user.message === 'worng password') {
//             this.setState({
//                 valid: "invalid",
//                 message: "One of the inputs is invalid"  
//             })
//         }else {
//             this.setState({
//                 user,
//                 valid: "valid",
//                 message: `${user.name} Wellcome back!`  
//             })
//             setTimeout(() => {
//                 this.props.history.replace("/wellcome"); 
//             }, 3000)
//         }
//     }

//     render(){
//         const {email, password, valid, message} = this.state;
//         return (
//             <form className={"container fluid"} onSubmit={this.handleSubmit}>
//                 <div className={"d-flex justify-content-center"}>
//                     <div className={"text-right"}>                        
//                     <img src={require('../../../../images/logo.png')} alt={"logo"} />
//                         <h6>שמחים שחזרת להיות בקשר</h6>
//                         <div>
//                         <p>המייל שלך</p>
//                             <input type={"text"} name={"email"} onChange={this.handleChange} required/>
//                         </div>
//                         <hr />
//                         <div>
//                             <p>סיסמא</p>
//                             <input type={"password"} name={"password"} onChange={this.handleChange} required/>
//                         </div>
//                         <div>
//                             <span className={""} > <a href={"1234"}> לחץ/י כאן</a> למקרה ששכחת סיסמא</span>
                           
//                         </div>
//                         <br/>
//                         {email && password &&
//                         <div>
//                             <button type={"submit"} onClick={this.signInProcessDone}>מאושר, המשך/י</button>
//                         </div>
//                         }  
//                         {valid && 
//                         <div>
//                             <p>{message}</p>
//                         </div>
//                         } 
//                     </div>
//                 </div>
//             </form>
//         )
//     }
// }

export default SignUp;

