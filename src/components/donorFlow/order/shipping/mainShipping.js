import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from "@material-ui/core/styles";
import lightGreen from '@material-ui/core/colors/lightGreen';

class MainShipping extends React.Component {
    constructor(props) {
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
            shippingMethod: 'הובלה עצמאית',
            isSelfShipping: true,
        }
    }

    handleChange = (event) => {
        var a = "הובלה עצמאית";
        var b = "זקוק להובלה";
        this.setState({
            ...this.state,
            isSelfShipping: event.target.checked,
            shippingMethod: (event.target.checked) ? a : b
        });
    };

    contactDetails = async e => {
        e.preventDefault();
        const { donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, shippingMethod, pickUpAddress } = this.state;
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

    render() {
        const { shipping } = this.state;
        return (
            <div className={"shipping-request"}>
                {/* <div className={"d-flex justify-content-center text-right flex-column"}> */}

                <form className={"shipping-form"}>
                    <h2>הובלת ציוד למחסני שינוע חברתי</h2>

                    <div>
                        <p>ההובלה עליי</p>
                        <Switch
                            checked={this.state.isSelfShipping}
                            onChange={this.handleChange}
                            name="isSelfShipping"
                            color="secondary"
                            // color="#88AD3F"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <p>אשמח שתובילו</p>
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
                            <input type={"text"} name={"contactName"} onChange={this.handleChange} required />
                        </div>
                        <div>
                            <p>מספר טלפון נייד</p>
                            <input type={"text"} name={"phone"} onChange={this.handleChange} required />
                        </div>
                        <div>
                            <p> 1 תאריך</p>
                            <input type={"date"} name={"shippingDateStart"} onChange={this.handleChange} required />
                        </div>
                        <div>
                            <p> 2 תאריך</p>
                            <input type={"date"} name={"shippingDateEnd"} onChange={this.handleChange} required />
                        </div>
                        <div>
                            <p>כתובת</p>
                            <input type={"text"} name={"pickUpAddress"} onChange={this.handleChange} required />
                        </div>
                        <div>
                            <p>הערות</p>
                            <input type={"text"} name={"comments"} onChange={this.handleChange} required />
                        </div>
                        <div>
                            <button type={"submit"} onClick={this.contactDetails}>מאושר, המשך/י</button>
                        </div>
                    </div>
                    {/* } */}
                </form>
            </div>
        );
    }
}

export default MainShipping;