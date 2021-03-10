import React from 'react';

class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state ={
        }
    }

    donate1 = () =>{
        setTimeout(() => {
            this.props.history.push({
                pathname: './company'
            })
        }, 2000)
    };

    donate2 = () =>{
        setTimeout(() => {
            this.props.history.push({
                pathname: './newitem',
                state: {
                    donorName: 'notCompany',
                    logo: null,        
                    items: [],
                    currentItem: 1,
                    imgCounter: 0,
                    images: []
                }
            })
        }, 2000)
    };

    render(){
        return(
            <div className={"container fluid"}>
                <div className={"d-flex justify-content-center"}>
                    <p>אני חברה</p>
                    <button onClick={this.donate1}>
                        <p>מטעם חברה</p>
                    </button>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <p>אני עצמאי</p>
                    <button onClick={this.donate2}>
                        <p>עצמאי</p>
                    </button>
                </div>  
            </div>
        )
    }
}

export default Welcome;