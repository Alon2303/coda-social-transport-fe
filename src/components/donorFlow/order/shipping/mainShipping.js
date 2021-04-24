import React from 'react';
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
        const { donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, isSelfShipping, shippingComments, comments } = this.state;
        this.props.history.push({
            pathname: './donoritems',
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
                shippingComments,
                comments

            }
        });
    }

    contactDetails = async e => {
        e.preventDefault();
        const { donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, shippingMethod, pickUpAddress, isSelfShipping, shippingComments, comments } = this.state;
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
                    pickUpAddress,
                    isSelfShipping,
                    shippingComments,
                    comments
                }
            })
        }, 2000)
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
                            checked={this.state.isSelfShipping}
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
                                    (shippingDateStart && contactName && phone) ? "footer-selected-button shipping-form-submit" : "footer-unselected-button shipping-form-submit"} type={"submit"} onClick={this.contactDetails}>הבא</button>
                                <img src={(shippingDateStart && contactName && phone) ? next : nextDisabled} alt="next page" />
                            </Typography>
                            :
                            <Typography>
                                <button className={
                                    (shippingDateStart && shippingDateEnd && contactName && phone && pickUpAddress) ? "footer-selected-button shipping-form-submit" : "footer-unselected-button shipping-form-submit"} type={"submit"} onClick={this.contactDetails}>הבא</button>
                                <img src={(shippingDateStart && shippingDateEnd && contactName && phone && pickUpAddress) ? next : nextDisabled} alt="next page" />
                            </Typography>
                        }
                    </footer>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(MainShipping);