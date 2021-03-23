import React from 'react';
import { addDonationToDB } from '../../../../api/sendDonation';
import next from '../../../../images/donation/next.svg';
import back from '../../../../images/donation/back.svg';
import { TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    amountInput: {
        '& > *': {
            margin: theme.spacing(1),
            width: '55px',
            heigth: '16px',
            borderRadius: '26px',
            padding: '0px'
        },
    },
    line: {
        ' & > *': {
            margin: theme.spacing(1),
            width: '259px',
        },
        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
        }
    },
    underline: {
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
            alternativeShippingDate: null,
            status: 'חדש',
            awaitingPaymeny: null,
            paymentStatus: null,
            donorName: this.props.location.state.donorName,
            logo: this.props.location.state.logo,
            items: this.props.location.state.items,
            contact: {
                contactName: this.props.location.state.contactName,
                phone: this.props.location.state.phone
            },
            shippingDateStart: this.props.location.state.shippingDateStart,
            shippingDateEnd: this.props.location.state.shippingDateEnd,
            pickUpAddress: this.props.location.state.pickUpAddress,
            shippingMethod: this.props.location.state.shippingMethod,
            comments: ''
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
        // TODO: go back to previous page
    }

    signupProcess = async e => {
        e.preventDefault();
        const { alternativeShippingDate, status, awaitingPaymeny, paymentStatus, donorName, logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, comments } = this.state;
        const donation = await addDonationToDB(alternativeShippingDate, status, awaitingPaymeny, paymentStatus, donorName, logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, comments);
        console.log("donation", donation);
        setTimeout(() => {
            this.props.history.push({
                pathname: './closedonation',
            })
        }, 2000)
    };

    render() {
        //const {comments, contactName, shippingDateStart,contact} = this.state;
        const { classes } = this.props;

        return (
            <form className="donation-comments" onSubmit={this.handleSubmit}>
                <p>ולפני סיום...</p>
                <p>זה המקום להוסיף שעות נוחות לאיסוף ההובלה,</p>
                <p>העדפה לעמותה או ארגון אליו הפריטים שלך יועברו,</p>
                <p>או כל דבר שנראה לך חשוב</p>
                {/* <textarea className={"form-control"} aria-label={"With textarea"} type={"text"} name={"comments"} onChange={this.handleChange} /> */}

                <TextField id="standard-basic" multiline type={"text"} name={"comments"}
                    onChange={this.handleChange} InputProps={{ classes: { underline: classes.underline } }} />
                {/* <button type={"submit"} onClick={this.signupProcess}>סיום הזמנה</button> */}

                <footer className="flex shipping-footer">
                    <div>
                        <img src={back} alt="go back" />
                        <button className="shipping-form-submit footer-selected-button" type={"submit"} onClick={this.handleBack}>הקודם</button>
                    </div>
                    <div>
                        <button className="footer-selected-button shipping-form-submit" type={"submit"} onClick={this.signupProcess}>הבא</button>
                        <img src={next} alt="next page" />
                    </div>
                </footer>
            </form>
        )
    }
}

export default withStyles(styles)(Comments);