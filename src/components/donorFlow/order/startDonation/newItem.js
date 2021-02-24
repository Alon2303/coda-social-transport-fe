import React from 'react';

class NewItem extends React.Component {
    constructor(props){
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
        for(let i =0; i< input.files.length; i++){
            console.log('ff1', input.files[i].name )
            images.push(input.files[i].name);
        }
        console.log('images', images);
        this.setState({
            images
        })
    };

    newItemProcesssDone = (e) =>{
        let tempItems = [];
        const { donorName, logo, count, comments, items, images} = this.state;
        tempItems = {count, comments, images};
        console.log("newItemProcesssDone");
        this.setState({
            items : [...items, tempItems],
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

    addNewItem = (e) =>{
        e.preventDefault();
        const { donorName, logo, currentItem, count, comments, items, images} = this.state;
        let tempItems = [];
        tempItems = {tags: 'כללי', count, comments, images, itemAccepted: 'לא'};
        if(currentItem === '1' ){
            this.setState({ 
                items :  [tempItems],
                currentItem: currentItem + 1
            });
        }else {
            this.setState({
                items : [...items, tempItems],
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
        const {count, comments, selectedFile} = this.state;
        // how the data should look:
        // itmes: [{count: num, images: ["ffff", "ffff"], comments: ''}]
        this.setState({
            items: [{tags: 'כללי', count, comments, selectedFile, itemAccepted: 'לא'}],
            count: ''
        });
        this.newItemProcesssDone();
    };

    render(){
        const {currentItem, count, maxImg,items} = this.state;
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




