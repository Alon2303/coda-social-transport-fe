import React from 'react';
import { addUserToDB } from '../../api/users';
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
            address: '',
            selectedFile: null
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
    };

    handleUpload = (e)=>{
        this.setState({
            selectedFile: e.target.files[0],
            loaded: 0
        })
    };

<<<<<<< HEAD
    // signupProcessDone = (e) =>{
    //     e.preventDefault();
    //     setTimeout(() => {
    //         this.props.history.replace("/confirmation"); 
    //     }, 2000)
    // }
=======
    signupProcessDone = (e) =>{
        e.preventDefault();

        setTimeout(() => {
            this.props.history.replace("/confirmation"); 
        }, 2000)
    };
>>>>>>> refs/remotes/origin/login

    signupProcessDone = async e => {
        e.preventDefault();
        const {name, email, password, phone, companyName, address, selectedFile} = this.state;
        // const user = await addUserToDB(name, email, password, phone, companyName, address, selectedFile);
        const user = await addUserToDB(name, email, password, phone, companyName, address);
        console.log("user", user);
        // if(user === undefined){
        //     this.setState({
        //         valid: "notValid",
        //         message: 'One or more of the inputs is invalid!'
        //     })
        // }else if(user.data === "all fields are required"){
        //     this.setState({
        //         valid: "notValid",
        //         message: 'All fields are required'
        //     })
        // }else{
        //     this.setState({
        //         user,
        //         valid: "valid",
        //         message: ` כל קשר מוצלח מתחיל בהיכרות,${name}`
        //     },this.signupProcessDone())
        // }
    };

    render(){
        const {name, email, password} = this.state;
        return (
            <form className={"container fluid"} onSubmit={this.handleSubmit}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"text-right"}>
                        <img src={require('../../images/logo.png')} alt={"logo"} height={"100px"}/>
                        <h6>כל קשר מוצלח מתחיל בהיכרות</h6>
                        {/* <hr style={{width:"50%"}}/> */}
                        <div className={"text-center"} style={{backgroundColor:"white"}}>
                            <div>
                                <p>?מה השם שלך</p>
                                <input type={"text"}  name={"name"} onChange={this.handleChange} required/>
                            </div>
                            <hr />
                            <div>
                            <p>?מה המייל שלך</p>
                                <input type={"text"} name={"email"} onChange={this.handleChange} required/>
                            </div>
                            <hr />
                            <div>
                                <p>?מה הסיסמא שלך</p>
                                <input type={"password"} name={"password"} minLength="7" onChange={this.handleChange} required/>
                            </div>
                            <hr />
                            <div>
                            <p>?מה הטלפון שלך</p>
                                <input type={"text"} name={"phone"} onChange={this.handleChange}/>
                            </div>
                            <hr />
                            <div>
                            <p>שם החברה התורמת</p>
                                <input type={"text"} name={"companyName"} onChange={this.handleChange}/>
                            </div>
                            <hr />
                            <div>
                            <p>כתובת איסוף</p>
                                <input type={"text"} name={"address"} onChange={this.handleChange}/>
                            </div>
                            <hr />
                            <div>
                                <p>הוספת לוגו של החברה</p>
                                <input type={"file"} name={"companyLogo"} onChange={this.handleUpload}/>
                                {/* <button type={"button"} onClick={this.handleClick}>Upload</button> */}
                            </div>
                            <br/>
                            { name && email && password &&
                            <div>
                                <button type={"submit"} onClick={this.signupProcessDone}>מאושר, המשך/י</button>
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
