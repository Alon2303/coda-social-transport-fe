import React from 'react';

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
        console.log('email', this.state.email)
        console.log('password', this.state.password)
    }
    render(){
        return (
            <form className={"container fluid"} onSubmit={this.handleSubmit}>
                <div className={"row"}>
                    <div className={"col-xs-6 col-md-12"}>
                        <img src={require('../images/logo.png')} alt={"logo"} />
                        <h6>שמחים שחזרת להיות בקשר</h6>
                        {/* <hr style={{width:"50%"}}/> */}
                        <div>
                        <p>המייל שלך</p>
                            <input type={"text"} name={"email"} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <p>סיסמא</p>
                            <input type={"text"} name={"password"} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <a href={"1234"}>למקרה ששכחת סיסמא לחץ/י כאן</a>
                        </div>
                        <div>
                            <button type={"submit"} >מאושר, המשך/י</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default SignIn;