import React from 'react';
import NewItem from '../startDonation/newItem';
import MainShipping from '../shipping/mainShipping';

class mainFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // donationArray: [],
            stageNum : 1
        };
        this.callbackFunction = (childData) => {
            this.setState({donationArray: childData})
        }
    }

    render() {
        console.log('donatioA', this.state.donationArray);        


        return (
            <div className={"container-fluid"}>

                {this.state.stageNum === 1 &&
                <NewItem donationArray = {this.callbackFunction} />
                }

                <p> {this.state.donationArray}</p>
                 {this.state.stageNum === 2 &&
                <MainShipping donationArray = {this.state.donationArray} />
                }
            </div>
        );
    }
}

export default mainFlow;
