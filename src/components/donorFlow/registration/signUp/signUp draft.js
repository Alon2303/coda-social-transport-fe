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