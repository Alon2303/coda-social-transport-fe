import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Fab, Paper, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import next from '../../../../images/donation/next.svg';
import nextDisabled from '../../../../images/donation/nextDisabled.svg';

const styles = theme => ({
    fav: {
        backgroundColor: '#3A4F40',
        color: '#FFFFFF',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    container: {
        display: 'flex',
        width: '120vw',
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


class DonorItems extends React.Component {
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
    addNewItem = () => {
        const { donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, isSelfShipping, shippingComments, comments } = this.state;
        let currentItem = (!items.length) ? 1 : items.length + 1;
        this.props.history.push({
            pathname: './newitem',
            state: {
                donorName,
                logo,
                items,
                currentItem,
                images: [],
                imgCounter: 0,
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
    };

    goToNextPage = () => {
        const { donorName, logo, items, contactName, phone, shippingDateStart, shippingDateEnd, shippingMethod, pickUpAddress, isSelfShipping, shippingComments, comments } = this.state;
        if (this.state.items.length === 0) return;
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
        })
    }

    render() {
        const { classes } = this.props;
        const { items } = this.state;
        console.log('items: ', items);
        console.log('items.length: ', items.length);

        return (
            <div className="donor-items">
                <div className={classes.container}>
                    <Paper className={classes.addItemPaper}>
                        <p>הוספת פריט {items.length + 1}</p>
                        <Fab className={classes.fav} aria-label="add" onClick={this.addNewItem}>
                            <AddIcon />
                        </Fab>
                    </Paper>

                    <Paper className={classes.paper}>

                    </Paper>
                    <Paper className={classes.paper}>

                    </Paper>
                </div>
                <div className={classes.container}>
                    <Paper className={classes.paper}>

                    </Paper>

                    <Paper className={classes.paper}>

                    </Paper>
                    <Paper className={classes.paper}>

                    </Paper>
                </div>

                <footer className="shipping-footer">
                    <div className="donor-item-footer">
                        <button className={
                            (items.length > 0) ? "footer-selected-button shipping-form-submit" : "footer-unselected-button shipping-form-submit"} type={"submit"}
                            onClick={this.goToNextPage}>הבא</button>
                        <img src={(items.length > 0) ? next : nextDisabled} alt="next page" />
                    </div>
                </footer>
            </div>
        )
    }
}

export default withStyles(styles)(DonorItems);