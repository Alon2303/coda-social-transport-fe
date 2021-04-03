import React from 'react';
import { TextField, Button, Avatar, } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";
import imagePlaceholder from '../../../../images/donation/imagePlaceholder.svg'
import imageBlackDot from '../../../../images/donation/imageBlackDot.svg'
import imageWhiteDot from '../../../../images/donation/imageWhiteDot.svg'

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
            currImage: 0,
            donorName: this.props.location.state.donorName,
            logo: this.props.location.state.logo,
            currentItem: this.props.location.state.currentItem,
            items: this.props.location.state.items,
            imgCounter: this.props.location.state.imgCounter,
            images: this.props.location.state.images,
            contactName: this.props.location.state.contactName,
            phone: this.props.location.state.phone,
            shippingDateStart: this.props.location.state.shippingDateStart,
            shippingDateEnd: this.props.location.state.shippingDateEnd,
            pickUpAddress: this.props.location.state.pickUpAddress,
            shippingMethod: this.props.location.state.shippingMethod,
            isSelfShipping: this.props.location.state.isSelfShipping,
            comments: this.props.location.state.comments,
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
        const { donorName, logo, count, itemComments, images, items, contactName, phone, shippingDateStart, shippingDateEnd, pickUpAddress, shippingMethod, isSelfShipping, comments } = this.state;
        tempItems = { count, itemComments, images };
        this.setState({
            items: [...items, tempItems],
        });
        console.log("newItemProcessDone -----  , items: ", items);
        console.log("newItemProcessDone -----  , tempItems: ", tempItems);
        setTimeout(() => {
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
                    comments
                }
            })
        }, 2000)
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
        // how the data should look:
        // itmes: [{count: num, images: ["ffff", "ffff"], comments: ''}]
        this.setState({
            items: [{ tags: 'כללי', count, itemComments, selectedFile, itemAccepted: 'לא' }],
            count: ''
        });
        this.newItemProcessDone();
    };

    goBack = () => {
        const { donorName, logo, items } = this.state;
        this.props.history.push({
            pathname: './donoritems',
            state: {
                donorName,
                logo,
                items
            }
        })
    }

    render() {
        const { classes } = this.props;
        const { currImage, currentItem, count, maxImg, comments, items, donorName, logo, imgCounter, images } = this.state;

        return (
            <div className="new-item">
                <button className="close-new-item" tabindex="-1" onClick={this.goBack}>+</button>
                <div className="new-item-container">
                    <h3 style={{ marginTop: '-18px' }}>פריט {currentItem}</h3>

                    {(images && images.length >= 1) ?
                        '' : (
                            <div >
                                <p>כמה דגשים לצילום הפריט:
                            <br />
                            יש לצרף <span className="bold">לפחות</span> תמונה אחת של הפריט הנתרם.
                            <br />נשמח שהתמונה תהיה הכי אותנטית, בדיוק כמו התרומה שלך.
                            <br />
                            אפשר לצרף עד 3 תמונות מזוויות שונות.</p>
                            </div>

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
                        <img src={(currImage === 0) ? imageWhiteDot : imageBlackDot} />
                        <img src={(currImage === 1) ? imageWhiteDot : imageBlackDot} />
                        <img src={(currImage === 2) ? imageWhiteDot : imageBlackDot} />
                    </div>

                    <div className="new-item-form">

                        <div className="new-item-count">
                            <p className="red-color">*</p>
                            <p className="bold amount">כמות</p>
                            <form className={classes.amountInput} noValidate autoComplete="off" >
                                <TextField id="outlined-basic" variant="outlined" type={"text"} name={"count"} onChange={this.handleChange} />
                            </form>
                            <p>יח'</p>
                        </div>

                        <div className="new-item-info">

                            <p>מידע נוסף</p>
                            <p>חשוב לציין את מידות הפריט ומצב השימוש בו</p>

                            <form className={classes.line} noValidate autoComplete="off">
                                <TextField id="standard-basic" multiline type={"text"} name={"itemComments"}
                                    onChange={this.handleChange} InputProps={{ classes: { underline: classes.underline } }} />
                            </form>

                        </div>
                    </div>

                    {/* check if "submit" btn should be disabled */}
                    <div className={classes.buttonSubmit}>

                        {(count && images.length >= 1) ?

                            <Button variant="contained" type={"submit"} onClick={this.newItemProcess}>הוספה</Button>
                            :
                            <Button variant="contained" disabled>הוספה</Button>
                        }
                    </div>

                </div>
            </div>

        )
    }
}

export default withStyles(styles)(NewItem);




