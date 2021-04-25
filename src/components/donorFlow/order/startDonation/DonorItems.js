import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from "@material-ui/core/styles";
import { Fab, Paper, Grid, Typography, withMobileDialog } from '@material-ui/core';
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
        // whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        height: '198px',
        width: '146px',
        borderRadius: '26px',
        backgroundColor: '#4b5d50',
        marginRight: '15px',
        display: 'grid'
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

    addNewItem = () => {
        const { donation } = this.props;
        let currentItem = (!donation.items.length) ? 1 : donation.items.length + 1;
        this.props.history.push({
            pathname: './newitem',
            state: {
                currentItem,
                images: [],
                imgCounter: 0,
            }
        })
    };

    goToNextPage = () => {
        if (this.props.donation.items.length === 0) return;
        this.props.history.push({ pathname: './mainshipping' })
    }

    render() {
        const { classes, donation } = this.props;
        console.log('items: ', donation.items);
        console.log('items.length: ', donation.items.length);

        return (
            <div className="donor-items">
                <div className={classes.container}>
                    <Paper className={classes.addItemPaper}>
                        <Typography>
                            הוספת פריט {donation.items.length + 1}
                        </Typography>
                        <Fab className={classes.fav} aria-label="add" onClick={this.addNewItem}>
                            <AddIcon />
                        </Fab>
                    </Paper>

                    <Paper className={classes.paper}>
                        {donation.items[0] ?
                            <div>
                                <Typography>
                                    {donation.items[0].count + ` פריט 1 | יחידות`}
                                </Typography>
                                <img src={donation.items[0].images[0]} alt="img" />
                            </div>
                            : ''}
                    </Paper>

                    <Paper className={classes.paper}>
                        {donation.items[1] ?
                            <div>
                                <Typography>
                                    {donation.items[1].count + ` פריט 2 | יחידות`}
                                </Typography>
                                <img src={donation.items[1].images[0]} alt="img" />
                            </div>
                            : ''}
                    </Paper>

                </div>

                <div className={classes.container}>
                    <Paper className={classes.paper}>
                        {donation.items[2] ?
                            donation.items[2].count + ` פריט 3 | יחידות`
                            : ''}
                    </Paper>

                    <Paper className={classes.paper}>
                        {donation.items[3] ?
                            donation.items[3].count + ` פריט 4 | יחידות`
                            : ''}
                    </Paper>
                    <Paper className={classes.paper}>
                        {donation.items[4] ?
                            donation.items[4].count + ` פריט 5 | יחידות`
                            : ''}
                    </Paper>
                </div>

                <footer className="shipping-footer">
                    <Typography className="donor-item-footer">
                        <button className={
                            (donation.items.length > 0) ? "footer-selected-button shipping-form-submit" : "footer-unselected-button shipping-form-submit"} type={"submit"}
                            onClick={this.goToNextPage}>
                            הבא
                        </button>
                        <img src={(donation.items.length > 0) ? next : nextDisabled} alt="next page" />
                    </Typography>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('PROPS IN DONOR ITEMS : ', state.donation.currDonation);
    return {
        donation: state.donation.currDonation,
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, null)(DonorItems)
)