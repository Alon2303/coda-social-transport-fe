import React from 'react';

class Shipping extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            independentTransport:'',
            needTransportation: '',
            date: '',
            // user : this.props.location.state.user
        }
    }

    render(){

        // console.log("f", this.props.location.state.user)
        return(
            <div className={"container fluid"}>
                <div className={"d-flex justify-content-center"}>
                    <form>
                        <p>פרטי הובלה</p>
                        <div className={"form-check form-check-inline"}>
                            <input className={"form-check-input"} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label className={"form-check-label"} >הובלה עצמאית</label>
                        </div>
                        <div className={"form-check form-check-inline"}>
                            <input className={"form-check-input"} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label className={"form-check-label"} >זקוק להובלה</label>
                        </div>
                        <p>פרטי התקשרות</p>
                        {/* <input>שם איש קשר</input>
                        <input>מספר טלפון נייד</input> */}
                       
                    </form>
                </div>  
            </div>
        );
    }
}

export default Shipping;