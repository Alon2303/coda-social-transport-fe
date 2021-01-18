import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider , createMuiTheme} from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
        border: 0,
        borderRadius: 15,
        marginBottom: 15,
        color: 'white',
        padding: '5px 30px'
    }
})

const theme = createMuiTheme({
    
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
                color={"secondary"}
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
                <TextField
                variant={"standard"}
                color={"primary"}
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
                color={"primary"}>
                    Hello world!
                </Button>

                <ButtonStyled/>
            </ThemeProvider>
        </div>
    );
}

export default SignUp;
