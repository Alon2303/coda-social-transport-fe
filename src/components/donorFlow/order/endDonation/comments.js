import React from 'react';
import { connect } from 'react-redux';

// Services
import { setNewDonation } from '../../../../store/actions/donationActions';


import next from '../../../../images/donation/next.svg';
import back from '../../../../images/donation/back.svg';
import { TextField, Typography } from '@material-ui/core';
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
            comments: this.props.donation.comments,
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
        this.props.history.push({
            pathname: './mainshipping',
        });
    }

    goToNextPage = () => {
        const { donation } = this.props;
        const { comments } = this.state;

        donation.comments = comments;
        this.props.setNewDonation(donation);
        this.props.history.push({ pathname: './closedonation' })
    };

    render() {
        const { classes } = this.props;
        const { comments } = this.state;

        return (
            <form className="donation-comments" onSubmit={this.handleSubmit}>
                <Typography>

                    <p>ולפני סיום...</p>
                    <p>זה המקום להוסיף שעות נוחות לאיסוף ההובלה,</p>
                    <p>העדפה לעמותה או ארגון אליו הפריטים שלך יועברו,</p>
                    <p>או כל דבר שנראה לך חשוב</p>
                    {/* <textarea className={"form-control"} aria-label={"With textarea"} type={"text"} name={"comments"} onChange={this.handleChange} /> */}

                    <TextField id="standard-basic" multiline type={"text"} name={"comments"}
                        onChange={this.handleChange} InputProps={{ classes: { underline: classes.underline } }} value={comments} />
                    {/* <button type={"submit"} onClick={this.signupProcess}>סיום הזמנה</button> */}
                </Typography>

                <footer className="flex shipping-footer">
                    <Typography>
                        <img src={back} alt="go back" />
                        <button className="shipping-form-submit footer-selected-button" type={"submit"} onClick={this.handleBack}>הקודם</button>
                    </Typography>
                    <Typography>
                        <button className="footer-selected-button shipping-form-submit" type={"submit"} onClick={this.goToNextPage}>הבא</button>
                        <img src={next} alt="next page" />
                    </Typography>
                </footer>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('PROPS IN COMMENTS : ', state.donation.currDonation);
    return {
        donation: state.donation.currDonation,
    };
};

const mapDispatchToProps = {
    setNewDonation
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Comments)
)