import React from 'react';
import { connect } from 'react-redux';

// Services
import { setNewDonation } from '../../../../store/actions/donationActions';

import { Paper, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { addDonationToDB } from '../../../../api/sendDonation';
import back from '../../../../images/donation/back.svg';
import createDonation from '../../../../images/donation/createDonation.png';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        height: '198px',
        width: '146px',
        borderRadius: '26px',
        backgroundColor: '#4b5d50',
        marginRight: '15px'
    },
    addItemPaper: {
        backgroundColor: '#ADD2DC',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        height: '198px',
        width: '146px',
        borderRadius: '26px',
        marginRight: '15px'
    }
});

class CloseDonation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donorName: this.props.donation.donorName,
            items: this.props.donation.items,
            contactName: this.props.donation.contact.contactName,
            phone: this.props.donation.contact.phone,
            shippingDateStart: this.props.donation.shippingDateStart,
            shippingDateEnd: this.props.donation.shippingDateEnd,
            comments: this.props.donation.comments,
        }
    }

    handleBack = () => {
        this.props.history.push({ pathname: './comments' })
    }

    saveDonation = async e => {
        e.preventDefault();
        const { contact, alternativeShippingDate, status, awaitingPayment, paymentStatus, donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, shippingComments, comments } = this.props.donation;
        const donation = await addDonationToDB(alternativeShippingDate, status, awaitingPayment, paymentStatus, donorName, logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, shippingComments, comments);
    };

    render() {
        const { classes, donation } = this.props;
        const { items, comments } = this.state;
        console.log(' props : ', this.props);
        return (
            <div className="donation-summary">
                <Typography variant="h2" style={{ marginBottom: '6px' }}>פרטי ההובלה</Typography>
                <Typography variant="h4" style={{ marginBottom: '4px' }}>{donation.shippingDateStart}</Typography>
                <Typography variant="h4" style={{ marginBottom: '8px' }}>  {donation.contact.contactName} {donation.contact.phone}</Typography>
                <Typography style={{ marginBottom: '36px' }}>{comments}</Typography>

                <div className={classes.root}>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                    >
                        {items.map((item) => (
                            <Grid item xs={6} key={items.indexOf(item)}>
                                <Paper className={classes.paper} >
                                    <Typography>
                                        {`פריט ${items.indexOf(item) + 1} | ${item.count} יח' `}
                                    </Typography>
                                    <img src={item.images[0]} alt="img" />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                </div>

                <footer className="flex shipping-footer">
                    <Typography>
                        <img src={back} alt="go back" />
                        <button className="shipping-form-submit footer-selected-button" type={"submit"} onClick={this.handleBack}>הקודם</button>
                    </Typography>
                    <div>
                        <button className="save-donation-round-btn" type={"submit"} onClick={this.saveDonation}>
                            <img src={createDonation} alt="Create donation" />
                        </button>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('PROPS IN CLOSE DONATION : ', state.donation.currDonation);
    return {
        donation: state.donation.currDonation,
    };
};

const mapDispatchToProps = {
    setNewDonation
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(CloseDonation)
)