import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from "@material-ui/core/styles";
import imagePlaceholder from '../../../../images/donation/imagePlaceholder.svg'
import imageBlackDot from '../../../../images/donation/imageBlackDot.svg'

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
            width: '200px',

        }
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
            borderRadius: '16px',
            height: '37px',
            width: '84px',
            backgroundColor: '#3A4F40',
            color: '#ffffff',
            fontFamily: 'RubikRegular sans-serif'
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
            donorName: this.props.location.state.donorName,
            logo: this.props.location.state.logo,
            currentItem: this.props.location.state.currentItem,
            items: this.props.location.state.items,
            imgCounter: this.props.location.state.imgCounter,
            images: this.props.location.state.images,
            selectedFile: '',
            count: '',
            maxImg: 3,
            comments: ''
        }
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
        let images = [];
        let input = e.target;
        for (let i = 0; i < input.files.length; i++) {
            console.log('ff1', input.files[i].name)
            images.push(input.files[i].name);
        }
        console.log('images', images);
        this.setState({
            images
        })
    };

    newItemProcesssDone = (e) => {
        let tempItems = [];
        const { donorName, logo, currentItem, count, comments, items, images } = this.state;
        tempItems = { count, comments, images };
        console.log("newItemProcesssDone");
        this.setState({
            items: [...items, tempItems],
        });
        setTimeout(() => {
            this.props.history.push({
                pathname: './mainshipping',
                state: {
                    donorName,
                    logo,
                    items: this.state.items
                }
            })
        }, 2000)
    };

    addNewItem = (e) => {
        e.preventDefault();
        const { donorName, logo, currentItem, count, comments, items, images } = this.state;
        let tempItems = [];
        tempItems = { tags: 'כללי', count, comments, images, itemAccepted: 'לא' };
        if (currentItem === '1') {
            this.setState({
                items: [tempItems],
                currentItem: currentItem + 1
            });
        } else {
            this.setState({
                items: [...items, tempItems],
                currentItem: currentItem + 1
            });
        }
        setTimeout(() => {
            this.props.history.push({
                pathname: './newitem',
                state: {
                    donorName,
                    logo,
                    items,
                    currentItem: currentItem,
                    imgCounter: 0,
                    images: this.props.location.state.images,
                }
            })
        }, 2000)
        this.handleRest();
    };

    newItemProcess = (e) => {
        e.preventDefault();
        const { count, comments, selectedFile } = this.state;
        // how the data should look:
        // itmes: [{count: num, images: ["ffff", "ffff"], comments: ''}]
        this.setState({
            items: [{ tags: 'כללי', count, comments, selectedFile, itemAccepted: 'לא' }],
            count: ''
        });
        this.newItemProcesssDone();
    };

    render() {
        const { classes } = this.props;
        const { currentItem, count, maxImg, comments, items, donorName, logo, imgCounter, images } = this.state;
        console.log("items", items);
        return (
            <form className={"container fluid text-center"} style={{ backgroundColor: "lightgray" }} onSubmit={this.handleSubmit}>
                <div >
                    <h4>פרטי תרומה חדשה</h4>
                    <p>תהליך רישום התרומה זריז במיוחד</p>
                    <p>כולל העלאת תמונות הפריטים, בחירת טווח</p>
                    <p>לתהליך ההבולה ואפשרות לספר לנו אם</p>
                    <p>התרומה מיועדת ליעד ספציפי</p>
                </div>
                <div className={"text-left"} >
                    {count &&
                        <button onClick={this.addNewItem}>
                            <p>הוסף עוד פריט</p>
                        </button>
                    }
                </div>
                <div className="newItem">
                    <div>
                        <h3>פריט {currentItem}</h3>
                        {/* <p>ניתן להוסיף עד {maxImg} תמונות לפריט</p> */}
                        <p>כמה דגשים לצילום הפריט:
                            <br />
                            יש לצרף <span className="bold">לפחות</span> תמונה אחת של הפריט הנתרם.
                            <br />נשמח שהתמונה תהיה הכי אותנטית, בדיוק כמו התרומה שלך.
                            <br />
                            אפשר לצרף עד 3 תמונות מזוויות שונות.</p>
                    </div>

                    <label className={classes.imagePlaceholder}>
                        <input style={{ display: 'none' }} type="file" multiple name={"companyLogo"} onChange={this.handleUpload} />
                        <Avatar src={imagePlaceholder} variant="contained" className="newItemAvatar" />
                    </label>

                    <div className="uploadImageDots">
                        <img src={imageBlackDot} />
                        <img src={imageBlackDot} />
                        <img src={imageBlackDot} />
                    </div>

                    <div className="newItemCount">
                        <p className="redColor">*</p>
                        <p className="bold amount">כמות</p>
                        <form className={classes.amountInput} noValidate autoComplete="off" >
                            <TextField id="outlined-basic" variant="outlined" type={"text"} name={"count"} onChange={this.handleChange} />
                        </form>
                        <p>יח'</p>
                    </div>

                    <div className="newIteminfo">
                        <p>מידע נוסף</p>
                        <p>חשוב לציין את מידות הפריט ומצב השימוש בו</p>
                        <form className={classes.line} noValidate autoComplete="off">
                            <TextField id="standard-basic" type={"text"} name={"comments"} onChange={this.handleChange} />
                        </form>
                    </div>

                    {count &&
                        <div className={classes.button}>
                            <Button variant="contained" type={"submit"} onClick={this.newItemProcess}>הוספה</Button>
                            {/* <button type={"submit"} onClick={this.newItemProcess}>מאושר, המשך/י</button> */}
                        </div>
                    }
                </div>
            </form>
        )
    }
}

export default withStyles(styles)(NewItem);




