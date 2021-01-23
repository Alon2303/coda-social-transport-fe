import React, {useState} from 'react';
import logo from '../../../Logo/logo.svg';
import { addUserToDB } from '../../../../api/users';
import {makeStyles, ThemeProvider , createMuiTheme} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { pink } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root:{
        border: 0,
        borderRadius: 10,
        color: pink,
        padding: '0 30px'
    }
}) 

const theme = createMuiTheme ({
    Typography:{
        h6:{
            fontSize: 24
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



class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user:'',
            valid: '',
            message: '',
            name: '',
            email:'',
            password: ''
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
    };

    signupProcessDone = (e) =>{
         setTimeout(() => {
            this.props.history.push({
                pathname: './confirmation',
                state: {
                    name: this.state.name
                }
            })
        }, 2000) 
    };

    signupProcess = async e => {
        e.preventDefault();
        const {name, email, password} = this.state;
        const user = await addUserToDB(name, email, password);
        //const user = {name: 'inna', email:'inna@gmail.com', password:'1234'};
        console.log("user", user);
        if(user === undefined){
            this.setState({
                valid: "notValid",
                message: 'One or more of the inputs is invalid!'
            })
        }else if(user.data === "all fields are required"){
            this.setState({
                valid: "notValid",
                message: 'All fields are required'
            })
        }else{
            this.setState({
                valid: "valid",
                message: ` כל קשר מוצלח מתחיל בהיכרות,${name}`
            },
            this.signupProcessDone());
        }
    };

    render(){
        const {name, email, password} = this.state;
        console.log('user', this.state.user)
        console.log('valid', this.state.valid);
        console.log('message', this.state.message);


        
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <form >
                        <Container maxWidth={"xl"}>
                            <Grid container spacing={2} direction={"column"} justify={'center'} alignedItems={"center"}>
                                <Grid item xs={12} sm={6} xl={3}>
                                    <img src={logo} alt={'logo'} style={{width:53, height:'100%'}}/>
                                    <Typography variant={"h6"}>
                                        הרשמה
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} xl={3}>
                                    <TextField color={"secondary"}
                                    label={"מייל*"} placeholder={"test@test.com"}/>
                                </Grid>
                                <Grid item xs={12} sm={6} xl={3}>
                                    <TextField color={"secondary"} label={"שם ומשפחה*"}/>
                                </Grid>
                                <Grid item xs={12} sm={6} xl={3}>
                                    <TextField color={"secondary"} label={"סיסמא*"}/>
                                </Grid>
                                <Grid item xs={12} sm={6} xl={3}>
                                    <TextField color={"secondary"} label={"אימות סיסמא*"}/>
                                </Grid>
                                <Grid item xs={12} sm={6} xl={3}>
                                    <TextField color={"secondary"} label={"אימות סיסמא*"}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </form>
                </ThemeProvider>
            </div>
        )
    }
};

export default SignUp;
