import React, { useEffect, useState } from 'react';
import SignUpForm from './signUpForm';
import {ThemeProvider} from '@material-ui/core/styles';
import { addUserToDB } from '../../../../api/users';
import {  createMuiTheme} from '@material-ui/core/styles';


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
    const [email , setEmail] = useState({ 
        email:''
    });
    const [name , setName] = useState({ 
        name:''
    });
    const [password , setPassword] = useState({ 
        password:''
    });
    const [password2 , setPassword2] = useState({ 
        password2:''
    });

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
    

    return (
        <ThemeProvider theme={theme}>

            <SignUpForm addValues={addValues}/>
        </ThemeProvider>
    )
}

export default SignUp;


//signupProcess = async e => {
//    e.preventDefault();
//    const {name, email, password} = this.state;
//    const user = await addUserToDB(name, email, password);
//    //const user = {name: 'inna', email:'inna@gmail.com', password:'1234'};
//    console.log("user", user);
//    if(user === undefined){
//        this.setState({
//            valid: "notValid",
//            message: 'One or more of the inputs is invalid!'
//        })
//    }else if(user.data === "all fields are required"){
//        this.setState({
//            valid: "notValid",
//            message: 'All fields are required'
//        })
//    }else{
//        this.setState({
//            valid: "valid",
//            message: ` כל קשר מוצלח מתחיל בהיכרות,${name}`
//        },
//        this.signupProcessDone());
//    }
//};