import React from 'react';

class NewDonation extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            user : this.props.location.state.user
        }
    }

    render(){

        console.log("f", this.props.location.state.user)
        return(
            <div className={"container fluid"}>
                <div className={"d-flex justify-content-center"}>
                    <div>
                        <p>sdfdsf</p>
                    </div>
                </div>  
            </div>
        );
    }
}

export default NewDonation;