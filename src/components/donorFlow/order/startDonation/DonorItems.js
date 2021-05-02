import React from 'react';
import { connect } from 'react-redux';

// Services
import { setNewDonation } from '../../../../store/actions/donationActions';

import { withStyles } from "@material-ui/core/styles";
import { Fab, Paper, Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import next from '../../../../images/donation/next.svg';
import nextDisabled from '../../../../images/donation/nextDisabled.svg';
import ic_delete_top from '../../../../images/donation/ic_delete_top.svg';
import ic_delete_bottom from '../../../../images/donation/ic_delete_bottom.svg';

const styles = theme => ({
    fav: {
        backgroundColor: '#3A4F40',
        marginTop: '60px',
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
        color: '#FFFFFF',
        backgroundColor: '#4b5d50',
        marginRight: '15px',
        display: 'grid',
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
    },
    font12px: {
        fontSize: '12px'
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

    removeItem = (idx) => {
        const { donation } = this.props;
        const donationCopy = JSON.parse(JSON.stringify(donation));

        console.log(donation.items, 'before splice')
        donationCopy.items.splice(idx, 1);
        console.log(donation.items, 'after splice')
        this.props.setNewDonation(donationCopy);
    }

    goToNextPage = () => {
        if (this.props.donation.items.length === 0) return;
        this.props.history.push({ pathname: './mainshipping' })
    }

    emptyGridItems = () => {
        const { classes, donation } = this.props;
        const emptyElements = [];
        console.log(" donation.items.length___ ", donation.items.length);
        for (let i = (donation.items.length) ? donation.items.length + 1 : 1; i < 6; i++) {
            console.log(" ___ ", i);
            emptyElements.push(
                <Grid item xs={4} key={i}>
                    <Paper className={classes.paper}></Paper>
                </Grid>);

        }
        return emptyElements;
    }

    render() {
        const { classes, donation } = this.props;
        const { items } = donation;
        console.log('items: ', donation.items);
        console.log('items.length: ', donation.items.length);

        return (
            <div className="donor-items">
                <div className={classes.container}>
                    {/* <Paper className={classes.addItemPaper}>
                        <Typography className={classes.font12px}>
                            הוספת פריט {donation.items.length + 1}
                        </Typography>
                        <Fab className={classes.fav} aria-label="add" onClick={this.addNewItem}>
                            <AddIcon />
                        </Fab>
                    </Paper> */}

                    <div className={classes.root}>
                        <Grid
                            container
                            spacing={2}
                            direction="row"
                        >
                            <Grid item xs={4} key={-1}>
                                <Paper className={classes.addItemPaper}>
                                    <Typography className={classes.font12px}>
                                        הוספת פריט {donation.items.length + 1}
                                    </Typography>
                                    <Fab className={classes.fav} aria-label="add" onClick={this.addNewItem}>
                                        <AddIcon />
                                    </Fab>
                                </Paper>
                            </Grid>
                            {items.map((item, i) => (
                                <Grid item xs={4} key={i}>
                                    <Paper className={classes.paper}  >
                                        <div className="item-card-header" >
                                            <div className="remove-item-icon" onClick={() => this.removeItem(i)}>
                                                <img src={ic_delete_top} alt="Remove item" />
                                                <img src={ic_delete_bottom} alt="Remove item" />
                                            </div>
                                            <Typography>
                                                {`פריט ${i + 1} | ${item.count} יח' `}
                                            </Typography>
                                        </div>

                                        <img className="closed-item-cards-img" src={item.images[0]} alt="img" />
                                    </Paper>
                                </Grid>
                            ))}

                            {this.emptyGridItems()}
                        </Grid>
                    </div>
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


const mapDispatchToProps = {
    setNewDonation
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(DonorItems)
)