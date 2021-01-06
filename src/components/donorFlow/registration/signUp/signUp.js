import React from 'react';
import { addUserToDB } from '../../../../api/users';
import './style.css';

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
            <form className={"container fluid"} onSubmit={this.handleSubmit}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"text-right"}>
                        <img src={require('../../../../images/logo.png')} alt={"logo"} height={"100px"}/>
                        <h6>כל קשר מוצלח מתחיל בהיכרות</h6>
                        <div className={"text-center"} style={{backgroundColor:"white"}}>
                            <div>
                                <p>?מה השם שלך</p>
                                <input type={"text"}  name={"name"} onChange={this.handleChange} required/>
                            </div>
                            <hr />
                            <div>
                            <p>?מה המייל שלך</p>
                                <input type={"email"} name={"email"} onChange={this.handleChange} required/>
                            </div>
                            <hr />
                            <div>
                                <p>?מה הסיסמא שלך</p>
                                <input type={"password"} name={"password"} minLength="7" onChange={this.handleChange} required/>
                            </div>
                            <hr />
                            { name && email && password &&
                            <div>
                                <button type={"submit"} onClick={this.signupProcess}>מאושר, המשך/י</button>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </form>
        )
    }
};

export default SignUp;
