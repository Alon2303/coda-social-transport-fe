import React from 'react';
import { addDonationToDB } from '../../../../api/sendDonation';
import next from '../../../../images/donation/next.svg';
import back from '../../../../images/donation/back.svg';

class CloseDonation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alternativeShippingDate: null,
            status: 'חדש',
            awaitingPayment: null,
            paymentStatus: null,
            donorName: this.props.location.state.donorName,
            logo: this.props.location.state.logo,
            items: this.props.location.state.items,
            contactName: this.props.location.state.contactName,
            phone: this.props.location.state.phone,
            shippingDateStart: this.props.location.state.shippingDateStart,
            shippingDateEnd: this.props.location.state.shippingDateEnd,
            pickUpAddress: this.props.location.state.pickUpAddress,
            shippingMethod: this.props.location.state.shippingMethod,
            isSelfShipping: this.props.location.state.isSelfShipping,
            comments: this.props.location.state.comments,
        }
    }

    handleBack = () => {
        const { donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, shippingMethod, pickUpAddress, isSelfShipping, comments } = this.state;
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
                pickUpAddress,
                shippingMethod,
                isSelfShipping,
                comments
            }
        })
    }

    saveDonation = async e => {
        e.preventDefault();
        const { alternativeShippingDate, status, awaitingPayment, paymentStatus, donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, comments } = this.state;
        const contact = { contactName, phone }
        console.log("saving contact : ", contact);
        const donation = await addDonationToDB(alternativeShippingDate, status, awaitingPayment, paymentStatus, donorName, logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, comments);
        console.log("donation", donation);
    };

    render() {
        console.log(' props : ', this.props);
        return (
            <div className="donation-summary">
                <h2>פרטי ההובלה</h2>
                <h4>{this.state.shippingDateStart}</h4>
                <h3>{this.state.contactName} + {this.state.phone} </h3>
                <p>{this.state.comments}</p>

                <footer className="flex shipping-footer">
                    <div>
                        <img src={back} alt="go back" />
                        <button className="shipping-form-submit footer-selected-button" type={"submit"} onClick={this.handleBack}>הקודם</button>
                    </div>
                    <div>
                        <button className="footer-selected-button shipping-form-submit" type={"submit"} onClick={this.saveDonation}>הבא</button>
                        <img src={next} alt="next page" />
                    </div>
                </footer>
            </div>
        )
    }
}

export default CloseDonation;