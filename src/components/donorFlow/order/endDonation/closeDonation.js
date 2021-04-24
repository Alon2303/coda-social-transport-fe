import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { addDonationToDB } from '../../../../api/sendDonation';
import next from '../../../../images/donation/next.svg';
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
            shippingComments: this.props.location.state.shippingComments,
            comments: this.props.location.state.comments,
        }
    }

    handleBack = () => {
        const { donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, shippingMethod, pickUpAddress, isSelfShipping, shippingComments, comments } = this.state;
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
                shippingComments,
                comments
            }
        })
    }

    saveDonation = async e => {
        e.preventDefault();
        const { alternativeShippingDate, status, awaitingPayment, paymentStatus, donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, shippingComments, comments } = this.state;
        const contact = { contactName, phone }
        const donation = await addDonationToDB(alternativeShippingDate, status, awaitingPayment, paymentStatus, donorName, logo, items, contact, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, shippingComments, comments);
    };

    renderGrid() {
        const { classes } = this.props;
        return (
            // <React.Fragment>
            //     <Grid item xs={6}>
            //         <Paper className={classes.paper}>

            //         </Paper>
            //     </Grid>
            //     <Grid item xs={6}>
            //         <Paper className={classes.paper}>

            //         </Paper>
            //     </Grid>
            <button> CVDSW ESF </button >
            // </React.Fragment>
        );
    }

    render() {
        const { classes } = this.props;
        const { items } = this.state;
        console.log(' props : ', this.props);
        return (
            <div className="donation-summary">
                <Typography variant="h2">ההובלה שלך</Typography>
                <Typography variant="h4">{this.state.shippingDateStart}</Typography>
                <Typography variant="h4">{this.state.contactName} + {this.state.phone} </Typography>
                <Typography>{this.state.comments}</Typography>

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

export default withStyles(styles)(CloseDonation);