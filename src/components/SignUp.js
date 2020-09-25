import React from 'react';
// import logo from '../../public/logo.png';
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
                <div className={"row"}>
                    <div className={"col-xs-6 col-md-12"}>
                        <img src={require('../images/logo.png')} alt={"logo"} />


                        <h6>כל קשר מוצלח מתחיל בהיכרות</h6>
                        {/* <hr style={{width:"50%"}}/> */}
                        <div>
                            <p>?איך קוראים לך</p>
                            <input type={"text"}  name={"name"} onChange={this.handleChange}/>
                        </div>
                        <div>
                        <p>?מה המייל שלך</p>
                            <input type={"text"} name={"email"} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <p>תבחר לך סיסמא</p>
                            <input type={"text"} name={"password"} onChange={this.handleChange}/>
                        </div>
                        <div>
                        <p>?מה המספר נייד שלך</p>
                            <input type={"text"} name={"phone"} onChange={this.handleChange}/>
                        </div>
                        <div>
                        <p>?מה שם החברה התורמת</p>
                            <input type={"text"} name={"companyName"} onChange={this.handleChange}/>
                        </div>
                        <div style={{paddingBottom:"10px"}}>
                            <p>לוגו החברה</p>
                            <input type={"file"} name={"companyLogo"} onChange={this.handleUpload}/>
                            {/* <button type={"button"} onClick={this.handleClick}>Upload</button> */}
                        </div>
                        <div>
                            <button type={"submit"} >מאושר, המשך/י</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
};

export default SignUp;