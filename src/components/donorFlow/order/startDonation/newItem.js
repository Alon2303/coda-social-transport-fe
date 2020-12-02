import React from 'react';

class NewItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {             
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

    handleRest = () =>{
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }
    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
    };

    handleUpload = (e)=>{
        let images = [];
        let input = e.target;
        for(let i =0; i< input.images.length; i++){
            images.push(input.images[i].name);
        }
        console.log('images', images);
        this.setState({
            images
        })
    };

    newItemProcesssDone = (e) =>{
        console.log("newItemProcesssDone")
        setTimeout(() => {
            this.props.history.push({
                pathname: './mainshipping',
                state: {
                    items: this.state.items
                }
            })
        }, 2000)
    };

    addNewItem = (e) =>{
        e.preventDefault();
        const {currentItem, count, comments, items, images} = this.state;
        if(currentItem === '1' ){
            this.setState({ 
                items :  [{currentItem, count, comments, images}],
                currentItem: currentItem + 1
            });
        }else {
            let tempItems = [];
            tempItems = {currentItem, count, comments, images};
            this.setState({
                items : [...items, tempItems],
                currentItem: currentItem + 1
            });        
        }
        setTimeout(() => {
            this.props.history.push({
                pathname: './newitem',
                state: {
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
        const {currentItem, count, comments, selectedFile} = this.state;
        // how the data should look:
        // itmes: [{count: num, images: ["ffff", "ffff"], comments: ''}]
        this.setState({
            items: [{currentItem, count, comments, selectedFile}],
            currentItem: currentItem + 1,
            count: ''
        });
        this.handleRest();
        this.newItemProcesssDone();
    };

    render(){
        const {currentItem, count, maxImg, comments, items} = this.state;
        console.log("items", items);        
        return(
            <form className={"container fluid text-center"} style={{backgroundColor:"lightgray"}} onSubmit={this.handleSubmit}> 
                <div >
                    <h4>פרטי תרומה חדשה</h4>
                    <p>תהליך רישום התרומה זריז במיוחד</p>
                    <p>כולל העלאת תמונות הפריטים, בחירת טווח</p>
                    <p>לתהליך ההבולה ואפשרות לספר לנו אם</p>
                    <p>התרומה מיועדת ליעד ספציפי</p>
                </div>
                <div className={"text-left"} >
                { count &&
                    <button onClick={this.addNewItem}>
                        <p>הוסף עוד פריט</p>
                    </button>
                }
                </div>    
                <div style={{backgroundColor:"white", border:"1px solid lightgray"}}>
                    <div>
                        <h3>{currentItem} פריט</h3> 
                        <p>ניתן להוסיף עד {maxImg} תמונות לפריט</p>  
                    </div>  
                    <hr/>
                    <div>    
                        <p>העלאת תמונה</p>
                        <input type={"file"} multiple name={"companyLogo"} onChange={this.handleUpload}/>
                        {/* <button type={"button"} onClick={this.handleClick}>Upload</button> */}
                    </div>
                    <hr/>
                    <div>
                        <p>כמות
                        <input type={"text"} name={"count"} onChange={this.handleChange}/>
                        יחידות  </p>
                    </div>
                    <div>
                        <p>הערות</p>
                        <input type={"text"} name={"comments"} onChange={this.handleChange}/>
                    </div>
                    { count &&
                    <div>
                        <button type={"submit"} onClick={this.newItemProcess}>מאושר, המשך/י</button>
                    </div>
                    }

                </div>
                <p> בהצלחה </p>              
            </form>
        )
    }
}

export default NewItem;




