import React from 'react';

class NewItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentItem: 1,
            amountOfItmes: '',
            maxImg: 3,
            items: [{item:1, img:'', }]
        }
    }


    handleChange = (e) =>{
        e.preventDefault();
        let {name, value} = e.target;
        this.setState({
            [name] : value.toLowerCase(),
        });
    };

    newItemProcesssDone = (e) =>{
        setTimeout(() => {
            this.props.history.push({
                pathname: './shipping',
                state: {
                    amountOfItmes: '1'
                }
            })
        }, 2000)
    };

    newItemProcess = async e => {
        e.preventDefault();
        this.newItemProcesssDone();
    };


    render(){
        const {currentItem, amountOfItmes, maxImg} = this.state;

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
                    <button>
                        <p>הבא</p>
                    </button>
                </div>    
                <div style={{backgroundColor:"white", border:"1px solid lightgray"}}>
                    <div>
                        <h3>{currentItem} פריט</h3> 
                        <p>ניתן להוסיף עד {maxImg} תמונות לפריט</p>  
                    </div>  
                    <hr/>
                    <div>
                        <p>add img here</p>
                    </div>
                    <hr/>
                    <div>
                        <p>כמות
                        <input/>
                        יחידות  </p>
                    </div>
                    <div>
                        <p>הערות</p>
                        <input/>
                    </div>
                    { amountOfItmes &&
                    <div>
                        <button type={"submit"} onClick={this.signupProcess}>מאושר, המשך/י</button>
                    </div>
                    }

                </div>
                <p>dasdsadas</p>              
            </form>
        )
    }
}

export default NewItem;