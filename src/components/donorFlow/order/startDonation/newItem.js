import React from 'react';
import { connect } from 'react-redux';

// Services
import donorDonationService from '../../../../services/donorDonationService';
import { setNewDonation } from '../../../../store/actions/donationActions';

import { TextField, Button, Avatar, Typography, } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";
import imagePlaceholder from '../../../../images/donation/imagePlaceholder.svg'
import imageBlackDot from '../../../../images/donation/imageBlackDot.svg'
import imageWhiteDot from '../../../../images/donation/imageWhiteDot.svg'

const styles = theme => ({
    title: {
        marginTop: '-18px',
        marginBottom: '12px',
        fontSize: '20px',
    },
    amountInput: {
        '& > *': {
            margin: theme.spacing(1),
            width: '55px',
            height: '16px',
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
    buttonSubmit: {
        '& > *': {
            borderRadius: '16px',
            height: '37px',
            width: '84px',
            backgroundColor: '#3A4F40',
            color: '#ffffff',
            fontFamily: 'RubikRegular sans-serif',
            marginTop: '70px',
            marginBottom: '40px'
        }
    },
    imagePlaceholder: {
        backgroundColor: '#ffffff',
        color: '#3A4F40',
        borderRadius: '50%',
        border: '0',
        marginBottom: '0',
        '& > *': {
            margin: '0 auto',
            width: '90px',
            height: '90px',
        }
    }
});

class NewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.donation.items,
            currImage: 0,
            currentItem: this.props.location.state.currentItem,
            imgCounter: this.props.location.state.imgCounter,
            images: this.props.location.state.images,
            selectedFile: '',
            count: '',
            maxImg: 3,
            itemComments: '',
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            direction: 'none',
            threshold: 150,
        }
    }

    touchStart(e) {
        const touchObj = e.touches[0];
        this.setState({
            ...this.state,
            startX: touchObj.clientX,
            startY: touchObj.clientY,
        })
    }

    touchMove(e) {
        const touchObj = e.touches[0];
        this.setState({
            ...this.state,
            currentX: touchObj.clientX,
            currentY: touchObj.clientY,
        })
    }

    touchEnd(e) {
        var s = {
            touchStarted: false
        };

        console.log("currImage: " + this.state.currImage);
        console.log("startX: " + this.state.startX);
        console.log("currentX: " + this.state.currentX);
        console.log("startY: " + this.state.startY);
        console.log("currentY: " + this.state.currentY);

        // if (this.state.currentY < this.state.startY < 10) {
        s.direction = (this.state.startX > this.state.currentX) ? "left" : "right";
        // }

        var nextImgIdx;

        if (s.direction === 'left') {
            if (this.state.currImage === 2) nextImgIdx = 0;
            else nextImgIdx = this.state.currImage + 1;
        }

        if (s.direction === 'right') {
            if (this.state.currImage === 0) nextImgIdx = 2;
            else nextImgIdx = this.state.currImage - 1;
        }

        if (Math.abs(this.state.startX - this.state.currentX) < this.state.threshold) {
            s.direction = this.state.startY > this.state.currentY ? "top" : "bottom";
            nextImgIdx = this.state.currImage;
        }

        console.log(' s.direction ' + s.direction);
        this.setState({ ...this.state, direction: s.direction, currImage: nextImgIdx });
    }

    handleRest = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }
    handleChange = (e) => {
        e.preventDefault();
        let { name, value } = e.target;
        this.setState({
            [name]: value.toLowerCase(),
        });
    };

    handleUpload = (e) => {
        let images = this.state.images.slice(); //copy the array
        let input = e.target;

        if (input.files.length === 1) {
            images[this.state.currImage] = URL.createObjectURL(e.target.files[0]);
        } else {
            for (let i = 0; i < input.files.length; i++) {
                images.push(URL.createObjectURL(e.target.files[i]));
            }
        }
        this.setState({ ...this.state, images })
    };

    onDeleteImage = () => {
        const newImages = this.state.images.slice(); //copy the array
        newImages.splice(this.state.currImage, 1);
        this.setState({ ...this.state, images: newImages })
        // this.setState(prevState => ({ images: newImages })); //set the new state
    }

    newItemProcessDone = (e) => {
        let tempItems = [];
        const { donation } = this.props;
        const { count, images, itemComments, items } = this.state;
        tempItems = { count, itemComments, images };
        this.setState({
            items: [...items, tempItems],
        });
        donation.items = [...donation.items, tempItems];
        console.log("newItemProcessDone -----  , donation.items: ", donation.items);
        console.log("newItemProcessDone -----  , tempItems: ", tempItems);
        this.props.setNewDonation(donation);
        this.props.history.push({ pathname: './donoritems' })
    };

    // addNewItem = (e) => {
    //     e.preventDefault();
    //     const { donorName, logo, currentItem, count, comments, items, images } = this.state;
    //     let tempItems = [];
    //     tempItems = { tags: 'כללי', count, comments, images, itemAccepted: 'לא' };
    //     if (currentItem === '1') {
    //         this.setState({
    //             items: [tempItems],
    //             currentItem: currentItem + 1
    //         });
    //     } else {
    //         this.setState({
    //             items: [...items, tempItems],
    //             currentItem: currentItem + 1
    //         });
    //     }
    //     setTimeout(() => {
    //         this.props.history.push({
    //             pathname: './newitem',
    //             state: {
    //                 donorName,
    //                 logo,
    //                 items,
    //                 currentItem: currentItem,
    //                 imgCounter: 0,
    //                 images: this.props.location.state.images,
    //             }
    //         })
    //     }, 2000)
    //     this.handleRest();
    // };

    newItemProcess = (e) => {
        e.preventDefault();
        const { count, itemComments, selectedFile } = this.state;
        this.setState({
            items: [{ tags: 'כללי', count, itemComments, selectedFile, itemAccepted: 'לא' }],
            count: ''
        });
        this.newItemProcessDone();
    };

    goBack = () => {
        const { donorName, logo, count, itemComments, images, items, contactName, phone, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, isSelfShipping, shippingComments, comments } = this.state;

        this.props.history.push({
            pathname: './donoritems',
            state: {
                donorName,
                logo,
                items: this.state.items,
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

    render() {
        const { classes, donation } = this.props;
        const { currImage, currentItem, count, maxImg, comments, items, donorName, logo, imgCounter, images } = this.state;

        return (
            <div className="new-item">
                <button className="close-new-item" tabindex="-1" onClick={this.goBack}>+</button>
                <div className="new-item-container">
                    <Typography variant="h5" className={classes.title}>פריט {currentItem}</Typography>
                    {/* <Typography variant="h5" style={{ marginTop: '-18px', marginBottom: '12px', fontSize: '20px' }}>פריט {currentItem}</Typography> */}

                    {(images && images.length >= 1) ?
                        '' : (
                            <Typography>
                                <p>כמה דגשים לצילום הפריט:
                            <br />
                            יש לצרף <span className="bold">לפחות</span> תמונה אחת של הפריט הנתרם.
                            <br />נשמח שהתמונה תהיה הכי אותנטית, בדיוק כמו התרומה שלך.
                            <br />
                            אפשר לצרף עד 3 תמונות מזוויות שונות.</p>
                            </Typography>

                        )}

                    <div className="swipe-gallery"
                        onTouchStart={this.touchStart.bind(this)}
                        onTouchMove={this.touchMove.bind(this)}
                        onTouchEnd={this.touchEnd.bind(this)}
                    >

                        {(images[currImage]) ?
                            (
                                <div className="image-gallery" >
                                    <img src={this.state.images[currImage]} alt="img" />
                                    <DeleteIcon fontSize="small" className="delete-icon" onClick={this.onDeleteImage} />
                                </div>
                            ) : (
                                <label className={classes.imagePlaceholder} >
                                    <input style={{ display: 'none' }} type="file" name="img" accept="image/*" multiple onChange={this.handleUpload} />
                                    <Avatar src={imagePlaceholder} variant="contained" className="new-item-avatar" />
                                </label>
                            )}
                    </div>


                    <div className="swipe-gallery-bottom">
                        {/* TODO: change to white dot if image uploaded */}
                        <img src={(currImage === 0) ? imageWhiteDot : imageBlackDot} />
                        <img src={(currImage === 1) ? imageWhiteDot : imageBlackDot} />
                        <img src={(currImage === 2) ? imageWhiteDot : imageBlackDot} />
                    </div>

                    <div className="new-item-form">

                        <Typography className="new-item-count" style={{ marginBottom: '36px' }}>
                            <p className="red-color">*</p>
                            <p className="bold amount">כמות</p>
                            <form className={classes.amountInput} noValidate autoComplete="off" >
                                <TextField id="outlined-basic" variant="outlined" type={"text"} name={"count"} onChange={this.handleChange} />
                            </form>
                            <p>יח'</p>
                        </Typography>

                        <Typography className="new-item-info">

                            <p>מידע נוסף</p>
                            <p>חשוב לציין את מידות הפריט ומצב השימוש בו</p>

                            <form className={classes.line} noValidate autoComplete="off">
                                <TextField id="standard-basic" multiline type={"text"} name={"itemComments"}
                                    onChange={this.handleChange} InputProps={{ classes: { underline: classes.underline } }} />
                            </form>

                        </Typography>
                    </div>

                    {/* check if "submit" btn should be disabled */}
                    <div className={classes.buttonSubmit}>

                        {(count && images.length >= 1) ?

                            <Button variant="contained" type={"submit"} onClick={this.newItemProcess}>
                                <Typography>
                                    הוספה
                                </Typography>
                            </Button>
                            :
                            <Button variant="contained" disabled>
                                <Typography>
                                    הוספה
                                </Typography>
                            </Button>
                        }
                    </div>

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log('PROPS IN NEW ITEM : ', state.donation.currDonation);
    return {
        donation: state.donation.currDonation,
    };
};

const mapDispatchToProps = {
    setNewDonation
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(NewItem)
)