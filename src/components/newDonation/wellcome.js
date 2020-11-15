import React from 'react';

class Wellcome extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            user : this.props.location.state.user
        }
    }

    donate1 = () =>{
        setTimeout(() => {
            this.props.history.push({
                pathname: './company',
                state: {
                    user: this.state.user
                }
            })
        }, 2000)
    };

    donate2 = () =>{
        setTimeout(() => {
            this.props.history.push({
                pathname: './newitem',
                state: {
                    items: [],
                    currentItem: 1,
                    imgCounter: 0
                }
            })
        }, 2000)
    };

    render(){
        return(
            <div className={"container fluid"}>
                <div className={"d-flex justify-content-center"}>
                    <p>asdfasldn
                        ,ljknsdf
                        lknms
                    </p>
                    <button onClick={this.donate1}>
                        <p>מטעם חברה</p>
                        {/* <img src={require('../../images/buttons/img1.png')} alt={"logo"} height={"100px"}/> */}
                    </button>
                </div>
                <p>asdasdasd
                    asdasdasdasdasd
                </p>
                <div className={"d-flex justify-content-center"}>
                    <button onClick={this.donate2}>
                        <p>עצמאי</p>
                        {/* <img src={require('../../images/buttons/img2.png')} alt={"logo"} height={"100px"}/> */}
                    </button>
                </div>  
            </div>
        )
    }
}

export default Wellcome;