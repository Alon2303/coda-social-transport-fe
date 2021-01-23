import React from 'react';
import logo from '../../../Logo/logo.svg';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider , createMuiTheme} from '@material-ui/core/styles';
import { green , pink } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from'@material-ui/core/Paper';
import Grid from'@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
        border: 0,
        borderRadius: 15,
        marginBottom: 15,
        color: 'white',
        padding: '30px 30px'
    }
})

const theme = createMuiTheme({
    typography:{
        h2:{
            fontSize: 18,
            marginBottom: 30,
        }
    },
    palette: {
        primary: {
            main: '#3A4F40',
        }, 
        secondary: {
            main: '#3A4F40',
        }
    }
})

function ButtonStyled() {
    const classes = useStyles();
    return <Button className={classes.root}> test styled Button</Button>
}

function CheckBoxFun() {
    const [checked, setChecked] = React.useState(true)
    console.log('checked', checked)
    return (
        <div>
            <FormControlLabel
            control= {
                <Checkbox
                checked={checked}
                onChange={(e) =>setChecked(e.target.checked)}
                color={"primary"}
                inputPropes={{
                    'aria-label':'secondary checkbox'
                }}
                />}
                label={"Testing checkbotx"}
            />
        </div>
    )
}

function SignUp(){
    return(
        <div>
            <ThemeProvider theme={theme}>
            <img src={logo} alt={'logo'}/>

                <Container maxWidth={"xs"}>
                    <svg width={21} height={21} fill={"none"}>
                        <path fillRule={"evenodd"} clipRule={"evenodd"} d={"https://www.figma.com/file/RMVjnQkHAZ2zIHXzztTAD5/SH_DONATE-DESIGN_2?node-id=318%3A551"}/>
                    </svg>
                    <Grid container spacing={2} justify={"center"}>
                        <Grid item sm={12} md={6}>
                            <Paper style={{ height: 75, width: '100%' }}/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Paper style={{ height: 75, width: '100%' }}/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Paper style={{ height: 75, width: '100%' }}/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Paper style={{ height: 75, width: '100%' }}/>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Paper style={{ height: 75, width: '100%' }}/>
                        </Grid>
                    </Grid>
                    <Typography variant={"h2"} component={"div"}>
                        Wellcome to 
                    </Typography>

                    <Typography variant={"subtitle1"} >
                        Wellcome another1
                    </Typography>

                    <Typography variant={"body1"} >
                        Wellcome another
                    </Typography>

                    <TextField
                    variant={"standard"}
                    color={"secondary"}
                    type={"date"}
                    />  
                
                    signup
                    <CheckBoxFun/>
                    <TextField
                    variant={"standard"}
                    color={"primary"}
                    type={"email"}
                    placeholder={"test@test.com"}
                    label={"here"}
                    />
                    <Button 
                        size={"large"}
                    style={{
                        fontSize:6
                    }}
                    variant={"contained"} 
                    href={'#'} 
                    color={"secondary"}>
                        Hello world!
                    </Button>

                    <ButtonStyled/>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default SignUp;
