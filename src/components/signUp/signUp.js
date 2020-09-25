import React from 'react';
import './style.css';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email:'',
            password: '',
            phone:'',
            companyName:'',
            selectedFile: null
        }
    }
    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
        console.log('name', this.state.name)
        console.log('email', this.state.email)
        console.log('password', this.state.password)
        console.log('phone', this.state.phone)
        console.log('companyName', this.state.companyName)
    }

    handleUpload = (e)=>{
        console.log(e.target.files[0])
        this.setState({
            selectedFile: e.target.files[0],
            loaded: 0
        })
    }

    render(){
        return (
            <form className={"container fluid"} onSubmit={this.handleSubmit}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"text-right"}>
                        <img src={require('../../images/logo.png')} alt={"logo"} height={"100px"}/>
                        <h6>כל קשר מוצלח מתחיל בהיכרות</h6>
                        {/* <hr style={{width:"50%"}}/> */}
                        <div className={"text-center"} style={{backgroundColor:"white"}}>

                            <div>
                                <p>?איך קוראים לך</p>
                                <input type={"text"}  name={"name"} onChange={this.handleChange} required/>
                            </div>
                            <hr />
                            <div>
                            <p>?מה המייל שלך</p>
                                <input type={"text"} name={"email"} onChange={this.handleChange} required/>
                            </div>
                            <hr />
                            <div>
                                <p>תבחר לך סיסמא</p>
                                <input type={"password"} name={"password"} onChange={this.handleChange} required/>
                            </div>
                            <hr />
                            <div>
                            <p>?מה המספר נייד שלך</p>
                                <input type={"text"} name={"phone"} onChange={this.handleChange}/>
                            </div>
                            <hr />
                            <div>
                            <p>?מה שם החברה התורמת</p>
                                <input type={"text"} name={"companyName"} onChange={this.handleChange}/>
                            </div>
                            <hr />
                            <div>
                                <p>לוגו החברה</p>
                                <input type={"file"} name={"companyLogo"} onChange={this.handleUpload}/>
                                {/* <button type={"button"} onClick={this.handleClick}>Upload</button> */}
                            </div>
                            <br/>
                            <div>
                                <button type={"submit"} >מאושר, המשך/י</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
};

export default SignUp;