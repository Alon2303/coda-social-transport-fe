import React from 'react';

class NewItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentItem: this.props.location.state.currentItem,
            amountOfItmes: '',
            selectedFile: '',
            imgCounter: this.props.location.state.imgCounter,
            maxImg: 3,
            files: this.props.location.state.files,
            comments: '',
            items: this.props.location.state.items,
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
    };

    handleUpload = (e)=>{
        let files = [];
        let input = e.target;
        for(let i =0; i< input.files.length; i++){
            files.push(input.files[i].name);
        }
        console.log('files', files);
        this.setState({
            files
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
        const {currentItem, amountOfItmes, comments, items, files} = this.state;
        if(currentItem === '1' ){
            this.setState({ 
                items :  [{currentItem, amountOfItmes, comments, files}],
                currentItem: currentItem + 1
            });
        }else {
            let tempItems = [];
            tempItems = {currentItem, amountOfItmes, comments, files};
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
                    files: this.props.location.state.files,
                }
            })
        }, 2000)
    };

    newItemProcess = (e) => {
        e.preventDefault();
        const {currentItem, amountOfItmes, comments, items, selectedFile} = this.state;
        this.setState({
            items: [{currentItem, amountOfItmes, comments, selectedFile}],
            currentItem: currentItem + 1
        });
        this.newItemProcesssDone();
    };

    render(){
        const {currentItem, amountOfItmes, maxImg, comments, items} = this.state;
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
                { amountOfItmes &&
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
                        <input type={"text"} name={"amountOfItmes"} onChange={this.handleChange}/>
                        יחידות  </p>
                    </div>
                    <div>
                        <p>הערות</p>
                        <input type={"text"} name={"comments"} onChange={this.handleChange}/>
                    </div>
                    { amountOfItmes &&
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