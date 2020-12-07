import React from 'react';

class MainShipping extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            donorName: this.props.location.state.donorName,
            logo: this.props.location.state.logo,             
            items: this.props.location.state.items,
            contactName: '',
            phone: '',
            shippingDateStart: '',
            shippingDateEnd: '',
            pickUpAddress: '',
            shippingMethod: '',
            shipping:''
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
        if (name = 'shipping'){
            if(value === 'true'){
                this.setState({
                shipping: true,
                shippingMethod: 'הובלה עצמאית'
                })
            } else {
            this.setState({
            shipping: false,
            shippingMethod: 'ללא הובלה'
            })
        }}
    }

    contactDetails = async e => {
        e.preventDefault();
        const { donorName, logo, items, contactName, phone, shippingDateStart,shippingDateEnd, shippingMethod, pickUpAddress} = this.state;
        setTimeout(() => {
            this.props.history.push({
                pathname: './comments',
                state: {
                    donorName,
                    logo,
                    items,
                    contactName,
                    phone, 
                    shippingDateStart,
                    shippingDateEnd, 
                    shippingMethod, 
                    pickUpAddress
                }
            })
        }, 2000)
    }

    render(){
        //  $_POST['IsMale'] = $_POST['IsMale'] == 'true' ? true : false;
        //YYYY-mm-dd
        //{contactName && phone && shippingDateStart &&}
        // {contactName && phone && shippingDateStart && shippingDateEnd && pickUpAddress &&}
        const {shipping} = this.state;
        return(
            <div className={"container fluid"}>
                <div className={"d-flex justify-content-center text-right flex-column"}>
                    <form>
                        <p>פרטי הובלה</p>
                        <div className={"form-check form-check-inline"}>
                            <label className={"form-check-label"} style={{marginRight: "10px"}}>הובלה עצמאית</label>
                            <input className={"form-check-input"} type={"radio"} onClick={this.handleChange} name={"shipping"} value={"false"}/>
                        </div>
                        <div className={"form-check form-check-inline"}>
                            <label className={"form-check-label"} style={{marginRight: "10px"}}>זקוק להובלה</label>
                            <input className={"form-check-input"} type={"radio"} onClick={this.handleChange} name={"shipping"}  value={"true"}/>
                        </div>
                    </form>
                    <form>
                        {/* {!shipping &&
                            <div>
                            <p>פרטי התקשרות</p>
                            <div>
                                <p>שם איש קשר</p>
                                <input type={"text"}  name={"contactName"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <p>מספר טלפון נייד</p>
                                <input type={"text"} name={"phone"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <p>תאריך</p>
                                <input type={"date"} name={"shippingDateStart"} onChange={this.handleChange} required/>
                            </div>
                            
                            <div>
                                <button type={"submit"} onClick={this.contactDetails}>מאושר, המשך/י</button>
                            </div>
                        </div>
                        } */}
                        {/* {shipping && */}
                        <div>
                          <p>פרטי התקשרות</p>
                            <div>
                                <p>שם איש קשר</p>
                                <input type={"text"}  name={"contactName"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <p>מספר טלפון נייד</p>
                                <input type={"text"} name={"phone"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <p> 1 תאריך</p>
                                <input type={"date"} name={"shippingDateStart"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <p> 2 תאריך</p>
                                <input type={"date"} name={"shippingDateEnd"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <p>כתובת</p>
                                <input type={"text"} name={"pickUpAddress"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <p>הערות</p>
                                <input type={"text"} name={"comments"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <button type={"submit"} onClick={this.contactDetails}>מאושר, המשך/י</button>
                            </div>
                        </div>
                        {/* } */}
                    </form>
                </div>
            </div>
        );
    }
}

export default MainShipping;