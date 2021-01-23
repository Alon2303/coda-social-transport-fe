import React from 'react';
import { getUsersByEmail} from '../../../../api/users';

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password: '',
            user: '',
            valid: '',
            message:''
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
    }

    signInProcessDone =  async e => {
        e.preventDefault();
        const {email, password} = this.state;
        console.log("singin component", email, password)
        const user = await getUsersByEmail(email, password)
        console.log("user", user);
        console.log("check",!user);
        if (user.name === 'Error'){
            console.log("1", user.message);
            this.setState({
                valid: "invalid",
                message: "User doesn't exist in the system!"
            })
        }else if(user.message === 'worng password') {
            this.setState({
                valid: "invalid",
                message: "One of the inputs is invalid"  
            })
        }else {
            this.setState({
                user,
                valid: "valid",
                message: `${user.name} Wellcome back!`  
            })
            setTimeout(() => {
                this.props.history.replace("/wellcome"); 
            }, 3000)
        }
    }

    render(){
        const {email, password, valid, message} = this.state;
        return (
            <form className={"container fluid"} onSubmit={this.handleSubmit}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"text-right"}>                        
                    <img src={require('../../../../images/logo.png')} alt={"logo"} />
                        <h6>שמחים שחזרת להיות בקשר</h6>
                        <div>
                        <p>המייל שלך</p>
                            <input type={"text"} name={"email"} onChange={this.handleChange} required/>
                        </div>
                        <hr />
                        <div>
                            <p>סיסמא</p>
                            <input type={"password"} name={"password"} onChange={this.handleChange} required/>
                        </div>
                        <div>
                            <span className={""} > <a href={"1234"}> לחץ/י כאן</a> למקרה ששכחת סיסמא</span>
                           
                        </div>
                        <br/>
                        {email && password &&
                        <div>
                            <button type={"submit"} onClick={this.signInProcessDone}>מאושר, המשך/י</button>
                        </div>
                        }  
                        {valid && 
                        <div>
                            <p>{message}</p>
                        </div>
                        } 
                    </div>
                </div>
            </form>
        )
    }
}

export default SignIn;