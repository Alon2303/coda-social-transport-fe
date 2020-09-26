import React from 'react';
import '../signUp/style.css';

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password: '',
        }
    }
    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
    }
    render(){
        const {email, password} = this.state;
        return (
            <form className={"container fluid"} onSubmit={this.handleSubmit}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"text-right"}>                        
                    <img src={require('../../images/logo.png')} alt={"logo"} />
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
                            <button type={"submit"} >מאושר, המשך/י</button>
                        </div>
                        }   
                    </div>
                </div>
            </form>
        )
    }
}

export default SignIn;