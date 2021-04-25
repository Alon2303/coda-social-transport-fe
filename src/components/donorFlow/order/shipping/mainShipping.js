import React from 'react';
import { connect } from 'react-redux';

// Services
import { setNewDonation } from '../../../../store/actions/donationActions';


import { Switch, TextField, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import footerLogo from '../../../../images/donation/logo-green-black-and-yellow.svg';
import next from '../../../../images/donation/next.svg';
import nextDisabled from '../../../../images/donation/nextDisabled.svg';
import back from '../../../../images/donation/back.svg';

const styles = theme => ({
    toggle: {
        '& .Mui-checked': {
            color: '#88AD3F',
        },
        '& .MuiSwitch-colorPrimary.Mui-checked': {
            color: '#88AD3F',
        }
    },
    line: {
        ' & > *': {
            margin: theme.spacing(1),
            width: '259px',
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
    formInput: {
        color: '#FFFFFF',
        marginBottom: '16px',

        ' & > *': {
            color: '#FFFFFF',
            direction: 'rtl'
        }
    },
    narrow: {
        ' & > *': {
            margin: theme.spacing(1),
            width: '92px',
            marginRight: '0',
        }
    }
});

class MainShipping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactName: this.props.donation.contact.contactName,
            phone: this.props.donation.contact.phone,
            shippingDateStart: this.props.donation.shippingDateStart,
            shippingDateEnd: this.props.donation.shippingDateEnd,
            pickUpAddress: this.props.donation.pickUpAddress,
            shippingMethod: this.props.donation.shippingMethod,
            isSelfShipping: this.props.donation.isSelfShipping,
            shippingComments: this.props.donation.shippingComments,
        }
    }

    handleShippingMethodChange = (e) => {
        var selfShipping = 'הובלה עצמאית';
        var externalShipping = 'זקוק להובלה';
        this.setState({
            ...this.state,
            isSelfShipping: e.target.checked,
            shippingMethod: (e.target.checked) ? selfShipping : externalShipping
        });
        console.log("on change -state: ", this.state);
    };

    handleChange = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
        // console.log("on change -state: ", this.state);
    }

    handleBack = () => {
        this.props.history.push({ pathname: './donoritems' });
    }

    saveShippingDetails = async e => {
        e.preventDefault();
        const { donation } = this.props;
        const { contactName, phone, shippingDateStart, shippingDateEnd, shippingMethod, pickUpAddress, isSelfShipping, shippingComments, comments } = this.state;

        donation.shippingDateStart = shippingDateStart;
        donation.shippingMethod = shippingMethod;
        donation.shippingComments = shippingComments;
        donation.contact.contactName = contactName;
        donation.contact.phone = phone;

        if (!isSelfShipping) {
            donation.shippingDateEnd = shippingDateEnd;
        }

        this.props.setNewDonation(donation);
        this.props.history.push({ pathname: './comments' })
    }

    render() {
        const { classes } = this.props;
        const { isSelfShipping, shippingDateStart, shippingDateEnd, contactName, phone, pickUpAddress, shippingComments } = this.state;
        return (
            <div className={"shipping-request"}>

                <form className={"shipping-form"}>
                    <div>
                        <Typography className={(isSelfShipping) ? 'selected-shipping' : 'unselected-shipping'}>ההובלה עליי</Typography>
                        <Switch
                            checked={isSelfShipping}
                            onChange={this.handleShippingMethodChange}
                            name="isSelfShipping"
                            color="default"
                            className={classes.toggle}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <Typography className={(isSelfShipping) ? 'unselected-shipping' : 'selected-shipping'}>אשמח שתובילו</Typography>
                    </div>
                </form>

                <form className={classes.line} noValidate autoComplete="off" >
                    {isSelfShipping ?
                        <div>
                            <p className="form-titles">תאריך</p>
                            <TextField id="standard-basic" type={"date"} name={"shippingDateStart"} onChange={this.handleChange} required className={classes.formInput}
                                InputProps={{ classes: { underline: classes.underline } }} value={(shippingDateStart) ? shippingDateStart : ''} />

                            <p className="form-titles">עם מי לדבר?</p>
                            <TextField id="standard-basic" type={"text"} name={"contactName"} onChange={this.handleChange} required className={classes.formInput}
                                InputProps={{ classes: { underline: classes.underline } }} value={(contactName) ? contactName : ''} />

                            <p className="form-titles">טלפון</p>
                            <TextField id="standard-basic" type={"text"} name={"phone"} onChange={this.handleChange} required className={classes.formInput}
                                InputProps={{ classes: { underline: classes.underline } }} value={(phone) ? phone : ''} />

                            <p className="form-titles">זה המקום לכתוב העדפה לארגון אליו הפריטים יועברו או כל דבר אחר שנראה לך חשוב</p>
                            <TextField id="standard-basic" type={"text"} name={"shippingComments"} onChange={this.handleChange} className={classes.formInput}
                                InputProps={{ classes: { underline: classes.underline } }} value={(shippingComments) ? shippingComments : ''} />

                            <div className="shipping-address flex">
                                <div>
                                    <p>מחסני שינוע חברתי</p>
                                    <p>שלונסקי 33, גבעתיים</p>
                                </div>
                                <img src={footerLogo} alt="logo" />
                            </div>

                        </div>
                        :
                        <div>

                            <p className="form-titles">תאריכים אפשריים להובלה</p>
                            <div className="flex">
                                <div className={classes.narrow}>

                                    <p className="form-titles">מתאריך</p>
                                    <TextField id="standard-basic" type={"date"} name={"shippingDateStart"} onChange={this.handleChange} required className={classes.narrow, classes.formInput}
                                        InputProps={{ classes: { underline: classes.underline } }} value={(shippingDateStart) ? shippingDateStart : ''} />
                                </div>
                                <div className={classes.narrow}>

                                    <p className="form-titles">עד תאריך</p>
                                    <TextField id="standard-basic" type={"date"} name={"shippingDateEnd"} onChange={this.handleChange} required className={classes.narrow, classes.formInput}
                                        InputProps={{ classes: { underline: classes.underline } }} value={(shippingDateEnd) ? shippingDateEnd : ''} />
                                </div>
                            </div>

                            <p className="form-titles">עם מי לדבר?</p>
                            <TextField id="standard-basic" type={"text"} name={"contactName"} onChange={this.handleChange} required className={classes.formInput}
                                InputProps={{ classes: { underline: classes.underline } }} value={(contactName) ? contactName : ''} />

                            <p className="form-titles">טלפון</p>
                            <TextField id="standard-basic" type={"text"} name={"phone"} onChange={this.handleChange} required className={classes.formInput}
                                InputProps={{ classes: { underline: classes.underline } }} value={(phone) ? phone : ''} />

                            <p className="form-titles">כתובת</p>
                            <TextField id="standard-basic" type={"text"} name={"pickUpAddress"} onChange={this.handleChange} required className={classes.formInput}
                                InputProps={{ classes: { underline: classes.underline } }} value={(pickUpAddress) ? pickUpAddress : ''} />


                            <p className="form-titles">תמיד טוב לדעת אם יש חנייה, מעלית או דברים נוספים שיכולים להקל עלינו</p>
                            <TextField id="standard-basic" type={"text"} name={"shippingComments"} onChange={this.handleChange} className={classes.formInput}
                                InputProps={{ classes: { underline: classes.underline } }} value={(shippingComments) ? shippingComments : ''} />
                        </div>
                    }

                    <footer className="flex shipping-footer">
                        <Typography>
                            <img src={back} alt="go back" />
                            <button className="shipping-form-submit footer-selected-button" type={"submit"} onClick={this.handleBack}>הקודם</button>
                        </Typography>
                        {isSelfShipping ?
                            <Typography >
                                <button className={
                                    (shippingDateStart && contactName && phone) ? "footer-selected-button shipping-form-submit" : "footer-unselected-button shipping-form-submit"} type={"submit"} onClick={this.saveShippingDetails}>הבא</button>
                                <img src={(shippingDateStart && contactName && phone) ?
                                    next : nextDisabled} alt="next page" />
                            </Typography>
                            :
                            <Typography>
                                <button className={
                                    (shippingDateStart && shippingDateEnd && contactName && phone && pickUpAddress) ?
                                        "footer-selected-button shipping-form-submit" : "footer-unselected-button shipping-form-submit"} type={"submit"} onClick={this.saveShippingDetails}>הבא</button>
                                <img src={(shippingDateStart && shippingDateEnd && contactName && phone && pickUpAddress) ?
                                    next : nextDisabled} alt="next page" />
                            </Typography>
                        }
                    </footer>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('PROPS IN MAIN SHIPPING : ', state.donation.currDonation);
    return {
        donation: state.donation.currDonation,
    };
};

const mapDispatchToProps = {
    setNewDonation
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(MainShipping)
)