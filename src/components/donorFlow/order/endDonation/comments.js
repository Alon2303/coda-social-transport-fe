import React from 'react';

import next from '../../../../images/donation/next.svg';
import back from '../../../../images/donation/back.svg';
import { TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


const styles = () => ({
    underline: {
        marginTop: '32px',
        marginBottom: '167px',
        color: '#ffffff',
        fontFamily: 'RubikRegular sans-serif',

        '&:before': {
            borderBottomColor: '#56735E',
        },
        '&:after': {
            borderBottomColor: '#56735E',
        },
        '&:hover:before': {
            borderBottomColor: ['#56735E', '!important'],
        },
    },
});

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            shippingComments: this.props.location.state.shippingComments,
            comments: this.props.location.state.comments,
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        this.setState({
            [name]: value.toLowerCase(),
        });
    };

    handleBack = () => {
        const { donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, shippingMethod, pickUpAddress, isSelfShipping, shippingComments, comments } = this.state;
        this.props.history.push({
            pathname: './mainshipping',
            state: {
                donorName,
                logo,
                items,
                contactName,
                phone,
                shippingDateStart,
                shippingDateEnd,
                shippingMethod,
                pickUpAddress,
                isSelfShipping,
                shippingComments,
                comments
            }
        });
    }

    goToNextPage = () => {
        const { alternativeShippingDate, status, awaitingPayment, paymentStatus, donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, isSelfShipping, shippingComments, comments } = this.state;

        this.props.history.push({
            pathname: './closedonation',
            state: {
                donorName,
                logo,
                items,
                contactName,
                phone,
                shippingDateStart,
                shippingDateEnd,
                shippingMethod,
                pickUpAddress,
                isSelfShipping,
                shippingComments,
                comments
            }
        })
    };

    render() {
        //const {comments, contactName, shippingDateStart,contact} = this.state;
        const { classes } = this.props;
        const { comments } = this.state;

        return (
            <form className="donation-comments" onSubmit={this.handleSubmit}>
                <p>ולפני סיום...</p>
                <p>זה המקום להוסיף שעות נוחות לאיסוף ההובלה,</p>
                <p>העדפה לעמותה או ארגון אליו הפריטים שלך יועברו,</p>
                <p>או כל דבר שנראה לך חשוב</p>
                {/* <textarea className={"form-control"} aria-label={"With textarea"} type={"text"} name={"comments"} onChange={this.handleChange} /> */}

                <TextField id="standard-basic" multiline type={"text"} name={"comments"}
                    onChange={this.handleChange} InputProps={{ classes: { underline: classes.underline } }} value={comments} />
                {/* <button type={"submit"} onClick={this.signupProcess}>סיום הזמנה</button> */}

                <footer className="flex shipping-footer">
                    <div>
                        <img src={back} alt="go back" />
                        <button className="shipping-form-submit footer-selected-button" type={"submit"} onClick={this.handleBack}>הקודם</button>
                    </div>
                    <div>
                        <button className="footer-selected-button shipping-form-submit" type={"submit"} onClick={this.goToNextPage}>הבא</button>
                        <img src={next} alt="next page" />
                    </div>
                </footer>
            </form>
        )
    }
}

export default withStyles(styles)(Comments);