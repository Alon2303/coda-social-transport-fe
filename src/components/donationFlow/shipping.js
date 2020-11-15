import React from 'react';

class Shipping extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            date1: '',
            date2: '',
            address: '',
            comments:'',
            shipping:'',
            notShipping: '',
            // user : this.props.location.state.user
        }
    }

    handleChange = (e) =>{
        // e.preventDefualt();
        if (e.target.value === 'shipping'){
            this.setState({
                shipping: true,
                notShipping: false
            })
        } else {
            this.setState({
                shipping: false,
                notShipping: true
            })
        }
        console.log('e name', e.target.name);
        console.log('e value', e.target.value);
    }


    contactDetails = async e => {
        e.preventDefault();
        const {name, phone, date1, address} = this.state;
        // const user = {name: 'inna', email:'inna@gmail.com', password:'1234'};
        console.log("address", address);
    }

    render(){
        const {shipping, notShipping, name, phone, date1, address} = this.state;
        console.log('shipping', shipping)
        console.log('notShipping', notShipping)

        return(
            <div className={"container fluid"}>
                <div className={"d-flex justify-content-center text-right flex-column"}>
                    <form>
                        <p>פרטי הובלה</p>
                        <div className={"form-check form-check-inline"}>
                            <label className={"form-check-label"} style={{marginRight: "10px"}}>הובלה עצמאית</label>
                            <input className={"form-check-input"} type={"radio"} onClick={this.handleChange} name={"inlineRadioOptions"} value={"notShipping"}/>
                        </div>
                        <div className={"form-check form-check-inline"}>
                            <label className={"form-check-label"} style={{marginRight: "10px"}}>זקוק להובלה</label>
                            <input className={"form-check-input"} type={"radio"} onClick={this.handleChange} name={"inlineRadioOptions"}  value={"shipping"}/>
                        </div>
                    </form>
                    <form>
                        {/* {notShipping &&
                        <div>
                            <p>פרטי התקשרות</p>
                            <div>
                                <p>שם איש קשר</p>
                                <input type={"text"}  name={"name"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <p>מספר טלפון נייד</p>
                                <input type={"text"} name={"phone"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <p>תאריך</p>
                                <input type={"date"} name={"date1"} onChange={this.handleChange} required/>
                            </div>
                            {name && phone && date1 &&
                            <div>
                                <button type={"submit"} onClick={this.contactDetails}>מאושר, המשך/י</button>
                            </div>
                            }
                        </div>
                        } */}
                        {shipping &&
                        <div>
                        <p>פרטי התקשרות</p>
                        <div>
                            <p>שם איש קשר</p>
                            <input type={"text"}  name={"name"} onChange={this.handleChange} required/>
                        </div>
                        <div>
                            <p>מספר טלפון נייד</p>
                            <input type={"text"} name={"phone"} onChange={this.handleChange} required/>
                        </div>
                        <div>
                            <p>תאריך</p>
                            <input type={"date"} name={"date1"} onChange={this.handleChange} required/>
                            <input type={"date"} name={"date2"} onChange={this.handleChange} required/>
                        </div>
                        <div>
                            <p>כתובת</p>
                            <input type={"text"} name={"address"} onChange={this.handleChange} required/>
                        </div>
                        <div>
                            <p>הערות</p>
                            <input type={"text"} name={"comments"} onChange={this.handleChange} required/>
                        </div>
                        {name && phone && date1 && address &&
                        <div>
                            <button type={"submit"} onClick={this.contactDetails}>מאושר, המשך/י</button>
                        </div>
                        }
                    </div>
                        }
                    </form>
                </div>
            </div>
        );
    }
}

export default Shipping;