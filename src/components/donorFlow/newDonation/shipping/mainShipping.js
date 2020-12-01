import React from 'react';

class MainShipping extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // contact : {
            //     contactName : '',
            //     phone:''
            // }
            name: '',
            phone: '',
            // shippingDateStart: '',
            // shippingDateEnd: '',
            // alternativeShippingDate: '',
            date1: '',
            date2: '',
            // pickUpAddress: '',
            address: '',
            comments:'',
            // shippingMethod: '',
            shipping:'',
            notShipping: '',
            // user : this.props.location.state.user
        }
    }

    handleChangeType = (e) =>{
        e.preventDefault();
        if (e.target.value === 'shipping'){
            this.setState({
                shipping: true,
                notShipping: false
            })
        } else if (e.target.value === 'notshipping'){
            this.setState({
                shipping: false,
                notShipping: true
            })
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
    }

    contactDetails = async e => {
        e.preventDefault();
        const {address} = this.state;
        //const {name, phone, date1, address} = this.state;
        // const user = {name: 'inna', email:'inna@gmail.com', password:'1234'};
        console.log("address", address);
        setTimeout(() => {
            this.props.history.push({
                pathname: './comments',
                // state: {
                //     user: this.state.comments
                // }
            })
        }, 2000)
    }

    render(){
        const {shipping, notShipping, name, phone, date1, date2, address, comments} = this.state;
        console.log('shipping', shipping)
        console.log('notShipping', notShipping)
        console.log('mmname', name);
        console.log('mmphone', name);
        console.log('mmdate1', name);
        return(
            <div className={"container fluid"}>
                <div className={"d-flex justify-content-center text-right flex-column"}>
                    <form>
                        <p>פרטי הובלה</p>
                        <div className={"form-check form-check-inline"}>
                            <label className={"form-check-label"} style={{marginRight: "10px"}}>הובלה עצמאית</label>
                            <input className={"form-check-input"} type={"radio"} onClick={this.handleChangeType} name={"inlineRadioOptions"} value={"notshipping"}/>
                        </div>
                        <div className={"form-check form-check-inline"}>
                            <label className={"form-check-label"} style={{marginRight: "10px"}}>זקוק להובלה</label>
                            <input className={"form-check-input"} type={"radio"} onClick={this.handleChangeType} name={"inlineRadioOptions"}  value={"shipping"}/>
                        </div>
                    </form>
                    <form>
                        {notShipping &&
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
                        }
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
                                <p> 1 תאריך</p>
                                <input type={"date"} name={"date1"} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <p> 2 תאריך</p>
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
                            {name && phone && date1 && date2 && address &&
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

export default MainShipping;